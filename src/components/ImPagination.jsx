import React, { useState } from 'react'

const ImPagination = ({pagesAre ,pageClickHandler ,  notificationFuction}) => {


    const [currentPageIs , setCurrentPageIs] = useState(1)

    return (
        <>
            <div id="im_pagination_div">
                {
                    (pagesAre.length > 0) && pagesAre.map((el, i) => {
                        return <button
                            key={i}
                            style={{
                                 margin: "5px 10px" ,
                                 background : currentPageIs===i+1 ? "var(--dark)" : ""
                                }}

                            onClick={() => { pageClickHandler(i + 1); setCurrentPageIs(i+1); notificationFuction(true, `${i + 1} page`, 0.5) }}
                        >{i + 1}</button>
                    }
                    )
                }
            </div>
        </>
    )
}

export default ImPagination