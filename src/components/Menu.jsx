import React from 'react'

const Menu = ({ setMenuShow, menuShow }) => {
    return (
        <div style={{
            display: menuShow ? "block" : "none",
        }} id='menu_div'>

            <h3 >I'm Menu</h3>
            <ul>
                <li>If you <strong> want a web app </strong> where users can create their own connection card , then write in the comment box plz or Message me by following links.</li>
                <li>Here viewers can reach <strong>other social media links </strong> by following the links of creator.</li>
                <li>In this connection card project I have created some animation by <strong>using GSAP in React</strong> , like Mouse follower , On load animation , Moving of two divs.</li>
                <li>A <strong>theme section</strong> is also present in the web app where users can set <strong>some predefined theme colors</strong> or users can also give their favorite color by <strong>color input</strong> (present in last) , comment your favorite color or <strong>show me a card with your favorite color</strong> theme.</li>
                <li>In this project ,<strong>A notification section</strong> is also present in this web app that is used to <strong>show messages to users</strong>.
                </li>
                <li>In this project ,I try to improve myself in the <strong> designing part </strong>,please tell me <strong>your thoughts </strong> about this web app.
                </li>
                <li>And <strong>don't forget to connect with</strong> me on other social media platforms.</li>
                <li>And obviously this web app is fully <strong>responsive</strong> and means the user can <strong>see it on any device</strong>.</li>
                <li><strong>Thank you</strong> for reading and visiting.</li>
            </ul>
            <button
                onClick={() => { setMenuShow(false) }
                }>Close</button>
        </div>
    )
}


export default Menu