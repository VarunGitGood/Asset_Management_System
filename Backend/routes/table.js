const express = require("express");
const router = express.Router();
const {
  getAllAssets,
  getSingleAsset,
  createAsset,
  deleteAsset,
  getAllLogs,
  getAllRooms,
  deleteRoom,
  addRoom,
  getRoomAssets,
  getMisc,
  getComputers,
  getRepairAssets,
  sendRepair,
} = require("../controllers/tableControllers");

router
  .get("/api/v1/assets", getAllAssets)
  .post("/api/v1/assets", createAsset)
  .get("/api/v1/assets/:id", getSingleAsset)
  .delete("/api/v1/assets/:id", deleteAsset)
  .get("/api/v1/logs", getAllLogs)
  .get("/api/v1/rooms", getAllRooms)
  .delete("/api/v1/rooms/:id", deleteRoom)
  .post("/api/v1/rooms", addRoom)
  .get("/api/v1/rooms/:id", getRoomAssets)
  .get("/api/v1/misc", getMisc)
  .get("/api/v1/computers", getComputers)
  .get("/api/v1/repassets", getRepairAssets)
  .put("/api/v1/repassets", sendRepair);

module.exports = router;
