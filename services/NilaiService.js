const nilaiRepository = require("../repositories/nilaiRepository");

class NilaiService {
  static async getAllNilai({}) {
    try {
      const getAllNilai = await nilaiRepository.getAllNilai({})

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          nilai: getAllNilai
        }
      }
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          nilai: null
        }
      }
    }
  }

  static async getNilaiById({id}) {
    try {
      const getNilaiById = await nilaiRepository.getNilaiById({id})

      return {
        status: true,
        status_code: 200,
        message: 'Success',
        data: {
          nilai: getNilaiById,
        }
      }
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          nilai: null
        }
      }
    }
  }

  static async getNilaiByUserId({user_id}) {
    try {
      const getNilaiByUserId = await nilaiRepository.getAllNilaiByUserId({user_id})

      return {
        status: true,
        status_code: 200,
        message: 'Success',
        data: {
          nilai: getNilaiByUserId,
        }
      }
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          nilai: null
        }
      }
    }
  }

  static async getNilaiByTugasId({tugas_id}) {
    try {
      const getNilaiByTugasId = await nilaiRepository.getAllNilaiByTugasId({tugas_id})

      return {
        status: true,
        status_code: 200,
        message: 'Success',
        data: {
          nilai: getNilaiByTugasId,
        }
      }
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          nilai: null
        }
      }
    }
  }

  static async create({
    tugas_id,
    user_id,
    skorNilai
  }) {
    try {
      const createdNilai = await nilaiRepository.create({
        tugas_id,
        user_id,
        skorNilai
      });

      return {
        status: true,
        status_code: 201,
        message: "Nilai Added successfully",
        data: {
          added_nilai: createdNilai,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          added_nilai: null,
        },
      };
    }
  }

  static async deletedNilaiById({ id }) {
    try {
      const getNilai = await nilaiRepository.getNilaiById({ id });

      if (!getNilai)
        return {
          status: false,
          status_code: 404,
          message: "Tidak Ada nilai yang ditemukan",
          data: {
            deleted_nilai: null,
          },
        };

      const deletedNilai = await nilaiRepository.deleteByID({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          deleted_nilai: deletedNilai,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          deleted_nilai: null,
        },
      };
    }
  }
}

module.exports = NilaiService;
