import joi from "joi";

// Validation schema for user data
const userSchema = joi.object({
    name: joi.string().min(3).max(255).required(),
    email: joi.string().email().required(),
});

// Middleware function to validate user data
export const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};