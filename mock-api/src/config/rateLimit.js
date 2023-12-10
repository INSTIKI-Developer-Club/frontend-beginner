const apiRateLimit = require("express-rate-limit");

exports.apiRequestLimit = apiRateLimit({
  windowMs: 7 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    return res.status(429).json({
      code: 429,
      status: "Error",
      message:
        "You sent too many requests. Please wait 7 minutes then try again.",
    });
  },
});
