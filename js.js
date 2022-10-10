/*====================== SECTION INTRO ======================== */

const competences = ['JavaScript','CSS','HTML','C','C++','MySQL', 'jQuery','SASS','Vue.js','PHP','Responsive Design','Wordpress'];

var tagCloud = TagCloud('.sphere', competences, {
  radius: 200,
  maxSpeed: 'normal', // slow, normal, fast
  initSpeed: 'normal',
  direction: 45,
  keep: true // interact with cursor move on mouse out
});

/*====================== SECTION REALISATIONS ======================== */

const slider = document.querySelector(".slider")
const trail = document.querySelectorAll(".trail div")

const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.inOut" } })
tl.from("#realisations .bg", { x: "-100%", opacity: 0 })
  .from("#realisations p", { opacity: 0 }, "-=0.3")
  .from("#realisations h2", { opacity: 0, y: "30px" }, "-=0.3")

const clickCheck = (e) => {
  trail.forEach(cur => cur.classList.remove("active"))
  const check = e.target
  check.classList.add("active")

  let value = 0

  if (check.classList.contains("box1")) {
    value = 0
  } else if (check.classList.contains("box2")) {
    value = 20
  } else if (check.classList.contains("box3")) {
    value = 40
  } else if (check.classList.contains("box4")) {
    value = 60
  } else {
    value = 80
  }

  slider.style.transform = `translateX(-${value}%)`
  tl.restart()
}

trail.forEach(cur => cur.addEventListener("click", (ev) => clickCheck(ev)))