var index = 0;
var count = 8;
var delay = 500;
var animating = false;

for (var i = 0; i < count; i++) {
    if (i == 0) {
        document.getElementById("section" + i).style.top ="0";
    }
    else {
        document.getElementById("section" + i).style.top ="100vh";
        document.getElementById("divider" + i).style.top ="100vh";
    }
}

function set(num) {
    document.getElementById("checkbox").checked = false;
    if (num > index) {
        for (var i = 0; i < count; i++) {
            if (i <= num) {
                if (i != 0) {
                    document.getElementById("divider" + i).style.top ="0";
                }
            }
            else {
                document.getElementById("divider" + i).style.top ="100vh";
                document.getElementById("section" + i).style.top ="100vh";
            }
        }
        setTimeout(function(){
            document.getElementById("section" + num).style.top ="0";
        }, delay);
    }
    else if (num < index) {
        for (var i = 0; i < count; i++) {
            if (i > num) {
                document.getElementById("section" + i).style.top ="100vh";
                if (i != 7)
                    document.getElementById("divider" + (i + 1)).style.top ="100vh";
            }
            else {
                document.getElementById("section" + i).style.top ="0";
            }
        }
        setTimeout(function(){
            document.getElementById("divider" + (num + 1)).style.top ="100vh";
        }, delay);
    }
    index = num;
}

$(function() {
    $("#container").on("wheel ", function(e) {
        if (!animating) {
            var temp = index;
            //back
            if (e.originalEvent.deltaY < 0) {
                if (index > 0) {
                    set(index - 1);
                    animating = true;
                    setTimeout(function(){
                        animating = false;
                    }, 800);
                }
            }
            //next
            else {
                if (index < count - 1) {
                    set(index + 1);
                    animating = true;
                    setTimeout(function(){
                        animating = false;
                    }, 800);
                }
            }
            document.getElementById("scrollbar").style.height = (index * (100 / (count - 1))) + "vh";
            console.log(index);
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

//Cursor
var offset = 9;
var offsetF = 40;
var $win = $(window);

document.addEventListener("mousemove", e => {
    if (window.innerWidth > 1000) {
        document.getElementById('cursor').style.top = e.pageY - offset + "px";
        document.getElementById('cursor').style.left = e.pageX - offset + "px";
        document.getElementById('cursorF').style.top = e.pageY - offsetF + "px";
        document.getElementById('cursorF').style.left = e.pageX - offsetF + "px";
    }
})