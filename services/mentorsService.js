const mentorRepository = require("../repositories/mentorRepository");
const Cloudinary = require("../utils/cloudinary");

class MentorServices {
  static async getMentorByID({ id }) {
    try {
      const getMentor = await mentorRepository.getMentorByID({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          posts: getMentor,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          registered_user: null,
        },
      };
    }
  }

  static async getAll({}) {
    try {
      const getAllMentor = await mentorRepository.getAll();

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          mentor: getAllMentor,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          registered_user: null,
        },
      };
    }
  }

  static async create({
    user_id,
    skill,
    nomorKTP,
    scanKTP,
    fileCV ,
    linkVideo,
    filePhoto,
    aboutMe,
  }) {
    try {
      const createdMentor = await mentorRepository.create({
        user_id,
        skill,
        nomorKTP,
        scanKTP,
        fileCV,
        linkVideo,
        filePhoto,
        aboutMe,
      });

      return {
        status: true,
        status_code: 201,
        message: "Mentor created successfully",
        data: {
          created_mentor: createdMentor,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          created_mentor: null,
        },
      };
    }
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
    try {
      const getMentor = await mentorRepository.getMentorByID({ id });

      if (getMentor.mentor_id == mentor_id) {
        const updatedMentor = await mentorRepository.updateByID({
          id,
          user_id,
          skill,
          nomorKTP,
          scanKTP,
          fileCV,
          linkVideo,
          filePhoto,
          aboutMe,
        });

        return {
          status: true,
          status_code: 200,
          message: "Mentor updated successfully",
          data: {
            updated_mentor: updatedMentor,
          },
        };
      } else {
        return {
          status: true,
          status_code: 401,
          message: "Update Mentor Unauthorized",
          data: {
            updated_mentor: null,
          },
        };
      }
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          registered_mentor: null,
        },
      };
    }
  }
}

module.exports = MentorServices;
