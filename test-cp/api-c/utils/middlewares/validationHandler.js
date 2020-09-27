const validationHandler = (schema, check = 'body') => {
  return function (req, res, next) {
    const { error } = schema.validate(req[check]);
    if (error) {
      next(error);
    }
    next();
  };
};

module.exports = {
  validationHandler,
};
