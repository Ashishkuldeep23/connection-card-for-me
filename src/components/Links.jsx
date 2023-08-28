import { useEffect } from "react";
import { useNavigate  } from "react-router-dom";


function Links({user}) {


  let navigate = useNavigate();    // // // This hook is used to navigate user from present page to next page.

  let { siteName = "Link", logo = "ri-links-line", clickAble = "https://www.google.com/", userId = "ID ID ID ID" } = user

  useEffect(()=>{


    // // // Experimet here (Working) ----->
    // // // Let's use gsap in recat code 


    let tl = gsap.timeline()

    tl.from(".social_link" , {

      x:"-30px" ,
      y : "5",
      stagger: .2 ,
      immediateRender : false ,
    })


  } , [])

  return (
    <div
      className="social_link"
      onClick={() => {

        (siteName=="Professional Card")  ? navigate("/1")  :  (siteName=="Personal Card") ?  navigate("/")   :  window.open(clickAble, "_blank");
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
