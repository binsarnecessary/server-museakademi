const { v4: uuidv4 } = require('uuid');
const midtransClient = require('midtrans-client');
const ordersServices = require('../services/ordersServices');
const axios = require('axios');
const base64 = require('base-64');
const { order } = require("../models")


const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: 'SB-Mid-server-WcPq1FjKxRsyoLgxdKuSY_Fb',
});

const generateOrder = async (req, res) => {
    const order_id = uuidv4();

    const { user_id, course_id, gross_amount } = req.body;
    
    let parameter = {
      "transaction_details": {
        "order_id": order_id,
        "gross_amount": gross_amount,
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
        gross_amount,
        transaction_url: transactionUrl,
        transaction_id: transactionToken,
        user_id,
        transaction_status: "pending"
      });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const createTransaction = async (req, res) => {

  try {
    await order.update(req.body, {
      where: {id: req.params.id},
    });
    res.status(200).send({
      status: true,
      message: 'Updated Mentor Succes',
      data: {
        Order: order
      }
    })
  }
  catch (err){
    console.log(err.message)
  }

  // const { order_id, transaction_status, gross_amount } = req.body;

  // const { status, status_code, message, data } = await ordersServices.createTransaction({
  //     order_id,
  //     transaction_status,
  //     gross_amount
  // });

  // res.status(status_code).send({
  //   status: status,
  //   message: message,
  //   data: data,
  // });
};

const getOrderByOrderID = async (req, res, next) => {
  const { order_id } = req.params;

  const { status, status_code, message, data } =
    await ordersServices.getOrderByOrderID({
      order_id,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getAllOrder = async (req, res, next) => {

  const { status, status_code, message, data } =
  await ordersServices.getAllOrder({
  });

res.status(status_code).send({
  status: status,
  message: message,
  data: data,
});
}

const updateOrder = async(req, res) => {
  try {
    await order.update(req.body, {
      where: {id: req.params.id},
    });
    res.status(200).send({
      status: true,
      message: 'Updated Success',
      data: {
        order: order
      }
    });
  } catch (err) {
    console.log(err);
  }
}


module.exports = { generateOrder, createTransaction, getOrderByOrderID, getAllOrder, updateOrder };