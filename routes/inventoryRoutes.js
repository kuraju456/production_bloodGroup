const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);
//GET RECENT BLOOD RECORDS
router.get(
  "/get-recent-inventory",
  authMiddleware,
  getRecentInventoryController
);

//GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

//GET DONAR RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET orgnaisation RECORDS
router.get("/get-organisation", authMiddleware, getOrganisationController);

//GET orgnaisation RECORDS
router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController,
)

module.exports = router;
// const express = require("express");
// const authMiddelware = require("../middlewares/authMiddelware");
// const {
//   createInventoryController,
//   getInventoryController,
//   getDonarsController,
//   getHospitalController,
//   getOrgnaisationController,
//   getOrgnaisationForHospitalController,
//   getInventoryHospitalController,
//   getRecentInventoryController,
// } = require("../controllers/inventoryController");

// const router = express.Router();

// //routes
// // ADD INVENTORY || POST
// router.post("/create-inventory", authMiddelware, createInventoryController);

// //GET ALL BLOOD RECORDS
// router.get("/get-inventory", authMiddelware, getInventoryController);
// //GET RECENT BLOOD RECORDS
// router.get(
//   "/get-recent-inventory",
//   authMiddelware,
//   getRecentInventoryController
// );

// //GET HOSPITAL BLOOD RECORDS
// router.post(
//   "/get-inventory-hospital",
//   authMiddelware,
//   getInventoryHospitalController
// );

// //GET DONAR RECORDS
// router.get("/get-donars", authMiddelware, getDonarsController);

// //GET HOSPITAL RECORDS
// router.get("/get-hospitals", authMiddelware, getHospitalController);

// //GET orgnaisation RECORDS
// router.get("/get-orgnaisation", authMiddelware, getOrgnaisationController);

// //GET orgnaisation RECORDS
// router.get(
//   "/get-orgnaisation-for-hospital",
//   authMiddelware,
//   getOrgnaisationForHospitalController
// );

// module.exports = router;
// const express = require("express");
// const authMiddleware = require("../middlewares/authMiddleware");
// const {
//   createInventoryController,
//   getInventoryController,
//   getDonarsController,
//   getHospitalController,
//   getOrganizationController,
//   getOrganizationForHospitalController,
//   getInventoryHospitalController,
//   getRecentInventoryController,
// } = require("../controllers/inventoryController");

// const router = express.Router();

// //routes
// // ADD INVENTORY || POST
// router.post("/create-inventory", authMiddleware, createInventoryController);

// //GET ALL BLOOD RECORDS
// router.get("/get-inventory", authMiddleware, getInventoryController);
// //GET RECENT BLOOD RECORDS
// router.get(
//   "/get-recent-inventory",
//   authMiddleware,
//   getRecentInventoryController
// );

// //GET HOSPITAL BLOOD RECORDS
// router.post(
//   "/get-inventory-hospital",
//   authMiddleware,
//   getInventoryHospitalController
// );

// //GET DONAR RECORDS
// router.get("/get-donars", authMiddleware, getDonarsController);

// //GET HOSPITAL RECORDS
// router.get("/get-hospitals", authMiddleware, getHospitalController);

// //GET orgnaisation RECORDS
// router.get("/get-organization", authMiddleware, getOrganizationController);

// //GET orgnaisation RECORDS
// router.get(
//   "/get-organization-for-hospital",
//   authMiddleware,
//   getOrganizationForHospitalController
// );

// module.exports = router;