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
const livestreamingController = require("./controllers/livestreamingController");

// Import Midleware
const middleware = require("./middlewares/auth");

// Define Routes

// Auth
app.post("/auth/register", upload.single("profile_picture"), authController.register);
app.post("/auth/login", authController.login);
app.get("/auth/me", middleware.authenticate, authController.currentUser);

//User
// app.get("/api/users", middleware.authenticate, middleware.isAdmin, usersController.getAllUsers);
app.get("/api/users", usersController.getAllUsers);
app.get("/api/users", usersController.getAllUsers);
app.patch("/api/users/:id",upload.none(), usersController.updateUser)
app.delete("/api/users/:id", usersController.deleteByID)

// app.post("/auth/login-google", authController.loginGoogle);

//Mentor
app.post("/api/mentor", upload.none(), mentorController.create);
app.patch("/api/mentor/:id",upload.none(), mentorController.updateMentor);
app.get("/api/mentor/:id", mentorController.getMentorByID);
app.get("/api/mentor", mentorController.getAll)

//Course
app.get("/api/course/:id", courseController.getCourseByID)
app.get("/api/course", courseController.getAllCourse);
app.post("/api/course",upload.single("coursePhoto"), courseController.createCourse)
app.delete("/api/course/:id", courseController.deleteCourseById)
app.patch("/api/course/:id",upload.none(), courseController.updateCourse);

//Livestreaming
app.get("/api/livestreaming/:id", livestreamingController.getLiveByID)
app.get("/api/livestreaming", livestreamingController.getAllLive)
app.post("/api/livestreaming",upload.single("thumbnailLivestreaming"), livestreamingController.createLive)
app.delete("/api/livestreaming/:id", livestreamingController.deleteLive)
app.patch("/api/livestreaming/:id",upload.none(), livestreamingController.updateLivestreaming);


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
