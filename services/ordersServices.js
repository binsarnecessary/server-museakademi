const order = require("../models/order");
const orderRepository = require ("../repositories/orderRepository");

class ordersServices {
    static async createOrder({ order_id, transaction_url, transaction_id, course_id, gross_amount, transaction_status, user_id }) {    
        try {
            const createdOrder = await orderRepository.createOrder({
              course_id,
              order_id,
              gross_amount,
              transaction_url,
              transaction_id,
              transaction_status,
              user_id
            });
            return {
              status: true,
              status_code: 201,
              message: "Transaksi Berhasil Dilakukan",
              data: {
                transaction_create: createdOrder,
              },
            };
      } catch (err) {
        return {
          status: false,
          status_code: 500,
          message: err.message,
          data: {
            transaction_create: null,
          },
        };
      }
    }

    static async createTransaction({
      order_id,
      transaction_status,
      gross_amount
    }) {

      try {
        const getOrderByOrderID = await orderRepository.getOrderByOrderID({
          order_id
        });

        if (getOrderByOrderID.order_id == order_id){
          const updatedtransaction = await orderRepository.createTransaction({
            transaction_status,
            gross_amount
          });

          return {
          status: true,
          status_code: 200,
          message: "Transaction updated successfully",
          data: {
            updated_transaction: updatedtransaction,
          },
          };
        } else {
          return {
            status: true,
            status_code: 401,
            message: "Update Transaction Unauthorized",
            data: {
              updated_transaction: null,
            },
          };
        }
      } catch (err){
        return {
          status: false,
          status_code: 500,
          message: err.message,
          data: {
            registered_transaction: null,
          },
        };
      }

      // try {
      //   if (!order_id) {
      //     return {
      //       status: false,
      //       status_code: 400,
      //       message: "order_id wajib diisi",
      //       data: {
      //         registered_transaction: null,
      //       },
      //     };
      //   }
  
      //   if (!transaction_status) {
      //     return {
      //       status: false,
      //       status_code: 400,
      //       message: "transaction_status wajib diisi",
      //       data: {
      //         registered_transaction: null,
      //       },
      //     };
      //   }
  
      //   if (!gross_amount) {
      //     return {
      //       status: false,
      //       status_code: 400,
      //       message: "gross_amount wajib diisi",
      //       data: {
      //         registered_transaction: null,
      //       },
      //     };
      //   }
  
      //   const createdTransaction = await orderRepository.createtransaction({
      //     order_id,
      //     transaction_status,
      //     gross_amount
      //   });
  
      //   return {
      //     status: true,
      //     status_code: 201,
      //     message: "Order created successfully",
      //     data: {
      //       createdTransaction: createdTransaction,
      //     },
      //   };
      // } catch (err) {
      //   return {
      //     status: false,
      //     status_code: 500,
      //     message: err.message,
      //     data: {
      //       registered_transaction: null,
      //     },
      //   };
      // }
    }

    static async getOrderByOrderID({ order_id }) {
      try {
        const getOrder = await orderRepository.getOrderByOrderID({
          order_id,
        });
  
        return {
          status: true,
          status_code: 200,
          message: "Success",
          data: {
            posts: getOrder,
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

    static async getAllOrder({}) {
      try {
        const getAllOrder = await orderRepository.getAllOrder();
  
        return {
          status: true,
          status_code: 200,
          message: "Success",
          data: {
            order: getAllOrder,
          },
        };
      } catch (err) {
        return {
          status: false,
          status_code: 500,
          message: err.message,
          data: {
            registered_order: null,
          },
        };
      }
    }

  }

module.exports = ordersServices;