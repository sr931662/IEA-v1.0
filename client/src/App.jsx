import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import NavBar from "./components/navbar/NavBar";
import { ThemeProvider } from "../public/js/ThemeContext";
import Carousel from "./components/carousel/Carousel";
import { Footer } from "./components/footer/Footer";
import About from './components/about/about'
import Services from './components/about/services/services'
import Work_head from "./components/work/work_head/work_head"
import Work_content from "./components/work/work_content/work_content"
import Showcase from './components/Showcase/ShowCase'
import Residential from './components/work/residential/residential'
import Login from './components/Login/Login'
import { Logout } from './components/Login/Logout'
import Register from './components/Register/Register'


const App = () => {

  const [isSun, setIsSun] = useState(false);
  
  const toggleTheme = () => {
    setIsSun((prevState) => !prevState);
  };
  return (
    <>
    <ThemeProvider>
      <BrowserRouter>
        <NavBar isSun={isSun} toggleTheme={toggleTheme}/>
        <Routes>
          <Route exact path="/" element={<Home isSun={isSun} />}/>
          <Route exact path="/about-us" element={<About_us isSun={isSun} />} />
          <Route exact path="/work" element={<Works isSun={isSun} />}/>
          <Route exact path="/work/residential-houses" element={<Resid isSun={isSun} />} />
          <Route exact path="/login" element={<Login_page isSun={isSun} />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/sign-up" element={<Register_page isSun={isSun} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </>
  )
}

const Home = ({ isSun }) => {
  return (
    <div>
      <Carousel isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

const Works = ({ isSun }) => {
  return (
    <div>
      <Work_head />
      <Work_content isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

const About_us = ({ isSun }) => {
  return (
    <div>
      <About isSun={isSun} />
      <Services />
      <Showcase />
      <Footer />
    </div>
  )
}

const Resid = ({ isSun }) => {
  return (
    <div>
      <Residential isSun={isSun} />
      <Showcase />
      <Footer />
    </div>
  )
}

const Login_page = ({ isSun }) => {
  return (
    <div>
      <Login isSun={isSun} />
    </div>
  )
}
const Register_page = ({ isSun }) => {
  return (
    <div>
      <Register isSun={isSun} />
    </div>
  )
}
export default App