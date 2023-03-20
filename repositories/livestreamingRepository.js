const { Livestreaming } = require("../models");

class livestreamingRepository {
  static async getLiveByID({ id }) {
    const getLive = await Livestreaming.findOne({ where: { id } });

    return getLive;
  };

  static async getAllLive() {
    const getAllLive = await Livestreaming.findAll({});

    return getAllLive;
  };

  static async createLive({
    titleLivestreaming,
    namaChanel,
    thumbnailLivestreaming,
    liveStart,
    liveEnd,
    deskripsiLive,
    youtubeUrl,
  }) {
    const createLivestream = Livestreaming.create({
      titleLivestreaming,
      namaChanel,
      thumbnailLivestreaming,
      liveStart,
      liveEnd,
      deskripsiLive,
      youtubeUrl,
    });

    return createLivestream;
  };

  static async deleteLive({ id }) {
    const deletedLive = await Livestreaming.destroy({ where: { id } });

    return deletedLive;
  };

}

module.exports = livestreamingRepository;
