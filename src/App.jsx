import { useEffect, useState } from "react";
import "./App.css";

import arrOfLink from "./linksDataArr.js"
import Links from "./components/Links";


function App() {
  const [isMobile, setIsMobile] = useState(false);   // // Seen in mobile or not.

  const [userData, setUserData] = useState(arrOfLink);    // // // User Personal data.

  const [isdarkMode , setIsDarkMode] = useState(false);  // // // Dark mode enabled or not.

  const [userName , setUserName]  = useState("Ashish Kuldeep")



  function btnHandlerMakeDark(){


    if(!isdarkMode){
      document.getElementById("root").style.backgroundColor = "#212529"
      document.documentElement.style.setProperty("--dark", "#212529");
      document.documentElement.style.setProperty("--text", "white");

      localStorage.setItem("darkMode" , JSON.stringify(true))
    }else{
      document.getElementById("root").style.backgroundColor = "#fff"
      document.documentElement.style.setProperty("--dark", "#fff");
      document.documentElement.style.setProperty("--text", "black");

      localStorage.setItem("darkMode" , JSON.stringify(false))
    }

        
    setIsDarkMode(!isdarkMode);
  }



  function themeChangeHandler(colorCode) {
    // alert(colorCode);

    // // // By below way i can get the value of :root var of css
    // const color = getComputedStyle(document.documentElement).getPropertyValue(
    //   "--theme"
    // );
    // console.log(color);

    // // // By below way i'can change css var n react.
    document.documentElement.style.setProperty("--theme", colorCode);

    // // // Store color code in localStorage
    localStorage.setItem("theme_of_card", JSON.stringify(colorCode));
  }


  // // // Not using in personal card now
  function nameChangeHandler(){
    let takeNamePlz = prompt("Give your name here :- ")

    console.log(takeNamePlz)

    // // // Validation Here

    setUserName(takeNamePlz)
    localStorage.setItem("userName" , JSON.stringify((takeNamePlz)))


  }





  // // // useEffect here ---------->
  useEffect(() => {
    // // // For mobile viwer
    const innerWidth = window.innerWidth;
    // console.log(innerWidth);
    if (innerWidth <= 670) {
      // console.log("Called");
      setIsMobile(true);
    }

    // // // For theme color
    let themeColor = localStorage.getItem("theme_of_card");

    if (themeColor) {
      themeColor = JSON.parse(themeColor);
      document.documentElement.style.setProperty("--theme", themeColor);
    }


    // // // darkMode code ----->

    let makeDark = localStorage.getItem("darkMode")

    if(makeDark){

      makeDark = JSON.parse(makeDark)

      if(makeDark){
        // // // If value is true in localStorage the only do certain thing otherwise , do nothing.
        setIsDarkMode(true)
        document.getElementById("root").style.backgroundColor = "#212529"
        document.documentElement.style.setProperty("--dark", "#212529");
        document.documentElement.style.setProperty("--text", "white");
      }

    }



    // // // Get name of user   ( // // // Not using in personal card now)

    // let userName = localStorage.getItem("userName")
    // if(userName){
    //   userName = JSON.parse(userName)
    //   setUserName(userName)
    // }


  }, []);

  return (
    <>

      <header id="header">
        <div id="header_left"><button onClick={()=>{alert("Currently Working , if you want a webapp where user can create own card , then write in comment box plz.")}}><i className="ri-align-justify"></i></button></div>
        <div id="header_right">
          <button onClick={btnHandlerMakeDark}>{isdarkMode ? <i className="ri-sun-line"></i> : <i className="ri-contrast-2-line"></i>}</button>
        </div>

      </header>

      <main>
        <div id="heading_div">
          <h2>{"Let's Connect personaly"}</h2>

          <div id="theme_div">
            <span>Themes :- </span>
            <button
              className="im_theme"
              onClick={() => themeChangeHandler("#70f8ba")}
              style={{ backgroundColor: "#70f8ba" }}
            >
              
              <i className="ri-palette-line"></i>
            </button>
            <button
              className="im_theme"
              onClick={() => themeChangeHandler("#ee85b5")}
              style={{ backgroundColor: "#ee85b5" }}
            >
              <i className="ri-palette-line"></i>
            </button>
            <button
              className="im_theme"
              onClick={() => themeChangeHandler("#69ddff")}
              style={{ backgroundColor: "#69ddff" }}
            >
              <i className="ri-palette-line"></i>
            </button>
            <button
              className="im_theme"
              onClick={() => themeChangeHandler("#D4C1EC")}
              style={{ backgroundColor: "#D4C1EC" }}
            >
              <i className="ri-palette-line"></i>
            </button>
            <button
              className="im_theme"
              onClick={() => themeChangeHandler("#ffd000")}
              style={{ backgroundColor: "#ffd000" }}
            >
              D
            </button>
          </div>
        </div>
        <div id="both_holder">
          <div id="inner_left">
            <div>
              <img
                src="http://res.cloudinary.com/dlvq8n2ca/image/upload/v1692032164/utemmzfh8jy0w4bufdp4.png"
                alt="Ashish"
              />
            </div>
            <h1>
              {userName} 
              {/* Currently not using this because this is my own card */}
              {/* <i id="edit_name" onClick={nameChangeHandler} className="ri-edit-line"></i> */}
            </h1>
            <p>
              Connect with me {":)"}{" "}
              {isMobile ? (
                <i id="arrow" className="ri-arrow-down-double-line"></i>
              ) : (
                <i id="arrow" className="ri-arrow-right-double-line"></i>
              )}
            </p>

            <div id="for_style_left"></div>
          </div>

          <div id="inner_right">
            <div id="for_style_right"></div>
            {userData.map((user) => (
              <Links
                key={user.id}
                user={user}
              // clickAble={user.clickAble}
              // siteName={user.siteName}
              // logo={user.logo}
              />
            ))}


          </div>


        </div>

            {/* Not Now  */}
        {/* <button>Create your own Crad</button> */}
        <p id="footer_text">By :- {userName}</p>
      </main>




    </>
  );
}

export default App;
