const express = require("express");
const router = express.Router();
const UserCatalogController = require("../controllers/userCatalogController");
const authMiddleware = require("../middlewares/authVerify");
const upload = require('../middlewares/multer');

//Crud routes
router.get('/',function(req, res){
    res.send({message:'Welcome'});
})
router.get("/usersCatalog", authMiddleware, UserCatalogController.getAllUsersOnCatalogs);
router.post("/usersCatalog", authMiddleware, UserCatalogController.postOneUserOnCatalog);
router.patch("/usersCatalog/:id", authMiddleware, UserCatalogController.patchOneUserOnCatalog);
router.delete("/usersCatalog/:id", authMiddleware, UserCatalogController.deleteOneUserOnCatalog);

//Upload file and save register
router.post("/usersCatalog/upload", authMiddleware, upload.single('file'), UserCatalogController.uploadFileCatalog);

module.exports = router;