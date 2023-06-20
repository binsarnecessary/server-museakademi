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
}

module.exports = NilaiService;
