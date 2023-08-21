import { useEffect, useState } from "react";
import "./App.css";

import arrOfLink from "./linksDataArr.js"
import Links from "./components/Links";


function App() {
  const [isMobile, setIsMobile] = useState(false);

  const [userData, setUserData] = useState(arrOfLink);

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
  }, []);

  return (
    <>
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
              ৹
            </button>
            <button
              className="im_theme"
              onClick={() => themeChangeHandler("#ee85b5")}
              style={{ backgroundColor: "#ee85b5" }}
            >
              ৹
            </button>
            <button
              className="im_theme"
              onClick={() => themeChangeHandler("#69ddff")}
              style={{ backgroundColor: "#69ddff" }}
            >
              ৹
            </button>
            <button
              className="im_theme"
              onClick={() => themeChangeHandler("#D4C1EC")}
              style={{ backgroundColor: "#D4C1EC" }}
            >
              ৹
            </button>
            <button
              className="im_theme"
              onClick={() => themeChangeHandler("#ffd000")}
              style={{ backgroundColor: "#ffd000" }}
            >
              ৹
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
            <h1>Ashish Kuldeep</h1>
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
        <p id="footer">By :- Ashish kuldeep</p>
      </main>
    </>
  );
}

export default App;
