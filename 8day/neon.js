const b1 = document.getElementById("b1")

const sAll = document.getElementsByTagName('span')

// function dis(){
//     sAll[0].style.display = 'block';
// }

// b1.addEventListener('click',function(){
//     sAll[1].style.display = 'block';
// })

// b1.addEventListener('click',function(){
//     for(var i =0; i < sAll.length; i++){
//         sAll[i].style.display = 'inline';
//     }
// })

// b1.addEventListener('click',function(){
//     for(var i=0; i<dic.length; i++){
//         document.getElementById('box').innerHTML = dic[i];
//     }
// })

// const box = document.getElementById('box');
// const DD = "둘째엉덩이맛";
// const len = DD.length;
// var index = 0;

// function print(){
//     if(index < DD.length){
//         box.innerHTML += DD[index++];
//     }
//     else{
//         index = 0;
//         box.innerHTML = "";
//     }
// }

function clearA(a){
    sAll[a].style.display = 'none';
}

let count = 0;
function print(){
    if(count<sAll.length){
        sAll[count].style.display = "inline";
        count++
    } else{
        count = 0;
        for(var b=0; b<6; b++){
            clearA(b)
        }
    }
}