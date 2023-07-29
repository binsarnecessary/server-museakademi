const SertifikatService = require("../services/sertifikatService");

const getAllSertifikat = async (req, res, next) => {
  const { status, status_code, message, data } =
    await SertifikatService.getAllSertifiakt({});

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getSertifikatByUserId = async (req, res, next) => {
  const { user_id } = req.params;

  const { status, status_code, message, data } =
    await SertifikatService.getSertifikatByUserId({ user_id });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getSertifikatByCourseId = async (req, res, next) => {
  const { course_id } = req.params;

  const { status, status_code, message, data } =
    await SertifikatService.getSertifikatByCourseId({ course_id });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getSertifikatById = async (req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await SertifikatService.getSertifikatById({ id });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const createSertifikat = async (req, res, next) => {
  const { user_id, nameParticipant, course_id, nameCourse, linkSertifikat } =
    req.body;

  const { status, status_code, message, data } = await SertifikatService.create({
    user_id,
    nameParticipant,
    course_id,
    nameCourse,
    linkSertifikat,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const deletedSertifikat = async(req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } = await SertifikatService.deleteSertifkat({id});

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  })
};



module.exports = {
  getAllSertifikat,
  getSertifikatByUserId,
  getSertifikatByCourseId,
  getSertifikatById,
  createSertifikat,
  deletedSertifikat
};
