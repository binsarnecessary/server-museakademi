'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactionhistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transactionhistory.belongsTo(models.order, {foreignKey: 'payment_id', as: 'payment'})
    }
  }
  transactionhistory.init({
    order_id: DataTypes.STRING,
    payment_id: DataTypes.INTEGER,
    transaction_status: DataTypes.STRING,
    gross_amount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'transactionhistory',
  });
  return transactionhistory;
};

// order_id,
// transaction_status,
// gross_amount,