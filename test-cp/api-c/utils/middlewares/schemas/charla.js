const joi = require('@hapi/joi');
const Joi = require('@hapi/joi');

const charlaTitleSchema = joi.string().max(50);
const charlaPonentesSchema = joi.array().items(joi.string().max(50));
const charlaDescriptionSchema = joi.string().max(50);
const charlaDurationSchema = joi.number().min(1).max(600);

const charlaSchema = Joi.object({
  title: charlaTitleSchema.required(),
  speakers: charlaPonentesSchema.required(),
  description: charlaDescriptionSchema.required(),
  duration: charlaDurationSchema.required(),
});

module.exports = {
  charlaSchema,
};
