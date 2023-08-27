import React from 'react'


const MainCard = () => {
    return (
        <>

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
                    {
                        (userData) && (userData.length > 0)
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
        </>
    )
}

export default MainCard