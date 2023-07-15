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

const getCourseByStatusPaid = async (req, res, next) => {
  const { isCoursePaid } = req.params;

  const { status, status_code, message, data } =
    await coursesService.getCourseByStatusPaid({
      isCoursePaid,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getCourseByMitra = async (req, res, next) => {
  const { slugMitra } = req.params;

  const { status, status_code, message, data } =
    await coursesService.getCourseByMitra({
      slugMitra,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getAllCourseByCategory = async (req, res, next) => {
  const {category_id} = req.params;

  const {status, status_code, message, data} = await coursesService.getAllCourseByCategory({category_id})

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  })
}

const coursePurchased = async (req, res, next) => {
  const {id} = req.params;

  const {status, status_code, message, data} = await coursesService.coursePurchase({id});

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  })
}

const createCourse = async (req, res, next) => {
  const {
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
    category_id,
    courseRating,
    courseDeadline,
    namaMentor,
    user_id,
    mitra_id,
    slugMitra,
  } = req.body;

  const { status, status_code, message, data } = await coursesService.create({
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
    category_id,
    courseRating,
    courseDeadline,
    namaMentor,
    user_id,
    mitra_id,
    slugMitra,
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

  const { status, status_code, message, data } =
    await coursesService.deleteCourseById({
      id,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const updateCourse = async (req, res) => {
  try {
    await course.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).send({
      status: true,
      message: "Updated Succes",
      data: {
        course: course,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  getCourseByID,
  getCourseByStatusPaid,
  getCourseByMitra,
  createCourse,
  getAllCourse,
  deleteCourseById,
  updateCourse,
  getAllCourseByCategory,
  coursePurchased
};
