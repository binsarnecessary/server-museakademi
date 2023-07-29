const sertifikatRepository = require("../repositories/sertifikatRepository");

class SertifikatService {
  static async getAllSertifiakt({}) {
    try {
      const getAllSertifikat = await sertifikatRepository.getAllSertifikat({});

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          sertifikat: getAllSertifikat,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          sertifikat: null,
        },
      };
    }
  }

  static async getSertifikatByUserId({ user_id }) {
    try {
      const getSertifikatByUserId =
        await sertifikatRepository.getSertifikatByIdUser({ user_id });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          sertifikat: getSertifikatByUserId,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          sertifikat: null,
        },
      };
    }
  }

  static async getSertifikatByCourseId({ course_id }) {
    try {
      const getSertifikatByCourseId =
        await sertifikatRepository.getAllSertifikatByCourseId({
          course_id,
        });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          sertifikat: getSertifikatByCourseId,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          sertifikat: null,
        },
      };
    }
  }

  static async getSertifikatById({ id }) {
    try {
      const getSertifikatById = await sertifikatRepository.getSertifikatById({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          sertifikat: getSertifikatById,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          sertifikat: null,
        },
      };
    }
  }

  static async create({
    user_id,
    nameParticipant,
    course_id,
    nameCourse,
    linkSertifikat,
  }) {
    try {
      if (!linkSertifikat) {
        return {
          status: false,
          status_code: 400,
          message: "Link Sertifikat wajib diisi",
          data: {
            Sertifikat: null,
          },
        };
      }
      const createdSertfikat = await sertifikatRepository.createSertifikat({
        user_id,
        nameParticipant,
        course_id,
        nameCourse,
        linkSertifikat,
      });

      return {
        status: true,
        status_code: 201,
        message: "Sertifikat created successfully",
        data: {
          created_sertifikat: createdSertfikat,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          created_sertifikat: null,
        },
      };
    }
  }

  static async deleteSertifkat({id}) {
    try {
      const getSertifiat = await sertifikatRepository.getSertifikatById({id})

      if(!getSertifiat)
      return {
        status: false,
        status_code: 404,
        message: 'Session not found',
        data: {
          deleted_sertifikat: null
        }
      };

      const deletedSertifikat = await sertifikatRepository.deletedSertifikat({id})
      return {
        status: true,
        status_code: 200,
        message: 'Success',
        data: {
          deleted_sertifikat: deletedSertifikat,
        }
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          deleted_sertifikat: null,
        }
      };
    }
  }
}

module.exports = SertifikatService;
