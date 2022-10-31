const express = require("express");
const router = express.Router();
const {
  getAllAssets,
  getSingleAsset,
  getAssetCount,
  createAsset,
  deleteAsset,
  getAllLogs
} = require("../controllers/tableControllers");

router
  .get("/api/v1/assets", getAllAssets)
  .post("/api/v1/assets", createAsset)
  .get("/api/v1/assets/:id", getSingleAsset)
  .delete("/api/v1/assets/:id", deleteAsset)
  .get("/api/v1/assets/count", getAssetCount).get("/api/v1/logs", getAllLogs);

module.exports = router;
