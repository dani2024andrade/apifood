// Router, Multer and uploadConfig Import
const { Router } = require('express');

// Controllers Import and Initialization
const UsersController = require("../controllers/UsersController")

const usersController = new UsersController();

// Middleware Import
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

// Initializing Router and Upload
const usersRoutes = Router();

// Users Routes
usersRoutes.post("/",usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);

// Export
module.exports = usersRoutes;