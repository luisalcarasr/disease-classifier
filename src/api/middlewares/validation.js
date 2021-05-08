import { validationResult } from "express-validator";

const validationMiddleware = (req, res, next) => {
  const results = validationResult(req);
  if (results.isEmpty()) {
    next()
  } else {
    const errors = results.errors.reduce((reducedErrors, error, key) => {
      (reducedErrors[error.param] || (reducedErrors[error.param] = [])).push(error.msg);
      return reducedErrors;
    }, {})
    res.status(400).json(errors);
  }
}

export default validationMiddleware;