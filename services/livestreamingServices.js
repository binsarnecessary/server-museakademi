const livestreamingRepository = require("../repositories/livestreamingRepository");
const Cloudinary = require("../utils/cloudinary");

class livestreamingsService {
  static async getLiveByID({ id }) {
    try {
      const getLive = await livestreamingRepository.getLiveByID({ id });

      return {
        status: true,
        status_code: 200,
        message: "Succes",
        data: {
          live: getLive,
        },
      };
    } catch (error) {
      return {
        status: false,
        status_code: 500,
        message: error.message,
        data: {
          live: null,
        },
      };
    }
  }

  static async getAllLive({}) {
    try {
      const getAll = await livestreamingRepository.getAllLive();

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          live: getAll,
        },
      };
    } catch (error) {
      return {
        status: false,
        status_code: 500,
        message: error.message,
        data: {
          live: null,
        },
      };
    }
  }

  static async createLive({
    titleLivestreaming,
    namaChanel,
    thumbnailLivestreaming: thumbnailLive,
    liveStart,
    liveEnd,
    deskripsiLive,
    youtubeUrl,
  }) {
    try {
      if (!titleLivestreaming) {
        return {
          status: false,
          status_code: 400,
          message: "Judul Wajib diisi",
          data: {
            live: null,
          },
        };
      }
      const { url } = await Cloudinary.upload(thumbnailLive);
      const createdLive = await livestreamingRepository.createLive({
        titleLivestreaming,
        namaChanel,
        thumbnailLivestreaming: url,
        liveStart,
        liveEnd,
        deskripsiLive,
        youtubeUrl,
      });

      return {
        status: true,
        status_code: 201,
        message: "Livestreaning Created Successfully",
        data: {
          live: createdLive,
        },
      };
    } catch (error) {
      return {
        status: false,
        status_code: 500,
        message: error.message,
        data: {
          live: null,
        },
      };
    }
  }

  static async deleteLive({ id }) {
    try {
      const getLive = await livestreamingRepository.getLiveByID({ id });

      if (!getLive)
        return {
          status: false,
          status_code: 404,
          message: "Live Tidak ada",
          data: {
            deleted_live: null,
          },
        };

      const deletedLive = await livestreamingRepository.deleteLive({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success Delete Data",
        data: {
          deleted_live: deletedLive,
        },
      };
    } catch (error) {
      return {
        status: false,
        status_code: 500,
        message: error.message,
        data: {
            deleted_live: null,
        }
      };
    }
  }
}

module.exports = livestreamingsService;
