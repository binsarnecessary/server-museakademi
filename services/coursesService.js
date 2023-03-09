const courseRepository = require ("../repositories/courseRepository");

class coursesService {

  static async getCourseByID ({id}) {
    
    try {

      const getCourse = await courseRepository.getCourseByID({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          posts: getCourse
        }
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          registered_course: null,
        },
      };
    }
  }

//   static async create ({course_id, title, description}){
//     try {
//       if (!course_id){
//         return{
//           status: false,
//           status_code: 400,
//           message: "Course_id wajib diisi",
//           data: {
//             registered_course: null,
//           },
//         };
//       }

//       if (!title){
//         return{
//           status: false,
//           status_code: 400,
//           message: "Title wajib diisi",
//           data: {
//             registered_course: null,
//           },
//         };
//       }

//       if (!description){
//         return{
//           status: false,
//           status_code: 400,
//           message: "Description wajib diisi",
//           data: {
//             registered_course: null,
//           },
//         };
//       }

//       const createdCourse = await courseRepository.create({
//         course_id,
//         title,
//         description,
//       });
      
//       return {
//         status: true,
//         status_code: 201,
//         message: "Course created successfully",
//         data: {
//           created_course: createdCourse,
//         },
//       };
//     } catch (err) {
//       return {
//         status: false,
//         status_code: 500,
//         message: err.message,
//         data: {
//           registered_mentor: null,
//         },
//       };
//     }
//   }

//   static async updateCourseByID ({title, description}){
//     try{
//       const getCourse = await courseRepository.getCourseByID({id});

//       if (getCourse.id == id){
//         const updatedCourse = await courseRepository.updateCourseByID({
//           title,
//           description
//         });

//         return {
//           status: true,
//           status_code: 200,
//           message: "Course updated successfully",
//           data: {
//             updated_course: updatedCourse,
//           },
//         };
//       } else {
//         return{
//           status: true,
//           status_code: 401,
//           message: "Update Course Unauthorized",
//           data: {
//             updated_course: null,
//           },
//         };
//       }
//     } catch (err) {
//       return {
//         status: false,
//         status_code: 500,
//         message: err.message,
//         data: {
//           registered_course: null,
//         },
//       };
//     }
//   }

}

module.exports = coursesService;

