const TugasService = require("../services/tugasService");
const {Tugas} = require("../models");

const deleteByID = async (req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } = await TugasService.deleteByID({
    id,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getAllTugasByCourse = async(req, res, next) => {
  const {course_id} = req.params;

  const {status, status_code, message, data} = await TugasService.getAllTugasByCourse({course_id});

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  })
}

const getAllTugas = async (req, res, next) => {
  const {status, status_code, message, data} = await TugasService.getAllTugas({})

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  })
}

const getTugasById = async (req, res, next) => {
  const {id} = req.params;

  const {status, status_code, message, data} = await TugasService.getById({id})

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
    
  })
}

const createTugas = async (req, res, next) => {
  const { 
    user_id,
    course_id,
    judulTugas,
    petunjukPengerjaan,
    linkTugas,
    tugasStart,
    tugasEnd
  } = req.body;

  const {status, status_code, message, data} = await TugasService.create({
    user_id,
    course_id,
    judulTugas,
    petunjukPengerjaan,
    linkTugas,
    tugasStart,
    tugasEnd,
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  })
} 

const updateTugas = async(req, res) => {
  try {
    await Tugas.update(req.body, {
      where: {id:req.params.id},
    })
    res.status(200).send({
      status: true,
      message: 'Updated Success',
      data: {
        tugas: Tugas,
      }
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getAllTugas, deleteByID, getTugasById, createTugas, getAllTugasByCourse, updateTugas };
