const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: "dt6puem0n",
    api_key: "755916632878847",
    api_secret: "TTinsyIJXuDn1MWotK0KLAMfp3c",
    secure: true,
});

module.exports = cloudinary;