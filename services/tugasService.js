const tugasRepository = require("../repositories/tugasRepository");

class TugasService {
  static async getById({ id }) {
    try {
      const getTugas = await tugasRepository.getByID({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          tugas: getTugas,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          tugas: null,
        },
      };
    }
  }

  static async getAllTugasByCourse({course_id}){
    try {
      const getALLTugasByCourse = await tugasRepository.getAllTugasByCourse({course_id});

      return {
        status: true,
        status_code: 200,
        message: 'Success',
        data: {
          tugas: getALLTugasByCourse
        }
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          tugas: null,
        }
      };
    }
  }

  static async getAllTugas({}) {
    try {
      const getAllTugas = await tugasRepository.getAllTugas({})

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          tugas: getAllTugas
        }
      }
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          tugas: null
        }
      }
    }
  }

  static async deleteByID({ id }) {
    try {
      const getTugas = await tugasRepository.getByID({ id });

      if (!getTugas)
        return {
          status: false,
          status_code: 404,
          message: "Tugas tidak ditemukan",
          data: {
            deleted_tugas: null,
          },
        };

      const deletedTugas = await tugasRepository.deleteByID({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          deleted_tugas: deletedTugas,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          deleted_tugas: null,
        },
      };
    }
  }

  static async create({
    user_id,
    course_id,
    judulTugas,
    petunjukPengerjaan,
    linkTugas,
    tugasStart,
    tugasEnd,
  }) {
    try {
      if (!judulTugas) {
        return {
          status: false,
          status_code: 400,
          message: "Nama Tugas wajib diisi",
          data: {
            Tugas: null,
          },
        };
      }
      const createdTugas = await tugasRepository.create({
        user_id,
        course_id,
        judulTugas,
        petunjukPengerjaan,
        linkTugas,
        tugasStart,
        tugasEnd,
      });

      return {
        status: true,
        status_code: 201,
        message: "Tugas created successfully",
        data: {
          created_tugas: createdTugas,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          created_tugas: null,
        },
      };
    }
  }
}

module.exports = TugasService;
