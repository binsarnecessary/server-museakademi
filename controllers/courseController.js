const coursesService = require("../services/coursesService")

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

module.exports = { getCourseByID };
