const { Sertifikat } = require("../models");

class sertifikatRepository {
  static async getAllSertifikat() {
    const getAllSertifikat = await Sertifikat.findAll({});

    return getAllSertifikat;
  }

  static async getSertifikatByIdUser({ user_id }) {
    const getSertifikatByIdUser = await Sertifikat.findAll({
      where: { user_id },
      include: "user",
    });

    return getSertifikatByIdUser;
  }

  static async getAllSertifikatByCourseId({ course_id }) {
    const getAllSertifikatByCourseId = await Sertifikat.findAll({
      where: { course_id },
      include: "course",
    });

    return getAllSertifikatByCourseId;
  }

  static async getSertifikatById({ id }) {
    const getSertifikatById = await Sertifikat.findOne({ where: { id } });

    return getSertifikatById;
  }

  static async createSertifikat({
    user_id,
    nameParticipant,
    course_id,
    nameCourse,
    linkSertifikat,
  }) {
    const createdSertifikat = Sertifikat.create({
      user_id,
      nameParticipant,
      course_id,
      nameCourse,
      linkSertifikat,
    });

    return createdSertifikat;
  }

  static async deletedSertifikat({id}) {
    const deletedSertifikat = await Sertifikat.destroy({where: {id}});

    return deletedSertifikat;
  }
}

module.exports = sertifikatRepository;
