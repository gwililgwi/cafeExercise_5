var tx=document.getElementById('tx1');
var a = "ItsString";
var b = 1010235;
var c = true;
var d;
var e = function(){};
var f = {};

function blank(){
    tx.value = '';
}

function what(){
    if(event.keyCode == 65){
        console.log(typeof a);
    }
    if(event.keyCode == 66){
        console.log(typeof b);
    }
    if(event.keyCode == 67){
        console.log(typeof c);
    }
    if(event.keyCode == 68){
        console.log(typeof d);
    }
    if(event.keyCode == 69){
        console.log(typeof e);
    }
    if(event.keyCode == 70){
        console.log(typeof f);
    }
    blank();
}