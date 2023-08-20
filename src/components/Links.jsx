function Links({
  siteName = "Link",
  logo = "ri-links-line",
  clickAble = "https://www.google.com/",
}) {
  return (
    <div
      className="social_link"
      onClick={() => {
        window.open(clickAble, "_blank");
      }}
    >
      <p>{siteName}</p>
      <p>
        <i className={logo}></i>
      </p>
    </div>
  );
}

export default Links;
