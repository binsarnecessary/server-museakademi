const categoryService = require("../services/categoryServices");

const getAllCategory = async (req, res, next) => {
  const { status, status_code, message, data } = await categoryService.getAllCategory(
    {}
  );

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getCategoryById = async (req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await categoryService.getCategoryById({
      id,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getAllCategoryWithCourse = async (req, res, next) => {
  const {status, status_code, message, data} = await categoryService.getAllCategoryWithCourse(
    {}
  );

  res.status(status_code).send({
    status: status_code,
    message: message,
    data: data,
  });
};

const createCategory = async (req, res, next) => {
  const {
    categoryName,
  } = req.body;

  const { status, status_code, message, data } = await categoryService.create({
    categoryName
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

module.exports = {
  getAllCategory,
  getCategoryById,
  createCategory,
  getAllCategoryWithCourse,
};
