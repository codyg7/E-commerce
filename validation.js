const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  // validating the information parsed to the schema
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    phonenumber: Joi.string(),
    comment: Joi.string(),
  });
  return schema.validate(data, Joi);
};

module.exports.registerValidation = registerValidation;
