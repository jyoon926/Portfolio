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
    if (window.innerWidth > 850) {
        document.getElementById('cursor').style.top = e.clientY - offset + "px";
        document.getElementById('cursor').style.left = e.clientX - offset + "px";
        // document.getElementById('cursorF').style.top = e.pageY - offsetF + "px";
        // document.getElementById('cursorF').style.left = e.pageX - offsetF + "px";
    }
});
$('a').mouseenter(
    function() {
        document.getElementById('cursor').style.transform = "scale(7)";
    }
);
$('a').mouseout(
    function() {
        document.getElementById('cursor').style.transform = "scale(1)";
    }
);
$('label').mouseenter(
    function() {
        document.getElementById('cursor').style.transform = "scale(7)";
    }
);
$('label').mouseout(
    function() {
        document.getElementById('cursor').style.transform = "scale(1)";
    }
);
$('#about').mouseenter(
    function() {
        document.getElementById('cursort').style.opacity = "1";
        document.getElementById('cursort').innerHTML = "About";
    }
);
$('#about').mouseout(
    function() {
        document.getElementById('cursort').style.opacity = "0";
    }
);
$('.view').mouseenter(
    function() {
        document.getElementById('cursort').style.opacity = "1";
        document.getElementById('cursort').innerHTML = "View";
    }
);
$('.view').mouseout(
    function() {
        document.getElementById('cursort').style.opacity = "0";
    }
);
function hoverIn(i) {
    if (i == "left" && index > 1)
        document.getElementById('cursor').style.transform = "scale(7)";
    else if (i == "right" && index < 4)
        document.getElementById('cursor').style.transform = "scale(7)";
    else
        document.getElementById('cursor').style.transform = "scale(1)";
}
function hoverOut() {
    document.getElementById('cursor').style.transform = "scale(1)";
}

//Home slideshow
var index = 1;
function next() {
    if (index == 1) {
        $('.leftarrow').css("opacity", "1");
    }
    else if (index == 3) {
        $('.rightarrow').css("opacity", "0.3");
    }
    if (index < 4)
        index++;
    document.getElementById("showcase").style.transform = "translateX(-" + 100 * (index - 1) + "vw)";
}
function previous() {
    if (index == 4) {
        $('.rightarrow').css("opacity", "1");
    }
    else if (index == 2) {
        $('.leftarrow').css("opacity", "0.3");
    }
    if (index > 1)
        index--;
    document.getElementById("showcase").style.transform = "translateX(-" + 100 * (index - 1) + "vw)";
}

/**
//Swipe

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
        } else {
        }                       
    } else {
        if (!animating) {
            var temp = index;
            if ( yDiff > 0 ) {
                if (index < count - 1) {
                    set(index + 1);
                    animating = true;
                    setTimeout(function(){
                        animating = false;
                    }, 800);
                }
            } else { 
                if (index > 0) {
                    set(index - 1);
                    animating = true;
                    setTimeout(function(){
                        animating = false;
                    }, 800);
                }
            }    
            document.getElementById("scrollbar").style.height = (index * (100 / (count - 1))) + "vh";
            console.log(index);
        }
        else {
            return;
        }                                                             
    }
    xDown = null;
    yDown = null;                                             
};

*/
/**
var index = 0;
var count;
var delay = 500;
var animating = false;

function start(num) {
    count = num;
    setGradients();
}

for (var i = 0; i < count; i++) {
    if (i == 0) {
        document.getElementById("section" + i).style.top ="0";
    }
    else {
        document.getElementById("section" + i).style.top ="100vh";
        document.getElementById("divider" + i).style.top ="100vh";
    }
}

var slides = document.getElementsByClassName("right");
var right = "linear-gradient(to right, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.5))";
var bottom = "linear-gradient(rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.5))";
function setGradients() {
    if (window.innerWidth > 700) {
        for (var i = 1; i < slides.length; i++) {
            var item = slides.item(i);
            var image = String(getComputedStyle(item).backgroundImage);
            if (item.offsetWidth / item.offsetHeight > 16 / 9) {
                item.style.backgroundImage = bottom + ", " + image;
            }
            else {
                item.style.backgroundImage = right + ", " + image;
            }
            item.style.backgroundSize = "cover";
        }
    }
    else {
        for (var i = 1; i < slides.length; i++) {
            var item = slides.item(i);
            item.style.height = (window.innerWidth - 60) * (9 / 16) + "px";
        }
    }
}
function resize() {
    if (window.innerWidth > 700) {
        for (var i = 1; i < slides.length; i++) {
            var item = slides.item(i);
            var image = String(getComputedStyle(item).backgroundImage);
            if (item.offsetWidth / item.offsetHeight > 16 / 9) {
                if (String(getComputedStyle(item).backgroundImage).charAt(16) == "t") {
                    item.style.backgroundImage = bottom + ", " + image.substring(69);
                }
            }
            else {
                if (String(getComputedStyle(item).backgroundImage).charAt(16) == "r") {
                    item.style.backgroundImage = right + ", " + image.substring(59);
                }
            }
            item.style.backgroundSize = "cover";
        }
    }
    else {
        for (var i = 0; i < slides.length; i++) {
            var item = slides.item(i);
            item.style.height = (window.innerWidth - 60) * (9 / 16) + "px";
        }
    }
    var rotate = document.getElementById("rotate");
    if (rotate.offsetWidth < 1000 && rotate.offsetHeight < 450) {
        rotate.style.opacity = "1";
        rotate.style.pointerEvents = "auto";
    }
    else {
        rotate.style.opacity = "0";
        rotate.style.pointerEvents = "none";
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
                if (i != count - 1)
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
            return;
        }
        else {
            return;
        }
    });
});
*/