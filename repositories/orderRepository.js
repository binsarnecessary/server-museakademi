const { order } = require("../models")

class orderRepository {
    
    static async createOrder ({order_id, transaction_url, transaction_id, course_id, gross_amount, transaction_status, user_id }){
        const createdOrder = order.create({
            order_id,
            transaction_url,
            transaction_id,
            course_id,
            gross_amount,
            transaction_status,
            user_id
        });

        return createdOrder;
    }

    static async getOrderByOrderID({ order_id }) {
        const getOrder = await order.findOne({ where: { order_id } });

        return getOrder;
    }

    static async createtransaction({ order_id, transaction_status, gross_amount }) {
        const createdTransaction = order.update({
            order_id,
            transaction_status,
            gross_amount,
        },
        { where: { order_id } });

        return createdTransaction;
    }

    //getAllOrder

    static async getAllOrder() {
        const getAllOrder = await order.findAll({
        });
    
        return getAllOrder;
      }

}

module.exports = orderRepository;