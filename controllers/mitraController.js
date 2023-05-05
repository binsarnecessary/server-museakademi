const mitraService = require("../services/mitraServices");

const getAllMitra = async (req, res, next) => {
  const { status, status_code, message, data } = await mitraService.getAllMitra(
    {}
  );

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const createMitra = async (req, res, next) => {
  const { nameMitra, courseMitra, logoMitra, slug } = req.body;

  const { status, status_code, message, data } = await mitraService.create({
    nameMitra,
    courseMitra,
    logoMitra: req.file,
    slug,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

module.exports = {
  getAllMitra,
  createMitra,
};
