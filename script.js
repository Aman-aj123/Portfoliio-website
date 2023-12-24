let header = document.querySelector(".list-items");
let hamburger = document.querySelector(".menu");

let middleLine = document.querySelector(".middle-line");

let topLine = document.querySelector(".top-line");

let bottomLine = document.querySelector(".bottom-line");



hamburger.onclick = function () {
  header.classList.toggle("displayHeader");

  document.body.classList.toggle("changeBg");

  middleLine.classList.toggle("hide-middle-line")

  topLine.classList.toggle("move-top-line");

  bottomLine.classList.toggle("move-bottom-line");
}

//  loader
window.onload = () => {
  let loader = document.querySelector('.preloader')
  loader.classList.add('active-loader')
}

//  Auto typing 
var typed = new Typed(".auto-type", {
  strings: ["Web Developer", "Web Master", "Web Designer", "Web Expert"],
  typeSpeed: 60,
  loop: true
});




let SideBarBody = document.getElementById('mainSideBar');

function openSideBar() {
  SideBarBody.classList.toggle('visibleSideBar');

}

// Dark mode and light mode options

let modeEl = document.querySelector('.mode-area')
let modeChild = document.querySelector('.mode-child')
modeEl.onclick = function () {
  modeChild.classList.toggle('slide-pannel')
  document.body.classList.toggle('bg-black')
  modeEl.classList.toggle('bg-pannel')
}




// Gsap Animations
// only simple animations
let tl = gsap.timeline()
tl.from("#header .logo", {
  y: -200,
  duration: .80,
  opacity: "0",
})

tl.from("#header .list-items li", {
  y: -200,
  duration: 1,
  opacity: "0",
  stagger: .1,
})

tl.from("#home .home-cont", {
  x: -200,
  duration: 1,
  opacity: "0"
})

tl.from("#home .home-image", {
  x: 200,
  duration: .80,
  opacity: "0"
})

// Scrolling animations
gsap.from("#about .about-image", {
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
  },
  scale: ("0.8"),
  x: -50,
  y: -120,
  duration: 1.20,
  opacity: 0,
})

gsap.from("#about .about-text", {
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
  },
  x: 300,
  duration: 1.20,
  opacity: 0,
})


gsap.from("#skill", {
  scrollTrigger: {
    trigger: "#skill",
    scroller: "body",
  },
  rotate: 360,
  y: 320,
  duration: 1.20,
  opacity: 0,
})

gsap.from("#project .project-box", {
  scrollTrigger: {
    trigger: "#project",
    scroller: "body",
  },
  y: -300,
  duration: 1,
  stagger: .30,
})

gsap.from("#contact", {
  scrollTrigger: {
    trigger: "#contact",
    scroller: "body",
    start: "top 1%"
  },
  opacity: 0,
  scale: (".9"),
  rotate: 120,
  x: -200,
  duration: 1.30,
})

gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",
    scroller: "body",
    start: "top 1%"
  },
  opacity: 0,
  scale: (".9"),
  rotate: 40,
  y: 200,
  duration: 1.30,
})




//  Cursor follow image 
const imageEl = document.querySelector('.image-follow')
const homeSection = document.querySelector('#home')

homeSection.addEventListener('mouseover', (dets) => {
  const x = dets.clientX;
  const y = dets.clientY - homeSection.offsetTop; // Use offsetTop to get the correct y coordinate
  imageEl.style.top = `${y}px`;
  imageEl.style.left = `${x}px`;
});
