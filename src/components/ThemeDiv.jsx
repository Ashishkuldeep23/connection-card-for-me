import React from 'react'

const ThemeDiv = ({ notificationFuction }) => {



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



    // // // Favirote color cahnge handler fn ------>

    function favColorChangeHandler(e) {

        // console.log(e.target.value)

        let colorCode = e.target.value

        // // // By below way i'can change css var n react.
        document.documentElement.style.setProperty("--theme", colorCode);

        // // // Store color code in localStorage
        localStorage.setItem("theme_of_card", JSON.stringify(colorCode));

    }






    return (
        <>

            <div id="theme_div">
                <span>Themes :- </span>
                <button
                    className="im_theme"
                    onClick={() => { themeChangeHandler("#70f8ba"); notificationFuction(true, "New Theme set"); }}
                    style={{ backgroundColor: "#70f8ba" }}
                >

                    <i className="ri-palette-line"></i>
                </button>
                <button
                    className="im_theme"
                    onClick={() => { themeChangeHandler("#ee85b5"); notificationFuction(true, "New Theme set"); }}
                    style={{ backgroundColor: "#ee85b5" }}
                >
                    <i className="ri-palette-line"></i>
                </button>
                <button
                    className="im_theme"
                    onClick={() => {
                        themeChangeHandler("#69ddff");
                        notificationFuction(true, "New Theme set");
                    }}
                    style={{ backgroundColor: "#69ddff" }}
                >
                    <i className="ri-palette-line"></i>
                </button>
                <button
                    className="im_theme"
                    onClick={() => {
                        themeChangeHandler("#D4C1EC");
                        notificationFuction(true, "New Theme set");
                    }}
                    style={{ backgroundColor: "#D4C1EC" }}
                >
                    <i className="ri-palette-line"></i>
                </button>
                <button
                    className="im_theme"
                    onClick={() => {
                        themeChangeHandler("#ffd000");
                        notificationFuction(true, "New Theme set");
                    }}
                    style={{ backgroundColor: "#ffd000" }}
                >
                    D
                </button>

                <input className="im_theme input_color" onChange={(e) => { favColorChangeHandler(e); notificationFuction(true, "New Theme set"); }} type="color" />

            </div>



        </>
    )
}

export default ThemeDiv