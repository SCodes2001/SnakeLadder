
let chooseColour:any=document.getElementById("flex");
(function init(){
    chooseColour.style.visibility = "hidden";   
})();
let arr:number[]=[];
let noOfPlayer:number=0;
let red:any=document.getElementById("red");
let blue:any=document.getElementById("blue");
let green:any=document.getElementById("green");
let yellow:any=document.getElementById("yellow");
let selectPlayer:any=document.getElementById("selectPlayer");
let one:any=document.getElementById("oneplay");
let two:any=document.getElementById("twoplay");
let three:any=document.getElementById("threeplay");
let four:any=document.getElementById("fourplay");
one.addEventListener('click',onePlayer);
two.addEventListener('click',twoPlayer);
three.addEventListener('click',threePlayer);
four.addEventListener('click',fourPlayer);
function onePlayer():void{
    noOfPlayer=1;
    selectPlayer.style.display="none";
    chooseColour.style.visibility = "visible";
    red.addEventListener('click',function run(){
        arr.push(1);
        console.log("when");
        selectPlayer.style.display="none"
    })
}
function twoPlayer():void{
    noOfPlayer=2;
    selectPlayer.style.display="none";
    chooseColour.style.visibility = "visible";
    choicePlayer1();
   
}
function threePlayer():void{
    noOfPlayer=3;
    selectPlayer.style.display="none";
    chooseColour.style.visibility = "visible";
    choicePlayer1();
   
}
function fourPlayer():void{
    noOfPlayer=4;
    selectPlayer.style.display="none";
    chooseColour.style.visibility = "visible";
    choicePlayer1();
    
}
function choicePlayer1(){
    let count:number=0;
    console.log("when");
    red.addEventListener('click',function run(){
        arr.push(1);
        console.log("when");
        selectPlayer.style.display="none"
    })
    blue.addEventListener('click',function run(){
        count++;
        arr.push(2);
        if(count==1)selectPlayer.style.display="none"
    })
    yellow.addEventListener('click',function run(){
        count++;
        arr.push(1);
        if(count==1)selectPlayer.style.display="none"
    })
    green.addEventListener('click',function run(){
        count++;
        arr.push(4);
        if(count==1)selectPlayer.style.display="none"
    })
};

