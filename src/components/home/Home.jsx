import Img from "./logo.jpg";
import "./home.css";
import "../../App.css";
import { useState, useEffect } from "react";

function Home() {
  // Retrieve theme from localStorage or set default to "light"
  const storedTheme = localStorage.getItem("light") || "light";
  const [theme, setTheme] = useState(storedTheme);
  const [isDark, setIsDark] = useState(storedTheme === "dark");

  // ============ for opening menu or not =================
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ========================== for handling menu ============================
  const HandleShowMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  // ====================== for handling theme ==============================
  const handleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setIsDark(newTheme === "dark");

    // Save the new theme in localStorage
    localStorage.setItem("light", newTheme);
  };

  // ================== logic for showing light and dark theme =================================
  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#EFF0F4"; // Light Theme
      document.body.style.color = "#000"; // Black text
    } else {
      document.body.style.backgroundColor = "#2D2D2D"; // Dark Theme
      document.body.style.color = "#F8FAFC"; // White text;
    }
  }, [theme]); // Run effect whenever theme changes
    console.log(isDark)
  return (
    <div className="main-home" id="home">
      {/*================== Home page Navbar ========================== */}
    
     <nav className={`home-nav ${isDark?"bg-[#2D2D2D]":"bg-[#f1f1f1]"} `}>
        <div className="logo-img">
          <img src={Img} />
        </div>
        <div className="home-menu">
          <ul>
            <a href="#home"> <li>Home</li></a>
            <a href="#about"> <li>About</li></a>
            <a href="#skill"> <li>Services</li></a>
            <a href="#project"> <li>Project</li></a>
            <a href="#contact"> <li>Contact</li></a>
          </ul>
          <p className="nav-icon" onClick={HandleShowMenu}>
            {isMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </p>
        </div>
        {/* =============== Dark Light Theme Toggle ============================== */}
        <div className="theme" onClick={handleTheme}>
          <p className={`transition-transform duration-700 ${isDark ? "translate-x-0" : "translate-x-12 light"}`}>
            {isDark ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
          </p>
        </div>
        {/* =============== Hidden Menu for Mobile and Medium Devices ========================= */}
        <div className={`hidden-menu absolute right-0 top-20 w-full h-96 text-black p-4 transition-transform duration-700 
          ${isMenuOpen ? "translate-y-0" : "translate-x-full"}`} >
          <ul>
            <a onClick={handleCloseMenu} href="#home"> <li>Home</li></a>
            <a onClick={handleCloseMenu} href="#about"> <li>About</li></a>
            <a onClick={handleCloseMenu} href="#skill"> <li>Services</li></a>
            <a onClick={handleCloseMenu} href="#project"> <li>Project</li></a>
            <a onClick={handleCloseMenu} href="#contact"> <li>Contact</li></a>
          </ul>
        </div>
      </nav>
    
      {/*==================== Home Page Text and Hero Image ======================*/}
      <section className="hero flex items-center justify-center">
        {/*===================== Text Section ===========================*/}
        <section className="home-text">
          <p>Hello</p>
          <h1>
            I am <span className={`${isDark ?  "after:bg-[#2D2D2D]" :  "after:bg-[#EFF0F4]"}`}></span>
          </h1>
          <p>Let&apos;s Explore My Journey</p>
          <button>More About Me</button>
        </section>
        {/* =========================== Image Section =============================*/}
        <section className="home-image flex items-center justify-center">
          <img src="/hero.jpg" className="hero-img"></img>
        </section>
      </section>
    </div>
  );
}

export default Home;
