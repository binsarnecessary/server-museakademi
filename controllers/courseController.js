const coursesService = require("../services/coursesService");
const { course } = require("../models");

const getCourseByID = async (req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await coursesService.getCourseByID({
      id,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const createCourse = async (req, res, next) => {
  const {
    course_id,
    isCoursePaid,
    courseTitle,
    courseDescription,
    courseStartDate,
    courseEndDate,
    coursePrice,
    courseStatus,
    courseTimeStart,
    courseTimeEnd,
    coursePhoto,
    courseCategory,
    courseRating,
    courseDeadline,
    namaMentor,
    sesi1,
    link1,
    sesi2,
    link2,
    sesi3,
    link3,
    sesi4,
    link4,
    sesi5,
    link5,
    sesi6,
    link6,
    sesi7,
    link8,
  } = req.body;

  const { status, status_code, message, data } = await coursesService.create({
    course_id,
    isCoursePaid,
    courseTitle,
    courseDescription,
    courseStartDate,
    courseEndDate,
    coursePrice,
    courseStatus,
    courseTimeStart,
    courseTimeEnd,
    coursePhoto: req.file,
    courseCategory,
    courseRating,
    courseDeadline,
    namaMentor,
    sesi1,
    link1,
    sesi2,
    link2,
    sesi3,
    link3,
    sesi4,
    link4,
    sesi5,
    link5,
    sesi6,
    link6,
    sesi7,
    link8,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getAllCourse = async (req, res, next) => {
  const { status, status_code, message, data } =
    await coursesService.getAllCourse({});

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const deleteCourseById = async (req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } = await coursesService.deleteCourseById({
    id,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

// const updateCourseByID = async (req, res, next) => {

//     const { id } = req.params;

//     const { title, description } = req.body;

//     const { status, status_code, message, data } = await coursesService.updateCourseByID({
//         id,
//         title,
//         description,
//     });

//     res.status (status_code).send({
//         status:status,
//         message: message,
//         data: data,
//     })

// };

module.exports = { getCourseByID, createCourse, getAllCourse, deleteCourseById};
