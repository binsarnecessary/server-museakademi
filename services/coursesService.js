const courseRepository = require("../repositories/courseRepository");
const Cloudinary = require("../utils/cloudinary");

class coursesService {
  static async getCourseByID({ id }) {
    try {
      const getCourse = await courseRepository.getCourseByID({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          course: getCourse,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          course: null,
        },
      };
    }
  }

  static async getCourseByStatusPaid({ isCoursePaid }) {
    try {
      const getCoursePaid = await courseRepository.getCourseByStatusPaid({
        isCoursePaid,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          course: getCoursePaid,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          course: null,
        },
      };
    }
  }

  static async getCourseByMitra({ slugMitra }) {
    try {
      const getcourseTitle = await courseRepository.getCourseByMitra({
        slugMitra,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          course: getcourseTitle,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          course: null,
        },
      };
    }
  }

  static async getAllCourseByCategory({category_id}) {
    try {
      const getAllCourseByCategory = await courseRepository.getAllCourseByCategory({category_id})

      return {
        status: true,
        status_code:200,
        message: 'Success',
        data: {
          course: getAllCourseByCategory,
        }
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          course: null
        }
      };
    }
  }

  static async coursePurchase({id}) {
    try {
      const coursePurchase = await courseRepository.coursesPurchase({id})

      return {
        status: true,
        status_code: 200,
        message: 'Success',
        data: {
          course: coursePurchase
        }
      }
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          course: null
        }
      }
    }
  }

  static async create({
    isCoursePaid,
    courseTitle,
    courseDescription,
    courseStartDate,
    courseEndDate,
    coursePrice,
    courseStatus,
    courseTimeStart,
    courseTimeEnd,
    coursePhoto: thumbnailCourse,
    category_id,
    courseRating,
    courseDeadline,
    namaMentor,
    mentor_id,
    mitra_id,
    slugMitra,
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
  }) {
    try {
      if (!courseTitle) {
        return {
          status: false,
          status_code: 400,
          message: "Title wajib diisi",
          data: {
            course: null,
          },
        };
      }

      if (!courseDescription) {
        return {
          status: false,
          status_code: 400,
          message: "Description wajib diisi",
          data: {
            course: null,
          },
        };
      }
      const { url } = await Cloudinary.upload(thumbnailCourse);
      const createdCourse = await courseRepository.create({
        isCoursePaid,
        courseTitle,
        courseDescription,
        courseStartDate,
        courseEndDate,
        coursePrice,
        courseStatus,
        courseTimeStart,
        courseTimeEnd,
        coursePhoto: url,
        category_id,
        mentor_id,
        mitra_id,
        courseRating,
        courseDeadline,
        namaMentor,
        slugMitra,
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

      return {
        status: true,
        status_code: 201,
        message: "Course created successfully",
        data: {
          created_course: createdCourse,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          created_course: null,
        },
      };
    }
  }

  static async deleteCourseById({ id }) {
    try {
      const getCourse = await courseRepository.getCourseByID({ id });

      if (!getCourse)
        return {
          status: false,
          status_code: 404,
          message: "User tidak ditemukan",
          data: {
            deleted_course: null,
          },
        };

      const deletedCourse = await courseRepository.deleteCourseById({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          deleted_course: deletedCourse,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          deleted_course: null,
        },
      };
    }
  }

  static async getAllCourse({}) {
    try {
      const getAll = await courseRepository.getAllCourse(); // invoke the function to fetch the data

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          course: getAll,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          course: null,
        },
      };
    }
  }
}

module.exports = coursesService;
