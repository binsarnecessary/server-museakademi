'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livestreaming extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Livestreaming.init({
    titleLivestreaming: DataTypes.STRING,
    namaChanel: DataTypes.STRING,
    thumbnailLivestreaming: DataTypes.STRING,
    liveStart: DataTypes.DATE,
    liveEnd: DataTypes.DATE,
    deskripsiLive: DataTypes.TEXT,
    youtubeUrl: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Livestreaming',
  });
  return Livestreaming;
};