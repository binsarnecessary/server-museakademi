const usersService = require("../services/usersService");
const { User } = require("../models");
const user = require("../models/user");

const getUserById = async(req, res, next) => {
  const {id} = req.params;

  const { status, status_code, message, data } = await usersService.getUserById({id});

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  })
}

const getAllUserByRole = async (req, res, next) => {
  const {role} = req.params;

  const {status, status_code, message, data} = await usersService.getAllUserByRole({role});

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  })
}

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

const getAllUsers = (req, res) => {
  User.findAll()
    .then((user) => {
      res.status(200).send({
        status: true,
        message: "success",
        data: {
          user: user,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Terjadi kesalahan pada server!" });
    });
};


const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).send({
      status: true,
      message: 'Updated Succes',
      data: {
        user: user
      }
    })
  } catch (err) {
    console.log(err.message)
  }

};

module.exports = { getAllUserByRole, getUserById ,deleteByID, getAllUsers, updateUser };
