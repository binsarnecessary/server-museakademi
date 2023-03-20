const mentorsService = require("../services/mentorsService");

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

const updateByID = async (req, res, next) => {
    const { id } = req.params;
  
    const { mentor_id, name, skill, nomorKTP, scanKTP, fileCV, linkVideo, filePhoto, aboutMe } = req.body;

    const { status, status_code, message, data } = await mentorsService.updateByID({
        id,
        mentor_id,
        name,
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

  const create = async (req, res, next) => {
    const { mentor_id, name, skill, nomorKTP, linkVideo,  aboutMe } = req.body;
  
    const { status, status_code, message, data } = await mentorsService.create({
        mentor_id,
        name,
        skill,
        nomorKTP,
        scanKTP: req.file,
        fileCV: req.file,
        linkVideo,
        filePhoto: req.file,
        aboutMe,
    });
  
    res.status(status_code).send({
      status: status,
      message: message,
      data: data,
    });
  };


module.exports = { create, getMentorByID, updateByID, getAll };
