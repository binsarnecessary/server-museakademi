const mentorsService = require("../services/mentorsService");
const { mentor } = require("../models");
const Mentor = require("../models/mentor");

const getMentorByID = async (req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await mentorsService.getMentorByID({
      id,
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getAll = async (req, res, next) => {

    const { status, status_code, message, data } =
    await mentorsService.getAll({
    });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
}

const updateMentor = async (req, res) => {
  try {
    await mentor.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).send({
      status: true,
      message: 'Updated Mentor Succes',
      data: {
        Mentor: mentor
      }
    })
  } catch (err) {
    console.log(err.message)
  }
};

  const create = async (req, res, next) => {
    const { user_id, skill, nomorKTP, scanKTP, fileCV, linkVideo, filePhoto, aboutMe } = req.body;
  
    const { status, status_code, message, data } = await mentorsService.create({
        user_id,
        skill,
        nomorKTP,
        scanKTP,
        fileCV,
        linkVideo,
        filePhoto,
        aboutMe,
    });
  
    res.status(status_code).send({
      status: status,
      message: message,
      data: data,
    });
  };


module.exports = { create, getMentorByID, updateMentor, getAll };
