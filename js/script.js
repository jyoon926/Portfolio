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
        console.log($win.scrollTop());
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
        $(".web").css("display", "inline-block");
        $(".modeling").css("display", "inline-block");
        $(".gamedev").css("display", "inline-block");
        $(".illustration").css("display", "inline-block");
        $(".animation").css("display", "inline-block");
    }
    if (n == 1) {
        $(".web").css("display", "inline-block");
    }
    if (n == 2) {
        $(".modeling").css("display", "inline-block");
    }
    if (n == 3) {
        $(".gamedev").css("display", "inline-block");
    }
    if (n == 4) {
        $(".illustration").css("display", "inline-block");
    }
    if (n == 5) {
        $(".animation").css("display", "inline-block");
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