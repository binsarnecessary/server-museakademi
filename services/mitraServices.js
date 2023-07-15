const mitraRepository = require("../repositories/mitraRepository");
const Cloudinary = require("../utils/cloudinary");

class MitraService {
  static async getAllMitra({}) {
    try {
      const getAll = await mitraRepository.getAllMitra(); // invoke the function to fetch the data

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          Mitra: getAll,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          Mitra: null,
        },
      };
    }
  }

  static async getMitraBySlug({ slug }) {
    try {
      const getSlugMitra = await mitraRepository.getMitraBySlug({
        slug,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          Mitra: getSlugMitra,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          Mitra: null,
        },
      };
    }
  }

  static async getMitraById({id}) {
    try {
      const getMitraById = await mitraRepository.getMitraById({id});

      return {
        status: true,
        status_code: 200,
        message: 'Success',
        data: {
          Mitra: getMitraById
        }
      }
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          Mitra: null
        }
      };
    }
  }

  static async create({
    emailMitra,
    nameMitra,
    instagramMitra,
    facebookMitra,
    waMitra,
    alamatMitra,
    courseTitle,
    logoMitra: logo,
    slug,
    headTagline,
    paragraphText,
  }) {
    try {
      if (!nameMitra) {
        return {
          status: false,
          status_code: 400,
          message: "Nama Mitra wajib diisi",
          data: {
            mitra: null,
          },
        };
      }

      if (!courseTitle) {
        return {
          status: false,
          status_code: 400,
          message: "Kursus wajib diisi",
          data: {
            mitra: null,
          },
        };
      }
      const slug_link = nameMitra.replace(/\s+/g, "-").toLowerCase();
      const { url } = await Cloudinary.upload(logo);
      const createdMitra = await mitraRepository.create({
        emailMitra,
        nameMitra,
        instagramMitra,
        facebookMitra,
        waMitra,
        alamatMitra,
        courseTitle,
        logoMitra: url,
        slug: slug_link,
        headTagline,
        paragraphText,
      });

      return {
        status: true,
        status_code: 201,
        message: "Mitra created successfully",
        data: {
          created_mitra: createdMitra,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          created_mitra: null,
        },
      };
    }
  }

  static async deletedMitraById({ id }) {
    try {
      const getMitra = await mitraRepository.getMitraById({ id });

      if (!getMitra)
        return {
          status: false,
          status_code: 404,
          message: "Mitra tidak ditemukan",
          data: {
            deleted_mitra: null,
          },
        };

      const deletedMitra = await mitraRepository.deleteMitraById({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          deleted_mitra: deletedMitra,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          deleted_mitra: null,
        },
      };
    }
  }

}

module.exports = MitraService;
