gsap.to("header", {
    backgroundColor: "black",
    height: "80px",
    duration: 0.1,
    scrollTrigger: {
        trigger: "header",
        scroller: "body",
        // markers: true,
        start:"top -5%",
        end:"top -11%",
        scrub:1
    }

})
gsap.to("nav ul", {
    fontSize:"21px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "nav ul",
        scroller: "body",
        // markers: true,
        start:"top -5%",
        end:"top -11%",
        scrub:1
    }

})

var body = document.querySelector("body")

function showSlidebar(){
    const sidebar = document.querySelector(".slidebar")
    sidebar.style.display = "flex"
}
function hideSlidebar(){
    const sidebar = document.querySelector(".slidebar")
    sidebar.style.display = "none"
}
var a=0
function nav(){
    if(a==0){
        const nav = document.querySelector(".drop")
        nav.style.display = "block"
        a=1
    }else if(a==1){
        const nav = document.querySelector(".drop")
        nav.style.display = "none"
        a=0
    }
    
}

if(display==flex){
    function hideSlidebar(){
        const sidebar = document.querySelector(".slidebar")
        sidebar.style.display = "none"
    }
}