const connection = require("../connection");
const ErrorResponse = require("../utils/errorResponse");

const dateConverter = () => {
  let newDate = new Date();
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  let convertedDate = `${year}-${month}-${day}`;
  return convertedDate;
};

// @GET
// request will get all assets from master_assets
exports.getAllAssets = async (req, res, next) => {
  try { 
    let query = "SELECT * FROM assets_master";
    connection.query(query, (err, results) => {
      if (err) {
        next(new ErrorResponse(err.message));
      }
      res.status(200).json({
        success: true,
        message: "All Assets fetched!",
        data: results,
        date: dateConverter(),
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 404));
  }
};

// @GET
// request will get single asset from master_assets
exports.getSingleAsset = async (req, res, next) => {
  try {
    let asset_id = req.params.id;
    let query = "SELECT * FROM assets_master WHERE asset_id = ?";
    connection.query(query, [asset_id], async (err, result) => {
      if (err) {
        return next(new ErrorResponse(err.message));
      }
      res.status(200).json({
        success: true,
        message: "Asset fetched!",
        data: result,
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 400));
  }
};


// @POST
// request will create asset in master_assets
exports.createAsset = async (req, res, next) => {
  try {
    let {
      model,
      comp_name,
      room_id,
      asset_status,
      purchase_cost,
      purchase_date,
      last_updated,
      last_updated_staff_id,
      is_computer
    } = req.body;
    console.log(req.body);
    let id;
    let query =
      "INSERT INTO assets_master (model, comp_name, room_id, asset_status, purchase_cost, purchase_date, last_updated_staff_id, is_computer) VALUES (?,?,?,?,?,?,?,?)";
    let logQuery =
      "INSERT INTO activity_log (staff_id, asset_id, log_date, log_description) VALUES (?,?,?,?)";
    connection.query(
      query,
      [
        model,
        comp_name,
        room_id,
        asset_status,
        purchase_cost,
        purchase_date,
        last_updated,
        last_updated_staff_id,
        is_computer,
      ],
      async (err, result) => {
        if (err) {
          console.log(err);
          return next(new ErrorResponse(err.message,401));
        }
        id = result.insertId;
        connection.query(
          logQuery,
          [
            last_updated_staff_id,
            id,
            dateConverter(),
            `Asset with id ${id} created`,
          ],
          async (err, result) => {
            if (err) {
              return next(new ErrorResponse("bcc1",402));
            }
          }
        );
        res.status(200).json({
          success: true,
          message: "Asset created!",
        });
      }
    );
  } catch (error) {
    next(new ErrorResponse("bc3", 403));
  }
};

// DELETE
// request will delete asset from master_assets
exports.deleteAsset = async (req, res, next) => {
  try {
    const { staff_id } = req.body;
    let asset_id = req.params.id;
    let query = "DELETE FROM assets_master WHERE asset_id = ?";
    let logQuery =
      "INSERT INTO activity_log (staff_id, asset_id, log_date, log_description) VALUES (?,?,?,?)";
    connection.query(query, [asset_id], async (err, result) => {
      if (err) {
        return next(new ErrorResponse(err.message));
      }

      connection.query(
        logQuery,
        [
          staff_id,
          asset_id,
          dateConverter(),
          `Asset with id ${asset_id} deleted`,
        ],
        async (err, result) => {
          if (err) {
            return next(new ErrorResponse(err.message));
          }
          
        }
      );
      res.status(200).json({
        success: true,
        message: "Asset deleted!"
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 400));
  }
};

// @GET
// request will get all activity logs from activity_log
exports.getAllLogs = async (req, res, next) => {
  try {
    let query = "SELECT * FROM activity_log";
    // add to activity log
    logQuery = "INSERT INTO activity_log (staff_id, log_date, log_description) VALUES (?,?,?)";
    connection.query(query, (err, results) => {
      if (err) {
        next(new ErrorResponse(err.message));
      }
      res.status(200).json({
        success: true,
        message: "All Logs fetched!",
        data: results,
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 404));
  }
};

// @POST
// add  a new room to rooms table
exports.addRoom = async (req, res, next) => {
  try {
    let { room_id } = req.body;
    let query = "INSERT INTO rooms (room_id) VALUES (?)";
    connection.query(query, [room_id], async (err, result) => {
      if (err) {
        return next(new ErrorResponse(err.message));
      }
      res.status(200).json({
        success: true,
        message: "Room added!",
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 400));
  }
}

// @DELETE
// delete a room from rooms table
exports.deleteRoom = async (req, res, next) => {
  try {
    let room_id = req.params.id;
    let query = "DELETE FROM rooms WHERE room_id = ?";
    connection.query(query, [room_id], async (err, result) => {
      if (err) {
        return next(new ErrorResponse("Room not found",404));
      }
      res.status(200).json({
        success: true,
        message: "Room deleted!",
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 400));
  }
}

// @GET
// get all rooms from rooms table
exports.getAllRooms = async (req, res, next) => {
  try {
    let query = "SELECT * FROM rooms";
    connection.query(query, (err, results) => {
      if (err) {
        next(new ErrorResponse(err.message));
      }
      res.status(200).json({
        success: true,
        message: "All Rooms fetched!",
        data: results,
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 404));
  }
}

// @GET
// get all assets which are not computers
exports.getMisc = async (req, res, next) => {
  try {
    let query = "SELECT * FROM assets_master WHERE is_computer = 0 AND asset_status = 1";
    connection.query(query, (err, results) => {
      if (err) {
        next(new ErrorResponse(err.message));
      }
      res.status(200).json({
        success: true,
        message: "All Misc Assets fetched!",
        data: results,
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 404));
  }
}

// @GET
// get all assets which are computers
exports.getComputers = async (req, res, next) => {
  try {
    let query = "SELECT * FROM assets_master WHERE is_computer = 1 AND asset_status = 1";
    connection.query(query, (err, results) => {
      if (err) {
        next(new ErrorResponse(err.message));
      }
      res.status(200).json({
        success: true,
        message: "All Computer Assets fetched!",
        data: results,
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 404));
  }
}

// @GET
// get all assets which are in room id
exports.getRoomAssets = async (req, res, next) => {
  try {
    let room_id = req.params.id;
    let query = "SELECT * FROM assets_master WHERE room_id = ? AND asset_status = 1";
    connection.query(query, [room_id], (err, results) => {
      if (err) {
        next(new ErrorResponse(err.message));
      }
      res.status(200).json({
        success: true,
        message: "All Assets fetched!",
        data: results,
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 404));
  }
}

// @GET
// get all assets which are in repair

exports.getRepairAssets = async (req, res, next) => {
  try {
    let query = "SELECT * FROM assets_master WHERE asset_status = 0";
    connection.query(query, (err, results) => {
      if (err) {
        next(new ErrorResponse(err.message));
      }
      res.status(200).json({
        success: true,
        message: "All Repair Assets fetched!",
        data: results,
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 404));
  }
}

// @POST
// send item for repair using id

exports.sendRepair = async (req, res, next) => {
  try {
    let { asset_id } = req.body;
    let query = "UPDATE assets_master SET asset_status = 0 WHERE asset_id = ?";
    connection.query(query, [asset_id], async (err, result) => {
      if (err) {
        return next(new ErrorResponse(err.message));
      }
      res.status(200).json({
        success: true,
        message: "Asset sent for repair!",
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 400));
  }
}



