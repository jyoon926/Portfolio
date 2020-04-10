var prevScrollpos = window.pageYOffset;
/*
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    }
    else {
        document.getElementById("header").style.top = "-120px";
    }
    prevScrollpos = currentScrollPos;
}
*/
document.addEventListener('mousemove', function(ev){
    document.getElementById('cursor').style.transform = 'translateY(' + (ev.clientY - 7) + 'px)';
    document.getElementById('cursor').style.transform += 'translateX(' + (ev.clientX - 7) + 'px)';

    document.getElementById('cursorFollower').style.transform = 'translateY(' + (ev.clientY - 150) + 'px)';
    document.getElementById('cursorFollower').style.transform += 'translateX(' + (ev.clientX - 150) + 'px)';
},false);

$(window).on('scroll', function(){
	$('#parallax').css('opacity', (1 - $(window).scrollTop() / 100) + 'px');
});

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