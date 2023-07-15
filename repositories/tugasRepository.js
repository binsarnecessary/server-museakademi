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

  static async getAllTugasByCourse({course_id}) {
    const getAllTugasByCourse = await Tugas.findAll({where: {course_id}})

    return getAllTugasByCourse;
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
    const createdTugas = Tugas.create({
    user_id,
    course_id,
    judulTugas,
    petunjukPengerjaan,
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
