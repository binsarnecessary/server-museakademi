const { course } = require ("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class courseRepository {

    static async getCourseByID ( {id} ){
        const getCourse = await course.findOne({where: {id}});

        return getCourse;
    }

    // static async getAllCourse() {
    //     const getAllCourse = await course.findAll({

    //     });

    //     return getAllCourse;
    // }

    // static async create({course_id, courseTitle, description, 
    //     courseStartDate, courseEndDate, coursePrice, courseStatus,
    //     courseTimeStart, courseTimeEnd, coursePhoto, courseCategory,
    //     courseRating, courseDeadline
    // }){
    //     const createCourse = course.create({
    //         course_id,
    //         courseTitle,
    //         description, 
    //         courseStartDate, 
    //         courseEndDate, 
    //         coursePrice, 
    //         courseStatus,
    //         courseTimeStart, 
    //         courseTimeEnd, 
    //         coursePhoto, 
    //         courseCategory,
    //         courseRating, 
    //         courseDeadline
    //     });

    //     return createCourse;
    // }

    // static async updateCourseByID({ id, courseTitle, description, 
    //     courseStartDate, courseEndDate, coursePrice, courseStatus,
    //     courseTimeStart, courseTimeEnd, coursePhoto, courseCategory,
    //     courseRating, courseDeadline
    // }){
    //     const updatedCourse = await course.update
    //     ({
    //         id,
    //         courseTitle,
    //         description, 
    //         courseStartDate, 
    //         courseEndDate, 
    //         coursePrice, 
    //         courseStatus,
    //         courseTimeStart, 
    //         courseTimeEnd, 
    //         coursePhoto, 
    //         courseCategory,
    //         courseRating, 
    //         courseDeadline
    //     },
    //     {where: {id}}
    //     );

    //     return updatedCourse;
    // }


}

module.exports = courseRepository