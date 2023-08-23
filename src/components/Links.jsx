import { useEffect } from "react";

function Links({user}) {

  let { siteName = "Link", logo = "ri-links-line", clickAble = "https://www.google.com/", userId = "ID ID ID ID" } = user

  useEffect(()=>{


        // // // Experimet here (Working) ----->
    // // // Let's use gsap in recat code 



    let tl = gsap.timeline()

    tl.from(".social_link" , {

      x:"-30px" ,
      y : "5",
      delay: -5,
      stagger: .2

    })


  } , [])

  return (
    <div
      className="social_link"
      onClick={() => {
        window.open(clickAble, "_blank");
      }}
    >
      <div>

        <p>{siteName}</p>
        <span className="im_user_id">{userId}</span>
      </div>
      <p>
        <i className={logo}></i>
      </p>


    </div>
  );
}

export default Links;
