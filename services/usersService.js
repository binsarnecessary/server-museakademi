const user = require("../models/user");
const usersRepository = require("../repositories/usersRepository");

class UsersService {
  static async getUserById({id}) {
    try {
      const getUserById = await usersRepository.getByID({id});

      return {
        status: true,
        status_code: 200,
        message: 'Success',
        data: {
          user: getUserById,
        }
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          user: null
        }
      };
    }
  }

  static async getAllUserByRole({role}) {
    try {
      const getAllUserByRole = await usersRepository.getAllUserByRole({role})

      return {
        status: true,
        status_code: 200,
        message: 'Success',
        data: {
          user: getAllUserByRole,
        }
      }
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          user: null
        }
      }
    }
  }

  static async deleteByID({ id }) {
    try {
      const getUser = await usersRepository.getByID({ id });

      if (!getUser)
        return {
          status: false,
          status_code: 404,
          message: "User tidak ditemukan",
          data: {
            deleted_user: null,
          },
        };

      const deletedUser = await usersRepository.deleteByID({
        id,
      });

      return {
        status: true,
        status_code: 200,
        message: "Success",
        data: {
          deleted_user: deletedUser,
        },
      };
    } catch (err) {
      return {
        status: false,
        status_code: 500,
        message: err.message,
        data: {
          deleted_user: null,
        },
      };
    }
  }
}

module.exports = UsersService;
