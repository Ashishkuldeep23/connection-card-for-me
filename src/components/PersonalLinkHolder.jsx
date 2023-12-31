import React, { useState, useEffect, Fragment } from 'react'

import personalLinksDataArr from '../personalLinksDataArr'

import ImPagination from './ImPagination'


import Links from './Links'

const PersonalLinkHolder = ({ notificationFuction }) => {


    const [userDataLinks, setUserDataLinks] = useState(personalLinksDataArr);    // // // User Personal data.


    const [pagesAre, setPagesAre] = useState([])    // // // How many pages are pesent.





    // // // This is global varible that holds the value how many links show maximum at one time
    var forOnePage = 5       // // // maximum links in one page.



    function pageClickHandler(n) {

        // console.log(n)
        // console.log( (n-1)*forOnePage , forOnePage*n )
        // console.log(personalLinksDataArr)


        let s = (n - 1) * forOnePage
        let e = forOnePage * n

        let putThisArr = personalLinksDataArr.slice(s, e)

        // console.log(putThisArr)

        setUserDataLinks(putThisArr)
    }




    useEffect(() => {
        // // // SetPages (pAGINATION CODE here , how many pages present )----->

        if (forOnePage < 0) {
            alert("Number of Links show in time can not be less then 0")
        }



        if (personalLinksDataArr.length > forOnePage) {

            let countPages = Math.ceil(personalLinksDataArr.length / forOnePage)

            // console.log(countPages)

            let newArrForPages = []    // // // This i sused for pages

            for (let i = 1; i <= countPages; i++) {
                newArrForPages.push(i)
            }

            setPagesAre(newArrForPages)

            // console.log(personalLinksDataArr)

            let putThisArrInLink = personalLinksDataArr.slice(0, forOnePage)
            setUserDataLinks(putThisArrInLink)
        }


    }, [])


    return (
        <>

            <Fragment>
                {


                    ((userDataLinks) && (userDataLinks.length > 0))

                        ? userDataLinks.map((user) => (
                            <Links key={user.id} user={user} notificationFuction={notificationFuction}
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


            <>
                <ImPagination pagesAre={pagesAre} pageClickHandler={pageClickHandler} notificationFuction={notificationFuction} />
            </>


        </>
    )
}

export default PersonalLinkHolder