const { transactionhistory } = require("../models")

class transactionhistoryRepository {

    static async getOrderByOrderID({ order_id }) {
        const getOrder = await order.findOne({ where: { order_id } });

        return getOrder;
    }

    static async createtransaction({ order_id, transaction_status, gross_amount }) {
        const createdTransaction = transactionhistory.create({
            order_id,
            transaction_status,
            gross_amount,
        });

        return createdTransaction;
    }

    //getAllOrder

    static async getAllOrder() {
        const getAllOrder = await transactionhistory.findAll({
        });
    
        return getAllOrder;
      }

}

module.exports = transactionhistoryRepository;