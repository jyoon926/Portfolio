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
    document.getElementById('loader').style.top = "-100vh";
    document.getElementsByTagName('html')[0].style.overflowY = "scroll";
});



var offset = 0;
var halfWidth = window.innerWidth / 2;
var halfHeight = window.innerHeight / 2;
var $win = $(window);

document.addEventListener("mousemove", e => {
    if (window.innerWidth > 1000) {
        document.getElementById('cursor').style.top = e.pageY - $win.scrollTop() - offset + "px";
        document.getElementById('cursor').style.left = e.pageX - offset + "px";
    }
})