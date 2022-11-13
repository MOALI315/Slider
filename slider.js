var slide = document.getElementsByClassName('slide');
var dot = document.getElementsByClassName('dot');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var n = 0;
var i ;
function disnone(){
    for(i=0 ; i<slide.length ; i++){
        slide[i].style.display="none";
    }
}

function noactive(){
    for(i=0;i<dot.length;i++){
        dot[i].classList.remove("active");
    }
}

next.addEventListener("click" , nextfunc);
function nextfunc(e){
    e.preventDefault();
    n++;
    // slide[n-1].style.display = "none";
     if(n>slide.length-1){
        n=0;
    }

    disnone();
    noactive();
    slide[n].style.display = "block";
    dot[n].classList.add('active');

}

prev.addEventListener("click" , function(e){
    e.preventDefault();
    n--
    if(n<0){
     n=2;

    }
    noactive();
    disnone();
    slide[n].style.display="block";
    dot[n].classList.add('active');
})

setInterval(function(){
    n++;
    // slide[n-1].style.display = "none";
     if(n>slide.length-1){
        n=0;
    }

    disnone();
    noactive();
    slide[n].style.display = "block";
    dot[n].classList.add('active');
},3000);

