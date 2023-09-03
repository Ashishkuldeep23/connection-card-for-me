let myPhoneNumber = "9264981073"
// console.log(myPhoneNumber)

let msg = "Hey Ashish, I want to connect with you via What's App. I'm, <YOURNAME_HERE> and I want to discuss <TOPIC_HERE> , Thank you."
// console.log(window.btoa(msg))

// msg = window.btoa(msg)

// // // Both are predefined in javasript -------->
// // // window.btoa()  ==> str to encoded
// // // window.atoa()  ==> encoded to str

// const personalLinksDataArr = []

const personalLinksDataArr = [
    {
        id: "1",
        siteName: "Instagram",
        logo: "instagram",
        clickAble:"https://instagram.com/_ashish_kuldeep?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
        userId : "_ashish_kuldeep",
    },
    {
        id: "2",
        siteName: "Twitter [X]",
        logo: "twitter",
        clickAble: "https://twitter.com/ashishkuldeep23",
        userId : "ashishkuldeep23",
    },

    {
        id: "3",
        siteName: "Linkedin",
        logo: "linkedin-box",
        clickAble: "https://www.linkedin.com/in/ashish-kuldeep-09b96018b",
        userId : "ashishkuldeep23",
    },
    {
        id: "4",
        siteName: "Gmail",
        logo: "mail",
        // clickAble:"https://mail.google.com/mail/?view=cm&source=mailto&to=ashishkuldeep6@gmail.com",
        clickAble:`https://mail.google.com/mail/u/0/?to=ashishkuldeep6@gmail.com&su=Just_Connect_with_you&body=${msg}&bcc=ashishkuldeep6@gmail.com&fs=1&tf=cm`,
        userId : "ashishkuldeep6@gmail.com",
    },
    {
        id: "5",
        siteName: "YouTube",
        logo: "youtube",
        // clickAble:"https://mail.google.com/mail/?view=cm&source=mailto&to=ashishkuldeep6@gmail.com",
        clickAble:"https://www.youtube.com/@2minwithashish",
        userId : "2minwithashish",
    },
    {
        id: "6",
        siteName: "What's App",
        logo: "whatsapp",
        // clickAble:"https://mail.google.com/mail/?view=cm&source=mailto&to=ashishkuldeep6@gmail.com",
        clickAble:`https://wa.me/${myPhoneNumber}?text=${msg}`,
        userId : "+91 9264981073",
    },
    {
        id: "7",
        siteName: "Snapchat",
        logo: "snapchat",
        // clickAble:"https://mail.google.com/mail/?view=cm&source=mailto&to=ashishkuldeep6@gmail.com",
        clickAble:"https://www.snapchat.com/add/mrak21532?share_id=qtEhk6VE4T0&locale=en-US",
        userId : "mrak21532",
    },
    {
        id: "8",
        siteName: "Professional Card",
        logo: "profile",
        clickAble: "#",
        userId : "professional card",
    },
];


export default personalLinksDataArr