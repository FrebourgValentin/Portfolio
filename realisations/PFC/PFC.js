let Image_main = ["pierre", "feuille", "ciseaux"];
let Image_avatar = ["joueur_1", "joueur_2", "joueur_3", "joueur_4"]
let Aire = document.querySelector("#a");
let Point_J = 0, Point_O = 0;

class Joueur_Humain {
    constructor(Nom) {
        this.Nom = Nom;
    }

    Nom_Joueur() {
        this.Nom = "Joueur";
        document.querySelector(".pseudo").innerHTML = this.Nom;
    }

    Choix_Joueur(Choix_J, Bot, Jeux) {
        let Avatar = document.querySelector(".joueur .avatar img");
        let Main_J = document.createElement("img");

        while (Aire.firstChild)
            Aire.removeChild(Aire.firstChild);

        if (Avatar.className == "joueur_4")
            Main_J.setAttribute("src", "img_pfc/" + Image_main[Choix_J] + "_c1.png");

        else if (Avatar.className == "joueur_3")
            Main_J.setAttribute("src", "img_pfc/" + Image_main[Choix_J] + "_c2.png");

        else
            Main_J.setAttribute("src", "img_pfc/" + Image_main[Choix_J] + ".png");

        Main_J.setAttribute("class", "new_img");
        Aire.appendChild(Main_J);
        this.Choix = Choix_J;
        Bot.Choix_Bot(Jeux, this);
    }

    Gestion_Avatar(A) {
        let Avatar = document.querySelector(".avatar");
        let Pierre_J = document.querySelector(".joueur .mains .pierre");
        let Feuille_J = document.querySelector(".joueur .mains .feuille");
        let Ciseaux_J = document.querySelector(".joueur .mains .ciseaux");

        while (Avatar.firstChild)
            Avatar.removeChild(Avatar.firstChild);

        let Avatar_J = document.createElement("img");
        Avatar_J.setAttribute("src", "img_pfc/" + Image_avatar[A] + ".png");
        Avatar_J.setAttribute("class", Image_avatar[A]);

        if (Image_avatar[A] == "joueur_4") {
            Pierre_J.setAttribute("src", "img_pfc/pierre_c1.png");
            Feuille_J.setAttribute("src", "img_pfc/feuille_c1.png");
            Ciseaux_J.setAttribute("src", "img_pfc/ciseaux_c1.png");
        }

        else if (Image_avatar[A] == "joueur_3") {
            Pierre_J.setAttribute("src", "img_pfc/pierre_c2.png");
            Feuille_J.setAttribute("src", "img_pfc/feuille_c2.png");
            Ciseaux_J.setAttribute("src", "img_pfc/ciseaux_c2.png");
        }

        else {
            Pierre_J.setAttribute("src", "img_pfc/pierre.png");
            Feuille_J.setAttribute("src", "img_pfc/feuille.png");
            Ciseaux_J.setAttribute("src", "img_pfc/ciseaux.png");
        }

        document.querySelector(".avatar_2").style.display = "none";
        Avatar.appendChild(Avatar_J);
    }

    Affichage_Avatar() {
        let Menu_Avatar = document.querySelector(".avatar_2");

        if (Menu_Avatar.style.display == "block")
            Menu_Avatar.style.display = "none";
        else
            Menu_Avatar.style.display = "block";
    }
}

class Joueur_Bot {
    constructor(Chance) {
        this.Chance = Chance;
    }

    Choix_Bot(Jeux, Joueur) {
        this.Chance = Math.floor(Math.random() * 1000) % 3;

        let Main_O = document.createElement("img");
        Main_O.setAttribute("src", "img_pfc/" + Image_main[this.Chance] + "_bot.png");
        Main_O.setAttribute("class", "new_img");

        Aire.appendChild(Main_O);

        this.Choix = this.Chance;
        Jeux.Score(Joueur, this);
    }
}

class Aire_De_Jeux {
    constructor(Description) {
        this.Description = Description;
    }

    Score(Joueur, Bot) {
        this.Description = document.querySelector(".description");

        if (Point_J == 3 || Point_O == 3) {
            return;
        }

        if (Joueur.Choix == Bot.Choix)
            this.Description.textContent = "Egalité";

        else {
            if ((Joueur.Choix == 0 && Bot.Choix == 2) || (Joueur.Choix == 2 && Bot.Choix == 1) || (Joueur.Choix == 1 && Bot.Choix == 0)) {
                this.Description.textContent = Joueur.Nom + " gagne 1 point";

                Point_J++;

                if (Point_J == 3) {
                    this.Description.textContent = Joueur.Nom + " a gagné la partie";
                    document.querySelector(".mains > .pierre").onclick = null;
                    document.querySelector(".mains > .feuille").onclick = null;
                    document.querySelector(".mains > .ciseaux").onclick = null;
                }
            }
            else {
                this.Description.textContent = "Le BOT gagne 1 point";

                Point_O++;

                if (Point_O == 3) {
                    this.Description.textContent = "Le BOT a remporte la partie";
                    document.querySelector(".mains > .pierre").onclick = null;
                    document.querySelector(".mains > .feuille").onclick = null;
                    document.querySelector(".mains > .ciseaux").onclick = null;
                }
            }
        }

        let Score = document.querySelector(".points");
        Score.textContent = Point_J + " - " + Point_O;
    }
}

const J = new Joueur_Humain();
J.Nom_Joueur();
const O = new Joueur_Bot();
const A = new Aire_De_Jeux();