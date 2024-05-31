const express = require("express")
const router = express.Router()
const authController = require("../Controllers/auth_controller")
const signupSchema = require("../middleware/zod-valid")
const authMiddleware = require("../middleware/auth_mid")
const validate = require('../middleware/valid_mid')

router.route("/").get(authController.home)

router.route("/login").post(authController.login)

router.route("/sign-up").post(validate(signupSchema), authController.register)

router.route("/user").get(authMiddleware, authController.userData)

module.exports = router

































// const express = require("express")
// // import express from 'express'
// const router = express.Router();
// const jwt = require("jsonwebtoken")
// const User = require("../DB/userSchema")
// const bcrypt = require("bcryptjs")

// require('../DB/connect')


// router.get('/', (req, res) => {
//     res.send('Hello world from the server router js')
// })



// router.post('/sign-up', (req, res) => {
//     const { fname, lname, phone, email, pass, repass } = req.body;

//     if (!fname || !lname || !phone || !email || !pass || !repass) {
//         return res.status(422).json({error:"Sab bhar bhai mere"})
//     }

//     User.findOne({ email: email })
//     .then((userExist) => {
//         if(userExist) {
//             return res.status(422).json({ error: "User already exists"})
//         } else if (pass !== repass) {
//             return res.status(422).json({ error: "Password confirmation error"})
//         } else {
//             const user = new User({ fname, lname, phone, email, pass, repass})

//             user.save().then(() => {
//                 res.status(201).json({message: "User Registered Successfully"})
//             }).catch((err) => res.status(500).json({ error: err }))
            
//         }
 
//     }).catch(err => {
//         console.log(err)
//     })
// })


// //login page
// router.post("/login", async (req, res) => {
    
//     try {
//         const { email, pass } = req.body

//         if (!email || !pass) {
//             return res.status(400).json({ error: "Invalid details" })
//         }

//         const userLogin = await User.findOne({ email: email })

//         // console.log(userLogin.fname)

//         if (userLogin) {
//             const isMatch = await bcrypt.compare(pass, userLogin.pass)

//             const token = await userLogin.generateAuthToken()
        
//             console.log(token)

//             res.cookie("jwtoken", token, {
//                 expires: new Date(Date.now() + 25892000000),
//                 httpOnly: true
//             })

//             if (!isMatch) {
//                 res.status(400).json({ error: "Invalid Credential" })
//             } else {
//                 res.json({ message: "User Logged in successfully" })
//             }
//         } else {
//             res.status(400).json({ error: "Invalid credentials" })
//         }

//     } catch (err) {
//         console.log(err)
//     }
// })


// module.exports = router