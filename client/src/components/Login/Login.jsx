import React, { useState } from "react"
import styles from './Login.module.css'
import { getImageUrl } from "../../utils"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../store/auth'

const URL = "http://localhost:5175/api/auth/login"
const defaultUserData = {
    fname: "",
    lname: "",
    email: ""
}

const Login = ({ isSun }) => {
    const [ user, setUser ] = useState({
        email: "",
        pass: ""
    }) 
    const [data, setData] = useState(defaultUserData)

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth()
    
    const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value})
    }

    const { User } = useAuth()
    const [userData, setUserData] = useState(true)

    if (userData && User) {
        setData({
            fname: User.fname,
            lname: User.lname,
            email: User.email
        })
        setUserData(false)
    }

    const handleSubmit = async (e, res, req) => {
        e.preventDefault()

        try { 
            const response = await fetch( URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
            })
            
            if (response.ok) {
                const responseData = await response.json()
                console.log("after Login : ", responseData)
                storeTokenInLS(responseData.token)
                alert("Welcome back, " + data.lname)
                // localStorage.setItem("token", responseData.token)
                navigate("/")
            }
        } catch (error) {
            console.error("Error", error)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.cA}>
                {/* <img src={getImageUrl('login-image.png')} className={styles.login_image} alt="" /> */}
            </div>


            <div className={isSun ? styles.cB_isSun : styles.cB}>
                <div className={isSun ? styles.login_main_isSun : styles.login_main}>
                    <img src={getImageUrl("nav/logo.png")} className={styles.logo_icon} alt="" />
                    <h3 className={styles.login_header}>Welcome to IEA!</h3>
                    <h2 className={styles.login_motive}>Please sign-in to your account and start the adventure</h2>

                    <form onSubmit={handleSubmit}>
                        <input type="email" 
                        placeholder="Enter email" 
                        name="email"
                        className={styles.input}
                        value={user.email}
                        autoComplete="off"
                        onChange={handleChange}
                        required
                        />

                        <input type="password" 
                        placeholder="Enter password" 
                        className={styles.input}
                        name="pass"
                        value={user.pass}
                        autoComplete="off"
                        onChange={handleChange}
                        required/>

                        <div className={styles.buttons}>
                        <button type="submit" className={styles.login_btn}>SUBMIT</button>

                        <Link to="/sign-up" className={styles.login_btn}>Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login