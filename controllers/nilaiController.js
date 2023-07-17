const NilaiService = require("../services/NilaiService");
const { Nilai } = require("../models");

const getAllNilai = async (req, res, next) => {
  const { status, status_code, message, data } = await NilaiService.getAllNilai(
    {}
  );

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getNilaiById = async (req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await NilaiService.getNilaiById({ id });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getNilaiByUserId = async (req, res, next) => {
  const { user_id } = req.params;

  const { status, status_code, message, data } =
    await NilaiService.getNilaiByUserId({ user_id });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getNilaiByTugasId = async (req, res, next) => {
  const { tugas_id } = req.params;

  const { status, status_code, message, data } =
    await NilaiService.getNilaiByTugasId({ tugas_id });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const createNilai = async (req, res, next) => {
  const { tugas_id, user_id, skorNilai } = req.body;

  const { status, status_code, message, data } = await NilaiService.create({
    tugas_id,
    user_id,
    skorNilai,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const deletedNilai = async (req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await NilaiService.deletedNilaiById({
      id,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const updatedNilai = async (req, res) => {
  try {
    await Nilai.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).send({
      status: true,
      message: "Updated Succes",
      data: {
        course: Nilai,
      },
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  getAllNilai,
  createNilai,
  getNilaiById,
  getNilaiByUserId,
  getNilaiByTugasId,
  deletedNilai,
  updatedNilai,
};
