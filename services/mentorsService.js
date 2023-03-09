const mentorRepository = require("../repositories/mentorRepository");

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

  static async getAll ({}) {
    try {
      const getAllMentor = await mentorRepository.getAll;

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          posts: getAllMentor,
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
  
  static async create ({mentor_id, name, skill, nomorKTP, scanKTP, fileCV, linkVideo, filePhoto, aboutMe}){
    try {
      
      if (!mentor_id) {
        return {
          status: false,
          status_code: 400,
          message: "mentor_id wajib diisi",
          data: {
            registered_mentor: null,
          },
        };
      }

      if (!name) {
        return {
          status: false,
          status_code: 400,
          message: "Name wajib diisi",
          data: {
            registered_mentor: null,
          },
        };
      }

      if (!skill) {
        return {
          status: false,
          status_code: 400,
          message: "Skill wajib diisi",
          data: {
            registered_mentor: null,
          },
        };
      }

      if (!nomorKTP) {
        return {
          status: false,
          status_code: 400,
          message: "nomorKTP wajib diisi",
          data: {
            registered_mentor: null,
          },
        };
      }

      if (!scanKTP) {
        return {
          status: false,
          status_code: 400,
          message: "scanKTP wajib diisi",
          data: {
            registered_mentor: null,
          },
        };
      }

      if (!fileCV) {
        return {
          status: false,
          status_code: 400,
          message: "fileCV wajib diisi",
          data: {
            registered_mentor: null,
          },
        };
      }

      if (!linkVideo) {
        return {
          status: false,
          status_code: 400,
          message: "linkVideo wajib diisi",
          data: {
            registered_mentor: null,
          },
        };
      }

      if (!filePhoto) {
        return {
          status: false,
          status_code: 400,
          message: "filePhoto wajib diisi",
          data: {
            registered_mentor: null,
          },
        };
      }

      if (!aboutMe) {
        return {
          status: false,
          status_code: 400,
          message: "aboutMe wajib diisi",
          data: {
            registered_mentor: null,
          },
        };
      }

      const createdMentor = await mentorRepository.create({
        mentor_id,
        name,
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
          registered_mentor: null,
        },
      };
    }
  }

  static async updateByID ({id, mentor_id, name, skill, nomorKTP, scanKTP, fileCV, linkVideo, filePhoto, aboutMe}){
    try {

      const getMentor = await mentorRepository.getMentorByID({id});


      if (getMentor.mentor_id == mentor_id){
        const updatedMentor = await mentorRepository.updateByID({
          id,
          name,
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
        return{
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