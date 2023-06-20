const { Tugas } = require("../models");

class TugasRepository {
  static async getByID({ id }) {
    const getTugasById = await Tugas.findOne({ where: { id } });

    return getTugasById;
  }

  static async getAllTugas({}) {
    const getAllTugas = await Tugas.findAll({});

    return getAllTugas;
  }

  static async create({
    mentor_id,
    judulTugas,
    petunjukTugas,
    linkTugas,
    tugasStart,
    tugasEnd,
  }) {
    const createdTugas = Tugas.create({
    mentor_id,
    judulTugas,
    petunjukTugas,
    linkTugas,
    tugasStart,
    tugasEnd
    });

    return createdTugas;
  }

  static async deleteByID({ id }) {
    const deletedTugas = await Tugas.destroy({ where: { id } });

    return deletedTugas;
  }
  
}

module.exports = TugasRepository;
