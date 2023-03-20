const livestreamingsService = require("../services/livestreamingServices");

const getLiveByID = async (req, res) => {
  const { id } = req.params;

  const { status, status_code, message, data } =
    await livestreamingsService.getLiveByID({ id });

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const getAllLive = async (req, res) => {
  const { status, status_code, message, data } =
    await livestreamingsService.getAllLive({});

  res.status(status_code).send({
    status: status,
    message: message,
    data: data,
  });
};

const createLive = async (req, res) => {
  const {
    titleLivestreaming,
    namaChanel,
    thumbnailLivestreaming,
    liveStart,
    liveEnd,
    deskripsiLive,
    youtubeUrl,
  } = req.body;

  const { status, status_code, message, data } =
    await livestreamingsService.createLive({
      titleLivestreaming,
      namaChanel,
      thumbnailLivestreaming: req.file,
      liveStart,
      liveEnd,
      deskripsiLive,
      youtubeUrl,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    })
};

const deleteLive = async (req, res) => {
    const {id} = req.params;

    const {status, status_code, message, data} = await livestreamingsService.deleteLive({
        id
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    })
}

module.exports = { getLiveByID, getAllLive, createLive, deleteLive };
