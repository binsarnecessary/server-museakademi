const { session } = require("../models");

class sessionRepository {
  static async createSession({
    course_id,
    nameSession,
    linkvideo,
    linkzoom,
    linkpdf,
    linkppt,
    link,
  }) {
    const createdSession = session.create({
      course_id,
      nameSession,
      linkvideo,
      linkzoom,
      linkpdf,
      linkppt,
      link,
    });

    return createdSession;
  }

  static async getAllSession() {
    const getAllSession = await session.findAll({});

    return getAllSession;
  }

  static async getAllSessionByCourse({course_id}) {
    const getAllSessionByCourse = await session.findAll({
        where: {course_id}
    })

    return getAllSessionByCourse;
  }

  static async getSessionById({id}) {
    const getSessionById = await session.findOne({where : {id}});

    return getSessionById;
  }

  static async deleteSessionById({id}) {
    const deletedSession = await session.destroy({where: {id}});

    return deletedSession;
  }
}

module.exports = sessionRepository;
7