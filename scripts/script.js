
var page0 = document.getElementById("page0");
var page1 = document.getElementById("page1");
page0.onclick = () => fancyNav(0);
page1.onclick = () => fancyNav(1);
var audio;

var main = document.getElementById("main");


function fancyNav(int)
{
    switch(int)
    {
        case 0:
            page1.style.borderBottom = "none"
            page0.style.borderBottom = "2px solid azure"
            loadAbtMe();
            break;
        case 1:
            page0.style.borderBottom = "none"
            page1.style.borderBottom = "2px solid azure"
            //loadAmgUs();
            break;
    }
}

function loadAbtMe()
{
    //main.innerHTML = "<h3>I am epic???</h3><br><p>My mom is epic and based, and so am i idiot</p>"
    main.style.backgroundImage = "none"
    audio.pause();
}

function loadAmgUs()
{
    audio = new Audio("sounds/amogus.mp3");
    main.innerHTML = "";
    main.style.backgroundImage = "url('images/fb8.jpg')"
    main.style.backgroundSize = "100% 100%";
    main.style.backgroundPosition = "center"
    audio.play();
}
