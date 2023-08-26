import { useEffect, useState } from "react";
import "./App.css";

import arrOfLink from "./linksDataArr.js"
import Links from "./components/Links";


function App() {
  const [isMobile, setIsMobile] = useState(false);   // // Seen in mobile or not.

  const [userData, setUserData] = useState(arrOfLink);    // // // User Personal data.

  const [isdarkMode, setIsDarkMode] = useState(false);  // // // Dark mode enabled or not.

  const [userName, setUserName] = useState("Ashish Kuldeep")



  function btnHandlerMakeDark() {


    if (!isdarkMode) {
      document.getElementById("root").style.backgroundColor = "#212529"
      document.documentElement.style.setProperty("--dark", "#212529");
      document.documentElement.style.setProperty("--text", "white");

      localStorage.setItem("darkMode", JSON.stringify(true))
    } else {
      document.getElementById("root").style.backgroundColor = "#fff"
      document.documentElement.style.setProperty("--dark", "#fff");
      document.documentElement.style.setProperty("--text", "black");

      localStorage.setItem("darkMode", JSON.stringify(false))
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
  function nameChangeHandler() {
    let takeNamePlz = prompt("Give your name here :- ")

    console.log(takeNamePlz)

    // // // Validation Here

    setUserName(takeNamePlz)
    localStorage.setItem("userName", JSON.stringify((takeNamePlz)))
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

    if (makeDark) {

      makeDark = JSON.parse(makeDark)

      if (makeDark) {
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



    // // // Experimet here (Working) ----->
    // // // Let's use gsap in recat code 



    let tl = gsap.timeline()
    // console.log(tl)


    // // // Heading Div ---->

    tl.from("#heading_div", {
      startAt: { x: 0, opacity: 1 },
      x: "0%",
      y: "-40",
      duration: .7,
      ease: Expo.none,



    })




    // // // Move two style balls in div according to view device.

    // // // For Tablet and more
    tl.to("#for_style_left", {
      x: "50%",
      y: "100%",
      duration: .2,
      ease: Expo.none,
    })


    tl.to("#for_style_right", {
      x: "-110%",
      y: "-100%",
      duration: .2,
      ease: Expo.none
    })


    // // // For mobile here ------>

    if (innerWidth <= 670) {

      tl.from("#heading_div", {
        y: "20",
        duration: .1,
        ease: Expo.none,
      })



      tl.to("#for_style_left", {
        x: "-50%",
        y: "140%",
        // y: "0",
        // opacity: 1,
        duration: .2,
        ease: Expo.none,
      })


      tl.to("#for_style_right", {

        x: "50%",
        y: "-50%",
        // y: "0",
        // opacity: 1,
        duration: .2,
        ease: Expo.none
      })

    }




    // // // Experiment here --->

    // // // If mouse come then give property ------>

    document.getElementById("heading_div").addEventListener('mouseover' , ()=>{

      trackerDiv.style.mixBlendMode = "exclusion"


    })

    // // // If mouse leaes then give property ------>

    document.getElementById("heading_div").addEventListener("mouseleave" , ()=>{

      trackerDiv.style.mixBlendMode = "unset"


    })





    // // // Getting div for animation if mouse fallower comes in card div ------->

    var trackerDiv = document.getElementById("i_will_fallow_cursor")


    // // // If mouse come then give property ------>

    document.getElementById("both_holder").addEventListener("mouseover" , (details)=>{
        // console.log("Good to go Cheif")

        trackerDiv.style.height = "20px";
        trackerDiv.style.width = "20px";


        trackerDiv.style.mixBlendMode = "exclusion";
        trackerDiv.style.transform = `translate(100% ,-100%)`


        trackerDiv.style.marginLeft= "50px"
        trackerDiv.style.marginTop= "50px"

      })


          // // // If mouse leave then give property (back to normal everything) ------>
      document.getElementById("both_holder").addEventListener("mouseleave" , ()=>{
        // console.log("Good to go Cheif")    
        trackerDiv.style.height = "100px";
        trackerDiv.style.width = "100px";
        trackerDiv.style.mixBlendMode = "unset";

        trackerDiv.style.marginLeft= "0px"
        trackerDiv.style.marginTop= "0px"
    })



  }, []);





  

  return (
    <>




      <header id="header">
        <div id="header_left"><button onClick={() => { alert("Currently Working , if you want a webapp where user can create own card , then write in comment box plz.") }}><i className="ri-align-justify"></i></button></div>

        <div id="theme_div">
          <span>Themes :- </span>
          <button
            className="im_theme"
            onClick={() => {themeChangeHandler("#70f8ba");}}
            style={{ backgroundColor: "#70f8ba" }}
          >

            <i className="ri-palette-line"></i>
          </button>
          <button
            className="im_theme"
            onClick={() => {themeChangeHandler("#ee85b5"); }}
            style={{ backgroundColor: "#ee85b5" }}
          >
            <i className="ri-palette-line"></i>
          </button>
          <button
            className="im_theme"
            onClick={() => {
              themeChangeHandler("#69ddff"); }}
            style={{ backgroundColor: "#69ddff" }}
          >
            <i className="ri-palette-line"></i>
          </button>
          <button
            className="im_theme"
            onClick={() =>{ 
              themeChangeHandler("#D4C1EC");}}
            style={{ backgroundColor: "#D4C1EC" }}
          >
            <i className="ri-palette-line"></i>
          </button>
          <button
            className="im_theme"
            onClick={() => {
              themeChangeHandler("#ffd000");}}
            style={{ backgroundColor: "#ffd000" }}
          >
            D
          </button>
        </div>


        <div id="header_right">
          <button onClick={btnHandlerMakeDark}>{isdarkMode ? <i className="ri-sun-line"></i> : <i className="ri-contrast-2-line"></i>}</button>
        </div>

      </header>

      <main>
        <div id="heading_div">
          <h2>{"Let's Connect personaly"}</h2>
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
            {(userData) && (userData.length > 0)
              ? userData.map((user) => (
                <Links key={user.id} user={user}
                // clickAble={user.clickAble}
                // siteName={user.siteName}
                // logo={user.logo}
                />
              ))


              : Array.from(Array(7)).map((el, i) => {
                return (

                  ((i + 1) % 7 !== 0) ? <Links key={i} user={{}} /> : null

                )


              })


            }


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
