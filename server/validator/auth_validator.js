const { z } = require("zod")


const signupSchema = z.object({
    fname: z
        .string({required_error: "First Name is Required !!"})
        .trim()
        .min(3, {message: "Name must be at least of 3 characters"})
        .max(255, {message: 'Name must not exceed 255 characters'}),
    lname: z
        .string({required_error: "Last Name is Required !!"})
        .trim()
        .min(3, {message: "Name must be at least of 3 characters"})
        .max(255, {message: 'Name must not exceed 255 characters'}),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be at least of 10 characters" })
        .max(20, { message: "Phone must not be more than 20 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    pass: z
        .string({ required_error: "Password is a must !!"})
        .min(8, {message : "Password must be at least of 8 characters"})
        .max(1024, "Password can't be greater than 1024 characters")
})

module.exports = signupSchema