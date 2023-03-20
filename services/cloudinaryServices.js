const cloudinary = require('cloudinary').v2;
// const cloudinary = require('../config/cloudinary')

cloudinary.config({
    cloud_name: "dt6puem0n",
    api_key: "755916632878847",
    api_secret: "TTinsyIJXuDn1MWotK0KLAMfp3c",
});


class CloudinaryService {
  static async upload(file) {
    try {
        console.log(file)
      const uploadResult = await cloudinary.uploader.upload(file.path);
      return uploadResult.secure_url;
    } catch (error) {
    //   console.log("🚀 ~ file: cloudinaryServices.js:17 ~ CloudinaryService ~ upload ~ error:", error)
      throw new Error('Failed to upload file to Cloudinary');
    }
  }
}

module.exports = CloudinaryService;
