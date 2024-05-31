import { React, useState } from "react";
import styles from "./Register.module.css"
import { getImageUrl } from "../../utils"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { useAuth } from "../../store/auth";


const URL = "http://localhost:5175/api/auth/sign-up"

const Register = ({ isSun }) => {
  // const navigate = useNavigate()

  const [ user, setUser ] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    pass: "",
    repass: ""
  })

  const {storetokenInLS} = useAuth()

  const handleChange = (e) => {
    console.log(e)
    const name = e.target.name;
    const value = e.target.value;

    setUser({ 
      ...user, 
      [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user)
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
      console.log("Response data : ", response)

      if (response.ok) {
        const responseData = await response.json()
        storetokenInLS(responseData.token)
        alert("Registration Successful")
        setUser({ 
          fname: "",
          lname: "",
          phone: "",
          email: ""
        })
        console.log(responseData)
      } else {
        console.log("Error inside response", "error")
      }
      
    } catch (err) {
      console.error("Error", err)
    }
  }

  


  const ninput_color = isSun ? styles.ninput_isSun : styles.ninput
  const input_color = isSun ? styles.input_isSun : styles.input
    
    return (
        <div className={styles.container}>
          {console.log("Users = ", user)}
            <div className={isSun ? styles.cA_isSun : styles.cA}>
                {/* <img src={getImageUrl("nav/logo.png")} className={styles.logo_icon} alt="" /> */}
                <h3 className={isSun ? styles.login_header_isSun : styles.login_header}>Kindly, register here!</h3>
                <h2 className={isSun ? styles.login_motive_isSun : styles.login_motive}>A registered account can give more benefits</h2>

                <form method="POST" onSubmit={handleSubmit}>
                    <div className={styles.name_section}>
                    <input type="text"
                    placeholder="First Name*"
                    className={ninput_color}
                    name="fname"
                    value={user.fname}
                    autoComplete="off"
                    onChange={ handleChange }
                    required
                    />

                    <input type="text"
                    placeholder="Last Name*"
                    className={ninput_color}
                    name="lname"
                    autoComplete="off"
                    value={user.lname}
                    onChange={ handleChange }
                    required />
                    </div>

                    <input type="text"
                    name="phone"
                    placeholder="Phone Number*"
                    className={input_color}
                    autoComplete="off"
                    value={user.phone}
                    onChange={ handleChange }
                    required />
                    
                    <input type="email" 
                    placeholder="Enter email*" 
                    name="email"
                    className={input_color}
                    autoComplete="off"
                    value={user.email}
                    onChange={ handleChange }
                    required/>

                    <input type="password" 
                    placeholder="Enter password*" 
                    className={input_color}
                    name="pass"
                    value={user.pass}
                    onChange={ handleChange }
                    required/>

                    <input type="password" 
                    placeholder="Renter password*" 
                    className={input_color}
                    name="repass"
                    value={user.repass}
                    onChange={ handleChange }
                    required/>

                    <p className={isSun ? styles.p_isSun : styles.p}><input type="checkbox" name="agreement" className={styles.check} />By clicking this checkbox, you agree with our <a href="#" className={isSun ? styles.terms_isSun : styles.terms}>Terms and Conditions</a></p>

                    <div className={styles.name_section}>
                      {/* <button type="submit" onClick={ register } className={styles.login_btn}>Register</button> */}
                      <button type="submit" className={styles.login_btn}>Submit</button>

                      <Link to="/login" className={styles.login_btn}>Login</Link>
                    </div>
                </form>
                
            </div>
            <div className={styles.cB}>
            </div>
        </div>
    )
}

export default Register