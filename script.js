/*====================== SECTION COMPETENCES ======================== */

let rayon_sphere = 0;

if (screen.width < 500) {
  rayon_sphere = 150;
}
else {
  rayon_sphere = 200;
}

TagCloud(
  ".sphere", // Emplacement de la sphere
  ['JavaScript','CSS','HTML','C','C++','MySQL', 'jQuery','SASS','Vue.js','PHP','Responsive Design','Wordpress'], // Tableau de texte
  { radius: rayon_sphere, keep: true } // Rayon de la sphere en px, Interaction avec le curseur
);

/*====================== SECTION REALISATIONS ======================== */

const slider = document.querySelector(".slider");
const blocs = document.querySelectorAll(".blocs div");

const tl = gsap.timeline();
tl.from("#realisations .background", { x: "-100%", opacity: 0 });
tl.from("#realisations h2", { opacity: 0 });
tl.from("#realisations p", { opacity: 0, y: "30px" });
tl.from("#realisations a", { opacity: 0, y: "30px" });

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