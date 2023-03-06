exports.JWT = {
    SECRET: process.env.JWT_SECRET,
    EXPIRED: process.env.JWT_EXPIRED,
  };
  
  exports.ROLES = {
    MENTOR: "mentor",
    USER: "user",
    ADMIN: "admin",
    SUPERADMIN: "superadmin",
  };
  