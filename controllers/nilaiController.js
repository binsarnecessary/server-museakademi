const NilaiService = require("../services/nilaiService");

const getAllNilai = async (req, res, next) => {
  const {status, status_code, message, data} = await NilaiService.getAllNilai({})

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  })
}

const createNilai = async (req, res, next) => {
  const { 
    tugas_id,
    user_id,
    skorNilai
  } = req.body;

  const {status, status_code, message, data} = await NilaiService.create({
    tugas_id,
    user_id,
    skorNilai
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  })
} 


module.exports = { getAllNilai, createNilai };
