const mitraService = require("../services/mitraServices");
const { Mitra } = require("../models");

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

const getMitraById = async (req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await mitraService.getMitraBySlug({
      id,
    });

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

const deletedMitraById = async (req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await mitraService.deletedMitraById({
      id,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const updateMitra = async (req, res) => {
  try {
    await Mitra.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).send({
      status: true,
      message: "Updated Succes",
      data: {
        course: Mitra,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  getAllMitra,
  createMitra,
  getMitraBySlug,
  getMitraById,
  deletedMitraById,
  updateMitra
};
