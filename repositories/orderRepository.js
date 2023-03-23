const { order } = require("../models")

class orderRepository {
    
    static async createOrder ({order_id, transaction_url, transaction_id, course_id, course_price, payment_status }){
        const createdOrder = order.create({
            order_id,
            transaction_url,
            transaction_id,
            course_id,
            course_price,
            payment_status
        });

        return createdOrder;
    }
}

module.exports = orderRepository;