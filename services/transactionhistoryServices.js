const transactionhistoryRepository = require ("../repositories/transactionhistoryRepository");

class transacionhistoryServices {

    static async createTransaction({
      order_id,
      transaction_status,
      gross_amount
    }) {
      try {
        if (!order_id) {
          return {
            status: false,
            status_code: 400,
            message: "order_id wajib diisi",
            data: {
              registered_transaction: null,
            },
          };
        }
  
        if (!transaction_status) {
          return {
            status: false,
            status_code: 400,
            message: "transaction_status wajib diisi",
            data: {
              registered_transaction: null,
            },
          };
        }
  
        if (!gross_amount) {
          return {
            status: false,
            status_code: 400,
            message: "gross_amount wajib diisi",
            data: {
              registered_transaction: null,
            },
          };
        }
  
        const createdTransaction = await transactionhistoryRepository.createtransaction({
          order_id,
          transaction_status,
          gross_amount
        });
  
        return {
          status: true,
          status_code: 201,
          message: "Order created successfully",
          data: {
            createdTransaction: createdTransaction,
          },
        };
      } catch (err) {
        return {
          status: false,
          status_code: 500,
          message: err.message,
          data: {
            registered_transaction: null,
          },
        };
      }
    }

    static async getOrderByOrderID({ order_id }) {
      try {
        const getOrder = await transactionhistoryRepository.getOrderByOrderID({
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
        const getAllOrder = await transactionhistoryRepository.getAllOrder();
  
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

    //getAllOrder


  }

module.exports = transacionhistoryServices;