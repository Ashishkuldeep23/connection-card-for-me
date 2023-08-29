import React, { useEffect, useState } from 'react'

const CardType = () => {


    const [cardType , setCardType] = useState("Friends")


    useEffect( ()=>{
        let e = window.location.hash
        if(e === "#/1"){
            setCardType("Personaly")
        }else{
            setCardType("Professionally")
        }
        // console.log(e)
    } , [])

    return (
        <>
            <div id="heading_div">
                <h2>{`Let's Connect ${cardType}`}</h2>
            </div>
        </>
    )
}

export default CardType