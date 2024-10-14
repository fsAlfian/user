exports.generateID = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

exports.errorHandler = (err, req, res, next) => {
  let name = err.name,
    message,
    code,
    status;

  if (name === "SequelizeUniqueConstraintError") {
    code = 401;
    status = "error";
    if (err.errors[0].path === "email") {
      message = ["Email already registered"];
    } else if (err.errors[0].path === "identity_number") {
      message = ["Identity number already registered"];
    } else {
      message = [err.errors[0].message];
    }
  } else if (name === "created") {
    code = 201;
    status = "success";
    message = [err.message];
  } else if (name === "validator") {
    code = 400;
    status = "error";
    message = err.message;
  } else {
    code = 500;
    status = "error";
    message = ["Something went wrong"];
  }

  return res.status(code).json({
    code,
    status,
    message,
    result: [],
  });
};
