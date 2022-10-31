const connection = require("../config/connection");
const ErrorResponse = require("../utils/errorResponse");


// @GET
// request will get all assets from master_assets
exports.getAllAssets = async (req, res, next) => {
  try {
    let query = "SELECT * FROM master_assets";
    connection.query(query, (err, results) => {
      if (err) {
        next(new ErrorResponse(err.message, err.errno));
      }
      res.status(200).json({
        success: true,
        message: "Assets fetched!",
        data: results,
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 404));
  }
}

// @GET
// request will get single asset from master_assets
exports.getSingleAsset = async (req, res, next) => {
  try {
    let { asset_id } = req.body;
    let query = "SELECT * FROM master_assets WHERE asset_id = ?";
    connection.query(query, [asset_id], async (err, result) => {
      if (err) {
        return next(new ErrorResponse(err.message, err.errno));
      }
      console.log(result);
      res.status(200).json({
        success: true,
        message: "Asset fetched!",
        data: result,
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 400));
  }
}

// @GET
// request will get count of all assets from master_assets
exports.getAssetCount = async (req, res, next) => {
  try {
    let query = "SELECT COUNT(*) FROM master_assets";
    connection.query(query, (err, results) => {
      if (err) {
        next(new ErrorResponse(err.message, err.errno));
      }
      res.status(200).json({
        success: true,
        message: "Assets fetched!",
        data: results,
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 404));
  }
}

// @POST
// request will create asset in master_assets
exports.createAsset = async (req, res, next) => {
  try {
    let { model, comp_name, room_id, asset_status, purchase_cost, purchase_date, last_updated, last_updated_staff_id, is_computer } = req.body;
    //test forms of dates
    let query = "INSERT INTO master_assets (model, comp_name, room_id, asset_status, purchase_cost, purchase_date, last_updated, last_updated_staff_id, is_computer) VALUES (?,?,?,?,?,?,?,?,?)";
    connection.query(query, [model, comp_name, room_id, asset_status, purchase_cost, purchase_date, last_updated, last_updated_staff_id, is_computer], async (err, result) => {
      if (err) {
        return next(new ErrorResponse(err.message, err.errno));
      }
      console.log(result);
      res.status(200).json({
        success: true,
        message: "Asset created!",
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 400));
  }
}

// @DELETE
// request will delete asset from master_assets
exports.deleteAsset = async (req, res, next) => {
  try {
    let { asset_id } = req.body;
    let query = "DELETE FROM master_assets WHERE asset_id = ?";
    connection.query(query, [asset_id], async (err, result) => {
      if (err) {
        return next(new ErrorResponse(err.message, err.errno));
      }
      console.log(result);
      res.status(200).json({
        success: true,
        message: "Asset deleted!",
      });
    });
  } catch (error) {
    next(new ErrorResponse(error.message, 400));
  }
}


