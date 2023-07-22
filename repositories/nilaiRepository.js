const { Nilai } = require("../models");

class NilaiRepository {
  static async getAllNilai({}) {
    const getAllNilai = await Nilai.findAll({});

    return getAllNilai;
  }

  static async getNilaiById({ id }) {
    const getNilaiById = await Nilai.findOne({ id });

    return getNilaiById;
  }

  static async getAllNilaiByUserId({ user_id }) {
    const getAllNilaiByUserId = await Nilai.findAll({
      where: { user_id },
      include: "tugas",
    });

    return getAllNilaiByUserId;
  }

  static async getAllNilaiByTugasId({ tugas_id }) {
    const getAllNilaiByTugasId = await Nilai.findAll({
      where: { tugas_id },
    });

    return getAllNilaiByTugasId;
  }

  static async create({ tugas_id, user_id, skorNilai }) {
    const createdNilai = Nilai.create({
      tugas_id,
      user_id,
      skorNilai,
    });

    return createdNilai;
  }

  static async deleteByID({ id }) {
    const deletedNilai = await Nilai.destroy({ where: { id } });

    return deletedNilai;
  }
}

module.exports = NilaiRepository;
