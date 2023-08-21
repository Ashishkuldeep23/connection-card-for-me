function Links({user}) {

  let { siteName = "Link", logo = "ri-links-line", clickAble = "https://www.google.com/", userId = "ID ID ID ID" } = user

  return (
    <div
      className="social_link"
      onClick={() => {
        window.open(clickAble, "_blank");
      }}
    >
      <div>

        <p>{siteName}</p>
        <p className="im_user_id">{userId}</p>
      </div>
      <p>
        <i className={logo}></i>
      </p>


    </div>
  );
}

export default Links;
