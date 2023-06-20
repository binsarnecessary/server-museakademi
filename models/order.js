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
      order.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
      order.belongsTo(models.course, {foreignKey: 'course_id', as: 'course'})
      order.hasOne(models.transactionhistory, {as: 'transactionhistory'})
    }
  }
  order.init({
    order_id: DataTypes.STRING,
    course_id: DataTypes.INTEGER,
    gross_amount: DataTypes.FLOAT,
    transaction_url: DataTypes.STRING,
    transaction_id: DataTypes.STRING,
    transaction_status: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};