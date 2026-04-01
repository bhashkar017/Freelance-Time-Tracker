const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const clientSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    address: Joi.string().allow('').optional(),
    defaultRate: Joi.number().min(0).optional()
});

const projectSchema = Joi.object({
    name: Joi.string().required(),
    client: Joi.string().required(), // ObjectId as string
    hourlyRate: Joi.number().min(0).required(),
    currency: Joi.string().default('USD'),
    status: Joi.string().valid('Active', 'Completed', 'On Hold').default('Active')
});

const timeEntrySchema = Joi.object({
    project: Joi.string().required(),
    description: Joi.string().required(),
    startTime: Joi.date().required(),
    endTime: Joi.date().optional(),
    duration: Joi.number().optional(),
    date: Joi.date().optional()
});

module.exports = {
    userSchema,
    loginSchema,
    clientSchema,
    projectSchema,
    timeEntrySchema
};
