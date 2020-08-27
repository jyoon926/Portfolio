var index = 0;
var count = 7;
var delay = 500;
var animating = false;

for (var i = 0; i < 7; i++) {
    if (i == 0) {
        document.getElementById("section" + i).style.top ="0";
    }
    else {
        document.getElementById("section" + i).style.top ="100vh";
        document.getElementById("divider" + i).style.top ="100vh";
    }
}

function setIn(num) {
    document.getElementById("divider" + num).style.top ="0";
    setTimeout(function(){
        document.getElementById("section" + num).style.top ="0";
    }, delay);
}

function setOut(num) {
    document.getElementById("section" + num).style.top ="100vh";
    setTimeout(function(){
        document.getElementById("divider" + num).style.top ="100vh";
    }, delay);
}

$(function() {
    $("#container").bind("mousewheel", function(e) {
        if (!animating) {
            var temp = index;
            //back
            if (e.originalEvent.wheelDelta > 0) {
                if (index > 0) {
                    setOut(index);
                    index--;
                    animating = true;
                    setTimeout(function(){
                        animating = false;
                    }, 800);
                }
            }
            //next
            else {
                if (index < count - 1) {
                    index++;
                    setIn(index);
                    animating = true;
                    setTimeout(function(){
                        animating = false;
                    }, 800);
                }
            }
            document.getElementById("scrollbar").style.height = (index * (100 / 6)) + "vh";
            return false;
        }
    });
});

//Loader
$(window).load(function() {
    setTimeout(function(){
        document.getElementById('loadertext').style.transitionDuration = "1s";
        document.getElementById('loadertext').style.opacity = "0";
        document.getElementById('loader').style.transitionDelay = "1s";
        document.getElementById('loader').style.transitionDuration = "1s";
        document.getElementById('loader').style.opacity = "0";
    }, 100);
    setTimeout(function(){
        document.getElementById('loader').style.pointerEvents = "none";
        document.getElementsByTagName('html')[0].style.overflowY = "scroll";
    }, 1000);
});