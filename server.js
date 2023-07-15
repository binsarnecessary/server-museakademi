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
const orderController = require("./controllers/orderController");
const mitraController = require("./controllers/mitraController");
const transactionController = require("./controllers/transactionController");
const categoryController = require("./controllers/categoryController");
const tugasController = require("./controllers/tugasController");
const nilaiController = require("./controllers/nilaiController");
const sessionController = require("./controllers/sessionController");


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
app.get("/api/users/:id", usersController.getUserById);
app.get("/api/users/role/:role", usersController.getAllUserByRole);
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
app.get("/api/course/paid/:isCoursePaid", courseController.getCourseByStatusPaid)
app.get("/api/course/mitra/:slugMitra", courseController.getCourseByMitra)
app.get("/api/course", courseController.getAllCourse);
app.get("/api/course/category/:category_id", courseController.getAllCourseByCategory)
app.get("/api/course/purchased/:id", courseController.coursePurchased);
app.post("/api/course",upload.single("coursePhoto"), courseController.createCourse)
app.delete("/api/course/:id", courseController.deleteCourseById)
app.patch("/api/course/:id",upload.none(), courseController.updateCourse);

//Mitra
app.get("/api/mitra", mitraController.getAllMitra);
app.get("/api/mitra/:slug", mitraController.getMitraBySlug)
// app.get("/api/mitra/detail/:id", mitraController.getMitraById)
app.post("/api/mitra",upload.single("logoMitra"), mitraController.createMitra);
app.delete("/api/mitra/:id", mitraController.deletedMitraById)
app.patch("/api/mitra/:id",upload.none(), mitraController.updateMitra);

//Livestreaming
app.get("/api/livestreaming/:id", livestreamingController.getLiveByID)
app.get("/api/livestreaming", livestreamingController.getAllLive)
app.post("/api/livestreaming",upload.single("thumbnailLivestreaming"), livestreamingController.createLive)
app.delete("/api/livestreaming/:id", livestreamingController.deleteLive)
app.patch("/api/livestreaming/:id",upload.none(), livestreamingController.updateLivestreaming);

//Order
app.post("/api/order", upload.none(), orderController.generateOrder);

//TransactionHistory
app.post("/api/handling", upload.none(), transactionController.createTransaction);
app.get("/api/order/:id", transactionController.getOrderByOrderID);
app.get("/api/order", transactionController.getAllOrder);

//Category
app.post("/api/category", upload.none(), categoryController.createCategory);
app.get("/api/category/:id", categoryController.getCategoryById);
app.get("/api/category", categoryController.getAllCategory);
app.delete("/api/category/:id", categoryController.deleteCategoryById);
app.patch("/api/category/:id", upload.none(), categoryController.updateCategory)

//Tugas
app.post("/api/tugas", upload.none(), tugasController.createTugas);
app.get("/api/tugas", tugasController.getAllTugas)
app.get("/api/tugas/:id", tugasController.getTugasById)
app.get("/api/tugas/course/:course_id", tugasController.getAllTugasByCourse);
app.delete("/api/tugas/:id", tugasController.deleteByID)
app.patch("/api/tugas/:id", upload.none(), tugasController.updateTugas);

//Nilai
app.post("/api/nilai", upload.none(), nilaiController.createNilai);
app.get("/api/nilai", nilaiController.getAllNilai)

//Session
app.post("/api/session", upload.none(), sessionController.createSessions);
app.get("/api/session", sessionController.getAllSession);
app.get("/api/session/:id", sessionController.getSessionById);
app.get("/api/session/course/:course_id", sessionController.getAllSessionByCourseId);
app.delete("/api/session/:id", sessionController.deleteSessionById);
app.patch("/api/session/:id", upload.none(), sessionController.updateSession);


// API Documentation
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Public File Access
app.use("/public/files", express.static(path.join(__dirname, "/storages")));

app.listen(process.env.PORT, () => {
  console.log(
    "Server berhasil berjalan Welkom To API Museakademi"
  );
});

module.exports = app;
