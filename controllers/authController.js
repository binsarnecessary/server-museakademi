const authService = require("../services/authServices");

const register = async (req, res) => {
  const { name, email, password, role, address, phone } = req.body;

  const { status, status_code, message, data } = await authService.register({
    name,
    email,
    password,
    role,
    profile_picture: req.file,
    address,
    phone,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const currentUser = async (req, res) => {
  const currentUser = req.user;

  res.status(200).send({
    status: true,
    message: "Get current user success.",
    data: {
      user: currentUser,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  
  const { status, status_code, message, data } = await authService.login({
    email,
    password,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

// const loginGoogle = async (req, res) => {
//   const { google_credential } = req.body;

//   const { status, status_code, message, data } = await authService.loginGoogle({
//     google_credential,
//   });

//   res.status(status_code).send({
//     status: status,
//     message: message,
//     data: data,
//   });
// };

module.exports = { register, login, currentUser };
