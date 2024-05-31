const express = require('express')
const app = express()
const router = require("./Route/auth")
const connectDB = require("./DB/connect")
const cors = require("cors")
const errorMiddleware = require('./middleware/error-middleware')


connectDB()

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions))
app.use(express.json())
app.use("/api/auth", router)
app.use(errorMiddleware)



app.get("/", (req, res) => {
    res.status(200).send('Home page')
})

app.get("/login", (req, res) => {
    res.status(200).send('Login page')
})

app.get("/sign-up", (req, res) => {
    res.status(200).send('Register page')
})

const PORT = 5175


app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})

 
















// const express = require("express")
// const mongoose = require("mongoose")
// const dotenv = require("dotenv")


// // import express from 'express';
// // import mongoose from 'mongoose';
// // import dotenv from 'dotenv';
// const app = express()

// require("./DB/connect")
// app.use(express.json());
// app.use(require('./Route/auth'))

// const midd = (req, res, next) => {
//     console.log('Middleware is on the way!!')
//     next()
// }

// const User = require('./DB/userSchema')

// dotenv.config({ path:'./.env' })
// const PORT = process.env.PORT

// app.get('/', (req, res) => {
//     res.send("Home Page")
// })

// app.get('/about', midd, (req, res) => {
//     res.send("About Page")
// })

// app.get('/contact', (req, res) => {
//     res.cookie("TestToken", 'shivam')
//     res.send("Contact Page")
// })

// app.get('/sign-up', midd, (req, res) => {
//     // res.json({ message: req.body })
// })

// app.get('/login', midd, (req, res) => {
//     res.send("Login Page")
// })


// app.listen(PORT, () => {
//     console.log(`Server is running on PORT ${PORT}`)
// })