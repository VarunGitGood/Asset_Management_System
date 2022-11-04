const connection = require("../config/connection");
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

// @GET
// request will get count of all assets from master_assets
exports.getAssetCount = async (req, res, next) => {
  try {
    let query = "SELECT COUNT(*) FROM assets_master";
    connection.query(query, (err, results) => {
      if (err) {
        next(new ErrorResponse(err.message));
      }
      res.status(200).json({
        success: true,
        message: "Asset count fetched!",
        data: results,
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 404));
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
      is_computer,
    } = req.body;
    let id;
    let query =
      "INSERT INTO assets_master (model, comp_name, room_id, asset_status, purchase_cost, purchase_date, last_updated, last_updated_staff_id, is_computer) VALUES (?,?,?,?,?,?,?,?,?)";
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
          return next(new ErrorResponse(err.message));
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
              return next(new ErrorResponse(err.message));
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
    next(new ErrorResponse(error.message, 400));
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


