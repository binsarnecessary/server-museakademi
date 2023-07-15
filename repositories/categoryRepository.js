const { Category } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class CategoryRepository {
static async getAllCategory() {
  const getAllCategory = await Category.findAll({});

  return getAllCategory;
}

  static async getCategoryById({ id }) {
    const getCategoryById = await Category.findOne({ where: { id } });
    
    return getCategoryById;
  }
  

  static async create({
    categoryName,
  }) {
    const createCategory = Category.create({
      categoryName,
    });

    return createCategory;
  }

  static async deleteCategoryById({ id }) {
    const deletedCategory = await Category.destroy({ where: { id } });

    return deletedCategory;
  }
}

module.exports = CategoryRepository;
