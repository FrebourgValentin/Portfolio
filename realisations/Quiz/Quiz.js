var valeur = 100;
var i = 0;
var score = 0;
var myInterval;

$(document).ready(function () {
    $(".question").hide();
    $(".barre_1").hide();
    $(".barre_2").hide();
    $(".sablier").hide();

    $(".question > h2").mouseover(function () {
        $(this).animate({ letterSpacing: '2' }, 200);
        $(this).animate({ letterSpacing: '0' }, 200);
    });

    $("button").click(function () {
        $(".debut").hide();
        $(".barre_1").show();
        $(".barre_2").show();
        $(".sablier").show();

        Loop_Question();
    });

    function Sablier() {
        if (valeur >= 0) {
            $(".sablier").progressbar({ value: valeur });
            valeur--;
        }

        else {
            $(".question > .RV").eq(i).css("background", "rgb(0, 230, 0)");

            $(".RV, .RF").eq(i).parent().children().off("click");
            clearInterval(myInterval);

            setTimeout(function () {
                $(".question").eq(i).fadeOut();
                i++;
                Loop_Question();
            }, 3000);
        }
    }

    function Loop_Question() {
        if (i < 5) {
            valeur = 100;
            myInterval = setInterval(Sablier, 120); // 12 secondes

            $(".question").eq(i).delay(400).fadeIn();
            $(".barre_2").css("width", "+=20%");
            $(".barre_2").text("Question n° " + (i + 1) + " / 5");
        }

        if (i == 5) {
            $(".score").text("Score : " + score + " / 5");
            $(".barre_1").hide();
            $(".barre_2").hide();
            $(".sablier").hide();
        }
    }

    $(".RV, .RF").click(function () {
        $(this).css("background", "red");
        $(".question > .RV").eq(i).css("background", "rgb(0, 230, 0)");

        $(this).parent().children().off("click");
        clearInterval(myInterval);

        setTimeout(function () {
            $(".question").eq(i).fadeOut();
            i++;
            Loop_Question();
        }, 3000);
    });

    $(".RV").click(function () {
        score++;
    });
});