const { mentor } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class mentorRepository {
  static async getMentorByID({ id }) {
    const getMentor = await mentor.findOne({ where: { id } });

    return getMentor;
  }

  static async getAll() {
    const getAllMentor = await mentor.findAll({});

    return getAllMentor;
  }

  static async create({
    user_id,
    skill,
    nomorKTP,
    scanKTP,
    fileCV,
    linkVideo,
    filePhoto,
    aboutMe,
  }) {
    const createdMentor = mentor.create({
      user_id,
      skill,
      nomorKTP,
      scanKTP,
      fileCV,
      linkVideo,
      filePhoto,
      aboutMe,
    });

    return createdMentor;
  }

  static async deleteByID({ id }) {
    const deletedMentor = await mentor.destroy({ where: { id } });

    return deletedMentor;
  }

  static async updateByID({
    id,
    user_id,
    skill,
    nomorKTP,
    scanKTP,
    fileCV,
    linkVideo,
    filePhoto,
    aboutMe,
  }) {
    const updatedMentor = await mentor.update(
      {
        user_id,
        skill,
        nomorKTP,
        scanKTP,
        fileCV,
        linkVideo,
        filePhoto,
        aboutMe,
      },
      { where: { id } }
    );

    return updatedMentor;
  }
}

module.exports = mentorRepository;
