const orderRepository = require ("../repositories/orderRepository");

class ordersServices {
    static async createOrder({ order_id, transaction_url, transaction_id, course_id, course_price, payment_status }) {    
        try {
            const createdOrder = await orderRepository.createOrder({
              course_id,
              order_id,
              course_price,
              transaction_url,
              transaction_id,
              payment_status
            });
            return {
              status: true,
              status_code: 201,
              message: "Berhasil mendaftarkan course",
              data: {
                registered_course: createdOrder,
              },
            };
      } catch (err) {
        return {
          status: false,
          status_code: 500,
          message: err.message,
          data: {
            registered_user: null,
          },
        };
      }
    }
  }

module.exports = ordersServices;