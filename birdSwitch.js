
function birdChange(element){

    var photoguy = document.getElementById("photographer");
    var img = document.getElementById("img");

    if (element === 1){

        photoguy.innerHTML = "Pardalote by fir0002 (CC-by-NC)";
        img.src = "http://www.outgrabe.net/bird00.jpg";

    }else if(element === 2){

        photoguy.innerHTML = "Purple swamp hen by Toby Hudson (CC-by-SA)";
        img.src = "http://www.outgrabe.net/bird01.jpg";

    }else if(element === 3){

        photoguy.innerHTML = "White-headed Stilt by JJ Harrison (CC-by-SA)";
        img.src = "http://www.outgrabe.net/bird02.jpg";

    }else if (element === 4){

        photoguy.innerHTML = "Inland Thornbill by Peter Jacobs (CC-by-SA)";
        img.src = "http://www.outgrabe.net/bird03.jpg";

    }else if (element === 5){

        photoguy.innerHTML = "Rose Robin by JJ Harrison (CC-by-SA)";
        img.src = "http://www.outgrabe.net/bird04.jpg";

    };

   
};


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

