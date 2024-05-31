// const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    fname: {
      type: String,
      required: true
    },
    lname: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    pass: {
      type: String,
      required: true
    },
    repass: {
      type: String,
      required: true
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  })


// hashing password
userSchema.pre("save", async function () {
  const user = this

  if (!user.isModified) {
    return Next()
  }

  try {
    const saltRound = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(user.pass, saltRound)
    const hashedRepass = await bcrypt.hash(user.repass, saltRound)
    user.pass = hashedPass
    user.repass = hashedRepass
  }
  catch (err) {
    return Next(err)
  }
})


// Generate JSON Web Token
userSchema.methods.generateToken = async function () {
  try {
    // let token = jwt.sign({ _id: this._id, email: this.email }, process.env.SECRET_KEY)
    // this.tokens = this.tokens.concat({ token : token })
    // await this.save()
    // return token
    return jwt.sign(
      {
        _id: this._id.toString(),
        email: this.email,
        fname: this.fname
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "30d",
      }
    )
  }
  catch (err) {
    console.error("Token Error : ", err)
  }
}



const User = new mongoose.model('USER', userSchema)

module.exports = User



