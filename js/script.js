//Loader
/*
window.onload = function load() {
}

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    document.getElementById('loader').style.opacity = "0";
    document.getElementById('loader').style.pointerEvents = "none";
    document.getElementById('loading').style.opacity = "0";
    document.getElementsByTagName('html')[0].style.overflowY = "scroll";
});
*/

//Mouse Cursor
var offset = 10;
var $win = $(window);

document.addEventListener("mousemove", e => {
    if (window.innerWidth > 1000) {
        document.getElementById('cursor').style.top = e.pageY - $win.scrollTop() - offset + "px";
        document.getElementById('cursor').style.left = e.pageX - offset + "px";

        document.getElementById('imgcursor').style.top = e.pageY - $win.scrollTop() - document.getElementById('imgcursor').offsetHeight / 2 + "px";
        document.getElementById('imgcursor').style.left = e.pageX - document.getElementById('imgcursor').offsetWidth / 2 + "px";
    }
})

$("a").mouseover(function(){
    document.getElementById('cursor').style.transform = "scale(4)";
});
$("a").mouseout(function(){
    document.getElementById('cursor').style.transform = "scale(1)";
});
$("button").mouseover(function(){
    document.getElementById('cursor').style.transform = "scale(4)";
});
$("button").mouseout(function(){
    document.getElementById('cursor').style.transform = "scale(1)";
});
$(".projects").mouseover(function(){
    document.getElementById('imgcursor').style.transform = "scale(1)";
    document.getElementById('cursor').style.transform = "scale(0)";
});
$(".projects").mouseout(function(){
    document.getElementById('imgcursor').style.transform = "scale(0)";
    document.getElementById('cursor').style.transform = "scale(1)";
});

$(".0").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Humanities Class.jpg";
});
$(".1").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/IHSTSA.jpg";
});
$(".2").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Von Cramm.jpg";
});
$(".3").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/IHS Social Justice Week.jpg";
});
$(".4").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/3d Avatar.jpg";
});
$(".5").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Glass.jpg";
});
$(".6").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Buildings.jpg";
});
$(".7").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/John.jpg";
});
$(".8").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/joseph.jpg";
});
$(".9").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/TSA Video Game Design.png";
});
$(".10").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Agapai.jpg";
});
$(".11").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Population Project.jpg";
});
$(".12").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/TSA Promotional Design.jpg";
});
$(".13").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Portraits 1.jpg";
});
$(".14").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Principles of Criminal Evidence Cover Design.jpg";
});
$(".15").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Doomscape.jpg";
});
$(".16").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/IHSTSA 2018.jpg";
});
$(".17").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Non-Euclidean Geometry Project.jpg";
});
$(".18").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Split Head.jpg";
});
$(".19").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Levitating Man.jpg";
});
$(".20").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Weight Lifter.jpg";
});
$(".21").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Corridor.jpg";
});
$(".22").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/How a Camera Works.jpg";
});
$(".23").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Trappist-1.jpg";
});
$(".24").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/After Effects Animation Timelapse 1.jpg";
});
$(".25").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/After Effects Animation Timelapse 2.jpg";
});
$(".26").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/After Effects Animation Timelapse 3.jpg";
});
$(".27").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Tardigrades.jpg";
});
$(".28").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/DeWitt Middle School TSA.jpg";
});

/*$(".parent").mouseover(function(){
    document.getElementById('click').style.opacity = "1";
});
$(".parent").mouseout(function(){
    document.getElementById('click').style.opacity = "0";
});
*/

//Scroll to top
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function set(n) {
    $(".web").css("display", "none");
    $(".modeling").css("display", "none");
    $(".gamedev").css("display", "none");
    $(".illustration").css("display", "none");
    $(".animation").css("display", "none");
    if (n == 0) {
        $(".web").css("display", "flex");
        $(".modeling").css("display", "flex");
        $(".gamedev").css("display", "flex");
        $(".illustration").css("display", "flex");
        $(".animation").css("display", "flex");
    }
    if (n == 1) {
        $(".web").css("display", "flex");
    }
    if (n == 2) {
        $(".modeling").css("display", "flex");
    }
    if (n == 3) {
        $(".gamedev").css("display", "flex");
    }
    if (n == 4) {
        $(".illustration").css("display", "flex");
    }
    if (n == 5) {
        $(".animation").css("display", "flex");
    }
    for (i = 0; i < 6; i++) {
        if (i == n) {
            document.getElementById("button" + i).classList.add("active");
        }
        else {
            document.getElementById("button" + i).classList.remove("active");
        }
    }    
}