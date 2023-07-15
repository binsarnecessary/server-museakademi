const { Mitra } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class MitraRepository {
  static async getAllMitra() {
    const getAllMitra = await Mitra.findAll({});

    return getAllMitra;
  }

  static async getMitraById({id}) {
    const getMitraById = await Mitra.findOne({where: {id}})

    return getMitraById;
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
    courseTitle,
    logoMitra,
    slug,
    headTagline,
    paragraphText,
  }) {
    const createMitra = Mitra.create({
      emailMitra,
      nameMitra,
      instagramMitra,
      facebookMitra,
      waMitra,
      alamatMitra,
      courseTitle,
      logoMitra,
      slug,
      headTagline,
      paragraphText,
    });

    return createMitra;
  }

  static async deleteMitraById({ id }) {
    const deletedMitra = await Mitra.destroy({ where: { id } });

    return deletedMitra;
  }
}

module.exports = MitraRepository;
