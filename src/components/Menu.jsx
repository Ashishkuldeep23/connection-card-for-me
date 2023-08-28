import React from 'react'

const Menu = ({ setMenuShow, menuShow }) => {
    return (
        <div style={{
            display: menuShow ? "block" : "none",
        }} id='menu_div'>

            <h3 >I'm Menu</h3>
            <ul>
                <li>If you want a webapp where user can create own card , then write in comment box plz.</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <button
                onClick={() => { setMenuShow(false) }
            }>Close</button>
        </div>
    )
}


export default Menu