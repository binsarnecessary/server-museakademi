const { v4: uuidv4 } = require('uuid');
const midtransClient = require('midtrans-client');
const transactionhistoryServices = require('../services/transactionhistoryServices');

const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: 'SB-Mid-server-WcPq1FjKxRsyoLgxdKuSY_Fb',
  });

const createTransaction = async (req, res, next) => {
  const { order_id, transaction_status, gross_amount } = req.body;

  const { status, status_code, message, data } = await transactionhistoryServices.createTransaction({
      order_id,
      transaction_status,
      gross_amount
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getOrderByOrderID = async (req, res, next) => {
  const { order_id } = req.params;

  const { status, status_code, message, data } =
    await transactionhistoryServices.getOrderByOrderID({
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
  await transactionhistoryServices.getAllOrder({
  });

res.status(status_code).send({
  status: status,
  message: message,
  data: data,
});
}

module.exports = { createTransaction, getOrderByOrderID, getAllOrder };