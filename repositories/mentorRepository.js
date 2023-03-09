const { mentor } = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class mentorRepository {
    static async getMentorByID({ id }) {
        const getMentor = await mentor.findOne({ where: { id } });

        return getMentor;
    }

    static async getAll() {
        const getAllMentor = await mentor.findAll({
        });
    
        return getAllMentor;
      }

    static async create({ mentor_id, name, skill, nomorKTP, scanKTP, fileCV, linkVideo, filePhoto, aboutMe }) {
        const createdMentor = mentor.create({
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

        return createdMentor;
    }

    static async updateByID({ id, name, skill, nomorKTP, scanKTP, fileCV, linkVideo, filePhoto, aboutMe }) {
        const updatedMentor = await mentor.update(
            {
                id,
                name,
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
