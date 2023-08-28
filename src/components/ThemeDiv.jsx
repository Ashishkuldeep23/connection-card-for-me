import React from 'react'



const arrOffAllThemeColor = ["#70f8ba", "#ee85b5", "#69ddff", "#D4C1EC", "#ffd000"]


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
                {
                    // // // All Buttons here by loop ----->
                    arrOffAllThemeColor && arrOffAllThemeColor.map((el, i) => {
                        return (

                            <button
                                key={i}
                                className="im_theme"
                                onClick={() => {
                                    themeChangeHandler(`${el}`);
                                    notificationFuction(true, "New Theme set");
                                }}
                                style={{ backgroundColor: `${el}` }}
                            >
                                {(i === arrOffAllThemeColor.length - 1) ? "D" : <i className="ri-palette-line"></i>}
                            </button>
                        )
                    })

                }

                {/* This is used to get fav color of user. */}
                <input 
                    type="color" 
                    className="im_theme input_color" 
                    onChange={(e) => { favColorChangeHandler(e); notificationFuction(true, "New Theme set"); }} 
                />

            </div>



        </>
    )
}

export default ThemeDiv