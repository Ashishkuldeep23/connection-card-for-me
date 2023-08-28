



let msg = "Hey Ashish, I want to connect with you via What's App. I'm, <YOURNAME_HERE> and I want to discuss <TOPIC_HERE> , Thank you."
// console.log(window.btoa(msg))


const proffesonalLinksDataArr = [
    {
        id: "1",
        siteName: "Instagram",
        logo: "ri-instagram-line",
        clickAble:"https://instagram.com/_ashish_kuldeep?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
        userId : "_ashish_kuldeep",
    },
    {
        id: "2",
        siteName: "Twitter [X]",
        logo: "ri-twitter-line",
        clickAble: "https://twitter.com/ashishkuldeep23",
        userId : "ashishkuldeep23",
    },

    {
        id: "3",
        siteName: "Linkedin",
        logo: "ri-linkedin-box-line",
        clickAble: "https://www.linkedin.com/in/ashish-kuldeep-09b96018b",
        userId : "ashishkuldeep23",
    },
    {
        id: "4",
        siteName: "Gmail",
        logo: "ri-mail-line",
        // clickAble:"https://mail.google.com/mail/?view=cm&source=mailto&to=ashishkuldeep6@gmail.com",
        clickAble:`https://mail.google.com/mail/u/0/?to=ashishkuldeep6@gmail.com&su=Just_Connect_with_you&body=${msg}&bcc=ashishkuldeep6@gmail.com&fs=1&tf=cm`,
        userId : "ashishkuldeep6@gmail.com",
    },

    // {
    //   id: "5",
    //   siteName: "Github",
    //   logo: "ri-github-line",
    //   clickAble: "https://github.com/Ashishkuldeep23",
    // },
    {
        id: "5",
        siteName: "Personal Card",
        logo: "ri-profile-line",
        clickAble: "#",
        userId : "professional card",
    },
];


export default proffesonalLinksDataArr