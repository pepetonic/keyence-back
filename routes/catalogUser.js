const express = require("express");
const router = express.Router();
const UserCatalogController = require("../controllers/userCatalogController");
const authMiddleware = require("../middlewares/authVerify");

//Crud routes
router.get("/usersCatalog", authMiddleware, UserCatalogController.getAllUsersOnCatalogs);
router.post("/usersCatalog", authMiddleware, UserCatalogController.postOneUserOnCatalog);
router.patch("/usersCatalog/:id", authMiddleware, UserCatalogController.patchOneUserOnCatalog);
router.delete("/usersCatalog/:id", authMiddleware, UserCatalogController.deleteOneUserOnCatalog);

module.exports = router;