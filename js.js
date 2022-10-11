/*====================== SECTION INTRO ======================== */

TagCloud(
  ".sphere", // Emplacement de la sphere
  ['JavaScript','CSS','HTML','C','C++','MySQL', 'jQuery','SASS','Vue.js','PHP','Responsive Design','Wordpress'], // Tableau de texte
  { radius: 200, keep: true } // Rayon de la sphere, Interaction avec le curseur
);

/*====================== SECTION REALISATIONS ======================== */

const slider = document.querySelector(".slider");
const blocs = document.querySelectorAll(".blocs div");

const tl = gsap.timeline({ duration: 0.3 });
tl.from("#realisations .bg", { x: "-100%", opacity: 0 });
tl.from("#realisations h2", { opacity: 0 }, "-=0.3");
tl.from("#realisations p", { opacity: 0, y: "30px" }, "-=0.3");
tl.from("#realisations button", { opacity: 0, y: "30px" }, "-=0.3");

function Animation_Slide() {
  blocs.forEach(bloc => bloc.classList.remove("active"));
  this.classList.add("active");

  if (this.classList.contains("bloc_1")) {
    slider.style.transform = "translateX(-0%)";
  } 
  else if (this.classList.contains("bloc_2")) {
    slider.style.transform = "translateX(-20%)";
  } 
  else if (this.classList.contains("bloc_3")) {
    slider.style.transform = "translateX(-40%)";
  } 
  else if (this.classList.contains("bloc_4")) {
    slider.style.transform = "translateX(-60%)";
  } 
  else {
    slider.style.transform = "translateX(-80%)";
  }

  tl.restart();
};

blocs.forEach(bloc => bloc.addEventListener("click", Animation_Slide));