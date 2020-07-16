//Mouse Cursor
var offset = 10;
var $win = $(window);

document.addEventListener("mousemove", e => {
    if (window.innerWidth > 1000) {
        document.getElementById('cursor').style.top = parseInt(e.pageY, 10) - $win.scrollTop() - offset + "px";
        document.getElementById('cursor').style.left = parseInt(e.pageX, 10) - offset + "px";

        document.getElementById('imgcursor').style.top = parseInt(e.pageY, 10) - $win.scrollTop() - document.getElementById('imgcursor').offsetHeight / 2 + "px";
        document.getElementById('imgcursor').style.left = parseInt(e.pageX, 10) - document.getElementById('imgcursor').offsetWidth / 2 + "px";
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
$(".projects").mouseover(function(){
    document.getElementById('imgcursor').style.transform = "scale(1)";
    document.getElementById('cursor').style.transform = "scale(0)";
});
$(".projects").mouseout(function(){
    document.getElementById('imgcursor').style.transform = "scale(0)";
    document.getElementById('cursor').style.transform = "scale(1)";
});

$(".0").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Humanities Class.jpg";
});
$(".1").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/IHSTSA.jpg";
});
$(".2").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Von Cramm.jpg";
});
$(".3").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/IHS Social Justice Week.jpg";
});
$(".4").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/3d Avatar.jpg";
});
$(".5").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Glass.jpg";
});
$(".6").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Buildings.jpg";
});
$(".7").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/John.jpg";
});
$(".8").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/joseph.jpg";
});
$(".9").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/TSA Video Game Design.png";
});
$(".10").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Agapai.jpg";
});
$(".11").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Population Project.jpg";
});
$(".12").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/TSA Promotional Design.jpg";
});
$(".13").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Portraits 1.jpg";
});
$(".14").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Principles of Criminal Evidence Cover Design.jpg";
});
$(".15").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Doomscape.jpg";
});
$(".16").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/IHSTSA 2018.jpg";
});
$(".17").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Non-Euclidean Geometry Project.jpg";
});
$(".18").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Split Head.jpg";
});
$(".19").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Levitating Man.jpg";
});
$(".20").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Weight Lifter.jpg";
});
$(".21").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Corridor.jpg";
});
$(".22").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/How a Camera Works.jpg";
});
$(".23").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Trappist-1.jpg";
});
$(".24").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/After Effects Animation Timelapse 1.jpg";
});
$(".25").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/After Effects Animation Timelapse 2.jpg";
});
$(".26").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/After Effects Animation Timelapse 3.jpg";
});
$(".27").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/Tardigrades.jpg";
});
$(".28").mouseover(function(){
    document.getElementById('projectimg').src = "img/thumbnails/DeWitt Middle School TSA.jpg";
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

function scroll() {
    var elements = document.getElementsByClassName("thumbnail");

    for(var i = 0; i < elements.length; i++)
    {
        var elementPosition = elements[i].getBoundingClientRect();
        var pos = elementPosition.y + (elements[i].offsetHeight / 2);
        var frac = 1.25 - (Math.abs(window.innerHeight / 2 - pos) / (window.innerHeight / 2));
        if (frac > -0.5) {
            if (frac < 0)
                frac = 0;
            else if (frac > 1)
                frac = 1;
            elements[i].style.filter = "brightness(" + frac + ") saturate(" + frac + ")";
        }
    }
}

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

    setTimeout(noise, 70);
}

//noise();

// var toggle = true;

// // added toggle to get 30 FPS instead of 60 FPS
// (function loop() {
//     toggle = !toggle;
//     if (toggle) {
//         requestAnimationFrame(loop);
//         return;
//     }
//     noise(ctx);
//     requestAnimationFrame(loop);
// })();