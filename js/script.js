//Mouse Cursor
var offset = 10;
var $win = $(window);

document.addEventListener("mousemove", e => {
    if (window.innerWidth > 1000) {
        document.getElementById('cursor').style.top = parseInt(e.pageY, 10) - $win.scrollTop() - offset + "px";
        document.getElementById('cursor').style.left = parseInt(e.pageX, 10) - offset + "px";
    }
})

$("a").mouseover(function(){
    document.getElementById('cursor').style.transform = "scale(5)";
});
$("a").mouseout(function(){
    document.getElementById('cursor').style.transform = "scale(1)";
});
$("button").mouseover(function(){
    document.getElementById('cursor').style.transform = "scale(5)";
});
$("button").mouseout(function(){
    document.getElementById('cursor').style.transform = "scale(1)";
});

//Filter Buttons
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

//Flower Rotation
function scroll() {
    var flowers = document.getElementsByClassName("flower");
    for (var i = 0; i < 2; i++) {
        flowers[i].style.transform = "rotate(" + flowers[i].getBoundingClientRect().top / -15 + "deg)";
    }
}

//Scroll Down Link
function about() {
    var elmnt = document.getElementById("anchor");
    elmnt.scrollIntoView();
}

//Noise Canvas
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

function noise() {
    
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        idata = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(idata.data.buffer),
        len = buffer32.length,
        i = 0;

    for(; i < len;)
        buffer32[i++] = ((255 * Math.random())|0) << 24;
    
    ctx.putImageData(idata, 0, 0);

    setTimeout(noise, 50);
}
noise();