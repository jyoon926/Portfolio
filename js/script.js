//Loader
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
    document.getElementById('cursor').style.transform = "scale(5)";
});
$("a").mouseout(function(){
    document.getElementById('cursor').style.transform = "scale(1)";
});

$(".parent").mouseover(function(){
    document.getElementById('click').style.opacity = "1";
});
$(".parent").mouseout(function(){
    document.getElementById('click').style.opacity = "0";
});

//Scroll to top
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}