const { v4: uuidv4 } = require('uuid');
const midtransClient = require('midtrans-client');
const ordersServices = require('../services/ordersServices');

const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: 'SB-Mid-server-bQ2zbO4r398FPMd-waqotOxY',
});

const generateOrder = async (req, res) => {
    const order_id = uuidv4();

    const { course_id, course_price } = req.body;
    
    let parameter = {
      "transaction_details": {
        "order_id": order_id,
        "gross_amount": course_price,
      },
      "credit_card": {
        "secure": true
      },
      "enabled_payments": ["bca_va"],
      "bca_va": {
        "va_number": "1234567890",
        "free_text": {
            "inquiry": [
                {
                    "en": "text in English",
                    "id": "text in Bahasa Indonesia"
                }
            ],
            "payment": [
                {
                    "en": "text in English",
                    "id": "text in Bahasa Indonesia"
                }
            ]
        }
    },
    "callbacks": {
      "finish": "https://youtube.com"
    }
    };

    const transaction = await snap.createTransaction(parameter);
    let transactionToken = transaction.token;
    let transactionUrl = transaction.redirect_url;

      const { status, status_code, message, data } = await ordersServices.createOrder({
        course_id,
        order_id: order_id,
        course_price,
        transaction_url: transactionUrl,
        transaction_id: transactionToken,
        payment_status:null
      });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });

  
  // try {

  //   const parameters = {
  //     "transaction_details": {
  //       "order_id": order_id,
  //       "gross_amount": 1
  //     },
  //   };

    // const transaction = await snap.createTransaction(parameters);
    // const transactionToken = transaction.token;
    // const transactionUrl = transaction.redirect_url;

    // const responseData = {
    //   orderId: order_id,
    //   transactionToken: transactionToken,
    //   transactionUrl: transactionUrl,
    //   }

  //     console.log(responseData)

  //   res.status(200).json({
  //     message: 'Transaction created successfully',
  //     data: {
  //       orderId: order_id,
  //       transactionToken: transactionToken,
  //       transactionUrl: transactionUrl,
  //     },
  //   });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({
  //     message: 'Failed to create transaction',
  //     data: null,
  //   });
  // }

  // const createOrder = async (req, res) => {
  //   const transaction = req.params;
  
  //   const { status, status_code, message, data } = await orderRepository.createOrder({
  //     order_id,
  //     course_id,
  //     gross_amount,
  //     midtrans_response
  //   });
  
  //   res.status(status_code).send({
  //     status: status,
  //     message: message,
  //     data: data,
  //   });
  // };

};


module.exports = { generateOrder };
