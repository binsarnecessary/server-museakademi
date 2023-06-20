const TugasService = require("../services/tugasService");

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
    mentor_id,
    judulTugas,
    petunjukTugas,
    linkTugas,
    tugasStart,
    tugasEnd
  } = req.body;

  const {status, status_code, message, data} = await TugasService.create({
    mentor_id,
    judulTugas,
    petunjukTugas,
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

// const updateTugas = async (req, res) => {
//   try {
//     await User.update(req.body, {
//       where: { id: req.params.id },
//     });
//     res.status(200).send({
//       status: true,
//       message: 'Updated Succes',
//       data: {
//         user: user
//       }
//     })
//   } catch (err) {
//     console.log(err.message)
//   }
// };

module.exports = { getAllTugas, deleteByID, getTugasById, createTugas };
