import React from 'react'

const Menu = ({ setMenuShow, menuShow }) => {
    return (
        <div style={{
            display: menuShow ? "block" : "none",
        }} id='menu_div'>

            <h3 >I'm Menu</h3>
            <ul>
                <li><strong>This is a connection card web app , here all social media links are given by the card owner. Anyone can connect with him/her by following links (by clicking on social media icon).</strong></li>
                <li>The <strong>idea to create this web app</strong> is that <strong>users can create a connection card</strong> where <strong>all links of his/her social accounts are present</strong> and share the card link in <strong>their social media about section </strong>so that anyone can connect on other platforms also. For example card owners can give this link in <strong>whatsapp about section, Insta bio , Twitter about section , fb about</strong> or on other platforms.</li>
                <li><strong>Buttttt</strong> currently I <strong>created this connection card for me only </strong>, if <strong>you guys want a web app like this , then please comment in post or message</strong> me.</li>
                <li>Best part of this card is that <strong>anyone (non-developer person) can create their own card</strong>.</li>
                <li><strong>Tech stuff </strong>--------</li>
                <li>In this connection card project I have created some animation by <strong>using GSAP in React</strong> , like Mouse follower , On load animation , Moving of two divs.</li>
                <li>A <strong>theme section</strong> is also present in the web app where users can set <strong>some predefined theme colors</strong> or users can also give their favorite color by <strong>color input</strong> (present in last) , comment your favorite color or <strong>show me a card with your favorite color</strong> theme.</li>
                <li>In this project ,<strong>A notification section</strong> is also present in this web app that is used to <strong>show messages to users</strong>.
                </li>
                <li>In this project ,I try to improve myself in the <strong> designing part </strong>,please tell me <strong>your thoughts </strong> about this web app.
                </li>
                <li>If you read <strong>till here then please don't forget to connect with me</strong> on social media platforms.</li>
                <li>And obviously this web app is fully <strong>responsive</strong> and means the user can <strong>see it on any device</strong>.</li>
                <li><strong>Thank you</strong> for reading and visiting.</li>
                <li>Please <strong>give your valuable feedback </strong> regarding this web app.(<strong>Likes , Dislikes , suggestions</strong> etc.)</li>
            </ul>
            <button
                onClick={() => { setMenuShow(false) }
                }>Close</button>
        </div>
    )
}


export default Menu