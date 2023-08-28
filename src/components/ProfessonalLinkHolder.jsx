import React, { useState, useEffect, Fragment } from 'react'

import proffesonalLinksDataArr from '../proffesonalLinksdataArr'

import Links from './Links'


const ProfessonalLinkHolder = ({ notificationFuction }) => {

    const [userDataLinks, setUserDataLinks] = useState(proffesonalLinksDataArr)


    const [pagesAre, setPagesAre] = useState([])    // // // How many pages are pesent.


    var forOnePage = 5       // // // maximum links in one page.





    function pageClickHandler(n) {

        // console.log(n)
        // console.log( (n-1)*forOnePage , forOnePage*n )
        // console.log(personalLinksDataArr)


        let s = (n - 1) * forOnePage
        let e = forOnePage * n

        let putThisArr = proffesonalLinksDataArr.slice(s, e)

        // console.log(putThisArr)

        setUserDataLinks(putThisArr)
    }




    useEffect(() => {
        // // // SetPages (pAGINATION CODE here , how many pages present )----->

        if (forOnePage < 0) {
            alert("Number of Links show in time can not be less then 0")
        }


        if (proffesonalLinksDataArr.length > forOnePage) {

            let countPages = Math.ceil(proffesonalLinksDataArr.length / forOnePage)

            // console.log(countPages)

            let newArrForPages = []    // // // This i sused for pages

            for (let i = 1; i <= countPages; i++) {
                newArrForPages.push(i)
            }

            setPagesAre(newArrForPages)

            // console.log(personalLinksDataArr)

            let putThisArrInLink = proffesonalLinksDataArr.slice(0, forOnePage)
            setUserDataLinks(putThisArrInLink)
        }


    }, [])





    return (
        <>

            <Fragment>
                {


                    ((userDataLinks) && (userDataLinks.length > 0))

                        ? userDataLinks.map((user) => (
                            <Links key={user.id} user={user}  notificationFuction={notificationFuction}
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
            </Fragment>



            <div id="im_pagination_div">
                {
                    (pagesAre.length > 0) && pagesAre.map((el, i) => {
                        return <button
                            key={i}
                            style={{ margin: "5px 10px" }}

                            onClick={() => { pageClickHandler(i + 1); notificationFuction(true, `${i + 1} page`, 0.5) }}
                        >{i + 1}</button>
                    }
                    )
                }
            </div>




        </>
    )
}

export default ProfessonalLinkHolder