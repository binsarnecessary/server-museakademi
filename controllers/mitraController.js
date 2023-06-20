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

const getMitraBySlug = async (req, res, next) => {
  const { slug } = req.params;

  const { status, status_code, message, data } =
    await mitraService.getMitraBySlug({
      slug,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const createMitra = async (req, res, next) => {
  const {
    emailMitra,
    nameMitra,
    instagramMitra,
    facebookMitra,
    waMitra,
    alamatMitra,
    courseTitle,
    logoMitra,
    slug,
    headTagline,
    paragraphText,
  } = req.body;

  const { status, status_code, message, data } = await mitraService.create({
    emailMitra,
    nameMitra,
    instagramMitra,
    facebookMitra,
    waMitra,
    alamatMitra,
    courseTitle,
    logoMitra: req.file,
    slug,
    headTagline,
    paragraphText,
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
  getMitraBySlug,
};
