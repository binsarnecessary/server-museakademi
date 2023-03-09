const usersService = require("../services/usersService");
const { User } = require("../models");

const getPostsByID = async (req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await usersService.getPostsByID({
      id,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const deleteByID = async (req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } = await usersService.deleteByID({
    id,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getAllUsers =  (req, res) => {
  User
    .findAll()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({ message: "Terjadi kesalahan pada server!" });
    });
};

module.exports = { getPostsByID, deleteByID, getAllUsers };
