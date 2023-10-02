

var blackTheme="image/watch2.png";
var peachTheme='image/watch1.png';
var blueTheme='image/watch3.png';
var purpleTheme='image/watch5.png';

var watch =document.getElementById('watchimage');

var black=document.getElementById('black');
var peach=document.getElementById('peach');
var blue=document.getElementById('blue');
var purple=document.getElementById('purple');

if(watch!=null){
    black.onclick=function(){
        console.log("this is black")
        watch.src=blackTheme;
    }
}
if(watch!=null){
    peach.onclick=function(){
        watch.src=peachTheme;
    }
}
if(watch!=null){
    blue.onclick=function(){
        watch.src=blueTheme;
    }
}
if(watch!=null){
    purple.onclick=function(){
        watch.src=purpleTheme;
    }
}

function time(){
    var today=new Date();
    document.getElementById('currenttime').innerHTML=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    setTimeout(function(){time()},1000)
}
time();

//heartbeat details

var heartBeatBtn=document.getElementById('showheartbeat');
var heartBeatRate=document.getElementById('heartrate');


//current time details
var showTimeBtn=document.getElementById('showtime');
var showCurrentTime=document.getElementById("currenttime");

heartBeatBtn.onclick=function(){
    heartBeatRate.style.display='block';
    console.log(heartBeatRate.style.display='block')
    showCurrentTime.style.display="none";

}

showTimeBtn.onclick=function(){
    heartBeatRate.style.display="none";
    showCurrentTime.style.display="block";
}


// random heart beat rate

var randomNum=document.getElementById('hbnumber');


function randomNumber(){
    randomNum.innerHTML=Math.floor(Math.random()*51)+80;
    console.log(randomNum.innerHTML)
}

randomNumber();