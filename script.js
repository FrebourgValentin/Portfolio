/*====================== SECTION ACCUEIL =============================== */

if (screen.width < 768) { 
  document.getElementById("dev").innerHTML = "<br/>-<br/>";
}

/*====================== SECTION MENU =============================== */

function Unzoom_Menu() {
  document.getElementById("active").checked = false;
}

/*====================== SECTION COMPETENCES ======================== */

TagCloud(
  ".sphere", // Emplacement de la sphere
  ['JavaScript','CSS','HTML','C','C++','SQL','jQuery','SCSS','Node.js','Angular','React','TypeScript','PHP','Responsive Design'], // Tableau de texte
  { radius: 200, keep: true } // Rayon de la sphere en px, Interaction avec le curseur
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