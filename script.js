
gsap.to(".nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    // markers:true,
    start: "top -1%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to('.project-h',{
  x:60,
  duration: 1,
  scrollTrigger:{
    trigger: ".project-h",
    scroller: "body",
    start: "top 60%",
    end : "top 70%",

  }

})
gsap.to('.proj-img',{
  x:-30,
  stagger: 0.2,
  duration: 1,
  scrollTrigger:{
    trigger: ".proj-img",
    scroller: "body",
    start: "top 60%",
    end : "top 70%",
  

  }
})
gsap.to('.about-h',{
  x:-60,
  duration: 1,
  scrollTrigger:{
    trigger: ".about-h",
    scroller: "body",
    start: "top 70%",
    end : "top 80%",

  }

})

gsap.from('.prog',{
  x:150,

  stagger:0.4,
  scrollTrigger:{
    start:"10%",
    end:"25%",
  }
})

gsap.to('.mob-nav',{
  height : "60px",
  duration :0.5,
  backgroundColor : 'black',
  scrollTrigger:{
      trigger: ".mob-nav",
      scroller: "body",
      start: "top -10%",
      end : 'top -11%',
      scrub: 1,
  }
})

gsap.to('.page-cont',{
  backgroundColor : 'black',
  scrollTrigger:{
      trigger: ".nav",
      scroller: "body",
      scrub: 3,
      start: "top -30%",
      end : 'top -130%',
  }
})



/*var v4 = $(".i4").attr("data-pg");
$(".i4").animate({width:v4},2000);*/


const cursor = document.getElementById("crs");
const cursorRing = document.getElementById("cursor-ring");
const SharimganImg = document.getElementById("sha");

// Smooth follow
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX   -15 + "px";
  cursor.style.top = mouseY   -15 + "px";
});

// Smooth ring lag
function animate() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  cursorRing.style.left = ringX  +  "px";
  cursorRing.style.top = ringY  + "px";
  requestAnimationFrame(animate);
}
animate();

// Add hover effect to all links/buttons
document.querySelectorAll("a, button, .hoverable").forEach(el => {
  el.addEventListener("mouseenter", () => {
   cursorRing.style.width = "50px"
   SharimganImg.style.width = "50px"
   SharimganImg.style.height = "40px"
   SharimganImg.src ="/assts/zif.gif"

   cursorRing.style.height = "90px"
  });
  el.addEventListener("mouseleave", () => {
    cursorRing.style.width = "45px"
    SharimganImg.style.width = "35px"
    cursorRing.style.height = "45px"
    SharimganImg.style.height = "70px"
    SharimganImg.src ="/assts/normal.png"
   
  });
});

            // Animate skill bars
            const skillLevels = document.querySelectorAll('.skill-level');
            
            skillLevels.forEach(skill => {
                const level = skill.getAttribute('data-level');
                skill.style.width = level + '%';
            });
