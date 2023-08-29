import React, { useEffect } from 'react'

import "../App.css"

const NotificationDiv = ({ userImage, notificationVisibility, notificationMsg }) => {





    useEffect(() => {

        let tl = gsap.timeline()

        tl.to("#notification_div", {
            x: "-50%",
            y: "-20",
            duration: .1,
            ease: Expo.none,

        })

        const innerWidth = window.innerWidth;
        if (innerWidth <= 670) {

            tl.to("#notification_div", {
                x: "-0%",
                y: "-20",
                duration: .1,
                ease: Expo.none,
    
            })
        }

    }, [])



    return (
        <>
            <div id='notification_div'
                style={{ visibility: notificationVisibility ? "visible" : "hidden" }}

            >
                <img
                    style={{ visibility: notificationVisibility ? "visible" : "hidden" }}
                    src={userImage} alt="userImage"
                />
                <h4
                    style={{ visibility: notificationVisibility ? "visible" : "hidden" }}

                >
                    {notificationMsg}
                </h4>
            </div>
        </>
    )
}

export default NotificationDiv