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
  updateRepair,
  increaseCount,
  decreaseCount,
} = require("../controllers/tableControllers");

const { protect } = require("../middleware/protect");

router
  .get("/api/v1/assets", protect, getAllAssets)
  .post("/api/v1/assets", protect, createAsset)
  .get("/api/v1/assets/:id", protect, getSingleAsset)
  .post("/api/v1/assets/:id", protect, deleteAsset)
  .get("/api/v1/logs", protect, getAllLogs)
  .get("/api/v1/rooms", protect, getAllRooms)
  .delete("/api/v1/rooms/:id", protect, deleteRoom)
  .post("/api/v1/rooms", protect, addRoom)
  .get("/api/v1/rooms/:id", protect, getRoomAssets)
  .get("/api/v1/misc", protect, getMisc)
  .get("/api/v1/computers", protect, getComputers)
  .get("/api/v1/repassets", protect, getRepairAssets)
  .put("/api/v1/repassets", protect, sendRepair)
  .put("/api/v1/update/:id", protect, updateRepair)
  .post("/api/v1/inc/:id", protect, increaseCount)
  .post("/api/v1/dec/:id", protect, decreaseCount);

module.exports = router;
