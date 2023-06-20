const { User } = require("../models");

class UsersRepository {
  static async getByID({ id }) {
    const getUser = await User.findOne({ where: { id } });

    return getUser;
  }

  static async getByEmail({ email }) {
    const getUser = await User.findOne({ where: { email } });

    return getUser;
  }

  static async create({
    name,
    email,
    password,
    role,
    profile_picture,
    address,
    phone,
  }) {
    const createdUser = User.create({
      name,
      email,
      password,
      role,
      profile_picture,
      address,
      phone,
    });

    return createdUser;
  }

  static async deleteByID({ id }) {
    const deletedUser = await User.destroy({ where: { id } });

    return deletedUser;
  }
  
}

module.exports = UsersRepository;
