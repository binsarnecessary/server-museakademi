'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    order_id: DataTypes.STRING,
    course_id: DataTypes.INTEGER,
    course_price: DataTypes.INTEGER,
    transaction_url: DataTypes.STRING,
    transaction_id: DataTypes.STRING,
    payment_status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};