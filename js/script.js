var prevScrollpos = window.pageYOffset;
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

document.addEventListener('mousemove', function(ev){
    document.getElementById('cursor').style.transform = 'translateY(' + (ev.clientY - 7) + 'px)';
    document.getElementById('cursor').style.transform += 'translateX(' + (ev.clientX - 7) + 'px)';

    document.getElementById('cursorFollower').style.transform = 'translateY(' + (ev.clientY - 150) + 'px)';
    document.getElementById('cursorFollower').style.transform += 'translateX(' + (ev.clientX - 150) + 'px)';
},false);

$(window).on('scroll', function(){
	$('#parallax').css('transform', 'translateY(-' + $(window).scrollTop()/3 + 'px)');
});
