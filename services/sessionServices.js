const sessionRepository = require("../repositories/sessionRepository");

class sessionService {

  static async createSession({
    course_id,
    nameSession,
    linkvideo,
    linkzoom,
    linkpdf,
    linkppt,
    link
  }) {
    try {
      if (!course_id) {
        return {
          status: false,
          status_code: 400,
          message: "Title wajib diisi",
          data: {
            course: null,
          },
        };
      }
      const createdSession = await sessionRepository.createSession({
        course_id,
        nameSession,
        linkvideo,
        linkzoom,
        linkpdf,
        linkppt,
        link
      });

      return {
        status: true,
        status_code: 201,
        message: "Session created successfully",
        data: {
          created_session: createdSession,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          created_course: null,
        },
      };
    }
  }

  static async getAllSession({}) {
    try {
      const getAllSession = await sessionRepository.getAllSession();

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          session: getAllSession,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          session: null,
        }
      };
    }
  }

  static async getAllSessionByCourseId({course_id}) {
    try {
      const getAllSessionByCourseId = await sessionRepository.getAllSessionByCourse({course_id})

      return {
        status: true,
        status_code: 200,
        message:  'Success',
        data: {
          session: getAllSessionByCourseId,
        }
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          session: null,
        }
      };
    }
  }

  static async getSessionById({id}) {
    try {
      const getSessionById = await sessionRepository.getSessionById({id})

      return{
        status: true,
        status_code: 200,
        message: 'Success',
        data: {
          session: getSessionById,
        }
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          session: null,
        }
      };
    }
  }

  static async deleteSessionById({id}) {
    try {
      const getSession = await sessionRepository.getSessionById({id})

      if(!getSession)
      return {
        status: false,
        status_code: 404,
        message: 'Session not found',
        data: {
          deleted_session: null
        }
      };

      const deletedSession = await sessionRepository.deleteSessionById({id})
      return {
        status: true,
        status_code: 200,
        message: 'Success',
        data: {
          deleted_session: deletedSession,
        }
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          deleted_session: null,
        }
      };
    }
  }
}

module.exports = sessionService;
