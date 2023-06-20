const categoryRepository = require("../repositories/categoryRepository");
const Cloudinary = require("../utils/cloudinary");

class CategoryService {
  static async getAllCategory({}) {
    try {
      const getAll = await categoryRepository.getAllCategory(); // invoke the function to fetch the data

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          Category: getAll,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          Category: null,
        },
      };
    }
  }

  static async getAllCategoryWithCourse({}) {
    try {
      const getAllCategoryWithCourse =
        await categoryRepository.getAllCategoryWithCourse();

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          Category: getAllCategoryWithCourse,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          Category: null,
        },
      };
    }
  }

  static async getCategoryById({ id }) {
    try {
      const getCategoryById = await categoryRepository.getCategoryById({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          Category: getCategoryById,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          Category: null,
        },
      };
    }
  }

  static async create({ categoryName }) {
    try {
      if (!categoryName) {
        return {
          status: false,
          status_code: 400,
          message: "Nama Category wajib diisi",
          data: {
            Category: null,
          },
        };
      }
      const createdCategory = await categoryRepository.create({
        categoryName,
      });

      return {
        status: true,
        status_code: 201,
        message: "Category created successfully",
        data: {
          created_Category: createdCategory,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          created_Category: null,
        },
      };
    }
  }
}

module.exports = CategoryService;
