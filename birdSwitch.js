
var darkMode = false;

function shift(){

    var button = document.querySelector(":root");

    if (darkMode === false){

        button.setAttribute("darkmode", "true");
        darkMode = true;
        console.log("Darkboi")

    } else{

        button.setAttribute("darkmode", "false");
        darkMode = false
        console.log("ITBURNS")

    };

};

