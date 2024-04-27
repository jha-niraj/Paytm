// backend/zod.js
const zod = require("zod");

const userZodSchemaSignUp = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    username: zod.string().email(),
    password: zod.string()
})
const userZodSchemaSignIn = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

const updateUserBody = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})

module.exports = {
    userZodSchemaSignUp,
    userZodSchemaSignIn,
    updateUserBody
}
