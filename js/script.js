

//Header
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        $('#header-line').css("top", "0");
    } else {
        $('#header-line').css("top", "-" + ($('#header-line').height() + 1) + "px");
    }
}

//Cursor
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