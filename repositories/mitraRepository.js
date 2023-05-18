const { Mitra } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class MitraRepository {
  static async getAllMitra() {
    const getAllMitra = await Mitra.findAll({});

    return getAllMitra;
  }

  static async getMitraBySlug({ slug }) {
    const getSlugMitra = await Mitra.findOne({ where: { slug } });

    return getSlugMitra;
  }

  static async create({
    emailMitra,
    nameMitra,
    instagramMitra,
    facebookMitra,
    waMitra,
    alamatMitra,
    courseMitra,
    logoMitra,
    slug,
  }) {
    const createMitra = Mitra.create({
      emailMitra,
      nameMitra,
      instagramMitra,
      facebookMitra,
      waMitra,
      alamatMitra,
      courseMitra,
      logoMitra,
      slug,
    });

    return createMitra;
  }

  static async deleteMitraById({ id }) {
    const deletedMitra = await Mitra.destroy({ where: { id } });

    return deletedMitra;
  }
}

module.exports = MitraRepository;
