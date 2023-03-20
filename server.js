const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const upload = require("./utils/fileUpload");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Import Controllers
const authController = require("./controllers/authController.js");
const courseController = require("./controllers/courseController");
const mentorController = require("./controllers/mentorController");
const usersController = require("./controllers/usersController");

// Import Midleware
const middleware = require("./middlewares/auth");

// Define Routes

// Auth
app.post("/auth/register", upload.single("profile_picture"), authController.register);
app.post("/auth/login", authController.login);
app.get("/auth/me", middleware.authenticate, authController.currentUser);

//User
app.delete("/api/users/:id", usersController.deleteByID)
// app.get("/api/users", middleware.authenticate, middleware.isAdmin, usersController.getAllUsers);
app.get("/api/users", usersController.getAllUsers);
app.get("/api/users", usersController.getAllUsers);
app.patch("/api/users/:id",upload.none(), usersController.updateUser)
  

// app.post("/auth/login-google", authController.loginGoogle);

//Mentor
app.post("/api/mentor", upload.fields([
  { name: "scanKTP", maxCount: 1 },
  { name: "fileCV", maxCount: 1 },
  { name: "filePhoto", maxCount: 1 }
]), mentorController.create);
app.put("/api/mentor/:id", mentorController.updateByID);
app.get("/api/mentor/:id", mentorController.getMentorByID);
app.get("/api/mentor", mentorController.getAll)

//Course
app.get("/api/course/:id", courseController.getCourseByID)
app.get("/api/course", courseController.getAllCourse);
app.post("/api/course",upload.single("coursePhoto"), courseController.createCourse)
app.delete("/api/course/:id", courseController.deleteCourseById)


app.delete(
  "/users/:id",
  middleware.authenticate,
  middleware.isAdmin,
  usersController.deleteByID
);

// API Documentation
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Public File Access
app.use("/public/files", express.static(path.join(__dirname, "/storages")));

app.listen(process.env.PORT, () => {
  console.log(
    `Server berhasil berjalan di port http://localhost:${
      process.env.PORT
    }`
  );
});

module.exports = app;
