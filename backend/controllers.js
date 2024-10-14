const User = require("./model").user;
let Validator = require("validatorjs");
const Helper = require("./helpers");
const moment = require("moment");
exports.create = async (req, res, next) => {
  let rules = {
    name: "required",
    email: "required|email",
    identityNumber: "required|numeric",
    dateOfBirth: "required|date|check_format_date",
  };

  Validator.registerAsync(
    "check_format_date",
    async function (date, attribute, req, passes) {
      if (moment(date, "YYYY-MM-DD", true).isValid()) {
        passes();
      } else {
        passes(false, "Date of birth is not valid");
      }
    }
  );

  let validation = new Validator(req.body, rules);
  validation.checkAsync(passes, fails);

  function fails() {
    let message = [];
    for (var key in validation.errors.all()) {
      var value = validation.errors.all()[key];
      message.push(value[0]);
    }
    next({
      name: "validator",
      message,
    });
  }

  async function passes(params) {
    try {
      let { name, identityNumber, email, dateOfBirth } = req.body;
      let id = await Helper.generateID();
      await User.create({ id, name, identityNumber, email, dateOfBirth });
      next({
        name: "created",
        message: "User created successfully",
      });
    } catch (err) {
      next(err);
    }
  }
};
