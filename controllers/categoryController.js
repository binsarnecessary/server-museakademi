const categoryService = require("../services/categoryServices");
const { Category } = require("../models");

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

const deleteCategoryById = async (req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await categoryService.deletedCategoryById({
      id,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const updateCategory = async(req, res) => {
  try {
    await Category.update(req.body, {
      where: {id: req.params.id},
    })
    res.status(200).send({
      status: true,
      message: 'Updated Success',
      data: {
        category: Category,
      }
    })
  } catch (err) {
    console.log(err.message)
  }
}

module.exports = {
  getAllCategory,
  getCategoryById,
  createCategory,
  deleteCategoryById,
  updateCategory,
};
