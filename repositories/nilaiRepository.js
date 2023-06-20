const { Nilai } = require("../models");

class NilaiRepository {

  static async getAllNilai({}) {
    const getAllNilai = await Nilai.findAll({});

    return getAllNilai;
  }

  static async create({
    tugas_id,
    user_id,
    skorNilai
  }) {
    const createdNilai = Nilai.create({
      tugas_id,
      user_id,
      skorNilai
    });

    return createdNilai;
  }

  static async deleteByID({ id }) {
    const deletedNilai = await Nilai.destroy({ where: { id } });

    return deletedNilai;
  }
  
}

module.exports = NilaiRepository;
