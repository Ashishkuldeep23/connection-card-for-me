import React from 'react'

const Menu = ({ setMenuShow, menuShow }) => {
    return (
        <div style={{
            display: menuShow ? "block" : "none",
        }} id='menu_div'>

            <h3>I'm Menu</h3>
            <ul>
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
                <li></li>
            </ul>
            <button
                onClick={() => { setMenuShow(false) }
            }>X</button>
        </div>
    )
}


export default Menu