const sessionService = require("../services/sessionServices");
const { session } = require("../models");

const createSessions = async (req, res, next) => {
  const {
    course_id,
    linkvideo,
    linkzoom,
    linkpdf,
    linkppt,
    link
  } = req.body;

  const { status, status_code, message, data } = await sessionService.createSession({
    course_id,
    linkvideo,
    linkzoom,
    linkpdf,
    linkppt,
    link
  });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getAllSession = async(req, res, next) => {
  const { status, status_code, message, data } = await sessionService.getAllSession({});

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getAllSessionByCourseId = async(req, res, next) => {
  const { course_id } = req.params;

  const { status, status_code, message, data } = await sessionService.getAllSessionByCourseId({course_id});

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  })
};

const getSessionById = async(req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } = await sessionService.getSessionById({id});

  res.status(status_code).send({
    status: status,
    message: message,
    data: data
  })
}

const deleteSessionById = async(req, res, next) => {
  const { id } = req.params;

  const { status, status_code, message, data } = await sessionService.deleteSessionById({id});

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  })
};

const updateSession = async(req, res) => {
  try {
    await session.update(req.body, {
      where: {id: req.params.id},
    });
    res.status(200).send({
      status: true,
      message: 'Updated Success',
      data: {
        session: session
      }
    });
  } catch (err) {
    console.log(err);
  }
}



module.exports = {
    createSessions,
    getAllSession,
    getAllSessionByCourseId,
    getSessionById,
    deleteSessionById,
    updateSession,
};
