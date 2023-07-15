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

  static async deletedCategoryById({ id }) {
    try {
      const getCategory = await categoryRepository.getCategoryById({ id });

      if (!getCategory)
        return {
          status: false,
          status_code: 404,
          message: "User tidak ditemukan",
          data: {
            deleted_category: null,
          },
        };

      const deletedCategroy = await categoryRepository.deleteCategoryById({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          deleted_category: deletedCategroy,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          deleted_category: null,
        },
      };
    }
  }

}

module.exports = CategoryService;
