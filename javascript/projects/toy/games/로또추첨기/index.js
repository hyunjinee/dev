// var 후보군 = Array(45);
// //empty 상태

// console.log(후보군);

// //empty 의 특징 반복문 불가.
// var 필 = 후보군.fill();
// // //fill 하면 undefined 로 채워짐.

// // 필.forEach(function(요소, 인덱스) {
// //     //console.log(요소, 인덱스+1);
// //     필[인덱스] = 인덱스+1;
// // });
// // console.log(필);
// //1대1로 mapping 

// var 맵 = 필.map(function(요소,인덱스) {
//     return 인덱스+1;
// });
// console.log(맵);

//위 내용을 취합하면
var 후보군 = Array(45)
        .fill().map(function(요소,인덱스) {
            return 인덱스 +1;
        });


var 셔플 = [];


while(후보군.length >0) {
    var 이동값 = 후보군.splice(Math.floor(Math.random()*후보군.length),1)[0];
    셔플.push(이동값);
}
var 보너스 = 셔플[셔플.length-1]
var 당첨숫자들 = 셔플.slice(0, 6).sort(function(p,c){return p-c});
//6개의 숫자 뽑고
//console.log('당첨숫자들', 당첨숫자들.sort(function(p,c){return p-c;}));
var 결과창 = document.getElementById('결과창');

// function 공색칠하기() {
    
// }

setTimeout(function 비동기콜백함수() {
    var 공  = document.createElement('div');
    공.textContent = 당첨숫자들[0];
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px';
    공.style.width = '20px';
    공.style.height = '20px';
    공.style.textAlign = 'center';
    공.style.marginRight = '10px';
    var 배경색;
    if(당첨숫자들[0] <=10) {
        배경색 = 'red';
    } else if(당첨숫자들[0] <=20){
        배경색 = 'orange'
    } else if(당첨숫자들[0] <=30) {
        배경색 = 'yellow'
    } else if(당첨숫자들[0] <=40) {
        배경색 = 'blue'
    }  else {
        배경색 = 'green'
    }
    공.style.background = 배경색;
    결과창.appendChild(공);
},1000);
setTimeout(function 비동기콜백함수() {
    var 공  = document.createElement('div');
    공.textContent = 당첨숫자들[1];
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px';
    공.style.width = '20px';
    공.style.height = '20px';
    공.style.textAlign = 'center';
    공.style.marginRight = '10px';
    var 배경색;
    if(당첨숫자들[1] <=10) {
        배경색 = 'red';
    } else if(당첨숫자들[1] <=20){
        배경색 = 'orange'
    } else if(당첨숫자들[1] <=30) {
        배경색 = 'yellow'
    } else if(당첨숫자들[1] <=40) {
        배경색 = 'blue'
    }  else {
        배경색 = 'green'
    }
    공.style.background = 배경색;
    결과창.appendChild(공);
},2000);
setTimeout(function 비동기콜백함수() {
    var 공  = document.createElement('div');
    공.textContent = 당첨숫자들[2];
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px';
    공.style.width = '20px';
    공.style.height = '20px';
    공.style.textAlign = 'center';
    공.style.marginRight = '10px';
    var 배경색;
    if(당첨숫자들[2] <=10) {
        배경색 = 'red';
    } else if(당첨숫자들[2] <=20){
        배경색 = 'orange'
    } else if(당첨숫자들[2] <=30) {
        배경색 = 'yellow'
    } else if(당첨숫자들[2] <=40) {
        배경색 = 'blue'
    }  else {
        배경색 = 'green'
    }
    공.style.background = 배경색;
    결과창.appendChild(공);
},3000);
setTimeout(function 비동기콜백함수() {
    var 공  = document.createElement('div');
    공.textContent = 당첨숫자들[3];
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px';
    공.style.width = '20px';
    공.style.height = '20px';
    공.style.textAlign = 'center';
    공.style.marginRight = '10px';
    var 배경색;
    if(당첨숫자들[3] <=10) {
        배경색 = 'red';
    } else if(당첨숫자들[3] <=20){
        배경색 = 'orange'
    } else if(당첨숫자들[3] <=30) {
        배경색 = 'yellow'
    } else if(당첨숫자들[3] <=40) {
        배경색 = 'blue'
    }  else {
        배경색 = 'green'
    }
    공.style.background = 배경색;
    결과창.appendChild(공);
},4000);
setTimeout(function 비동기콜백함수() {
    var 공  = document.createElement('div');
    공.textContent = 당첨숫자들[4];
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px';
    공.style.width = '20px';
    공.style.height = '20px';
    공.style.textAlign = 'center';
    공.style.marginRight = '10px';
    var 배경색;
    if(당첨숫자들[4] <=10) {
        배경색 = 'red';
    } else if(당첨숫자들[4] <=20){
        배경색 = 'orange'
    } else if(당첨숫자들[4] <=30) {
        배경색 = 'yellow'
    } else if(당첨숫자들[4] <=40) {
        배경색 = 'blue'
    }  else {
        배경색 = 'green'
    }
    공.style.background = 배경색;
    결과창.appendChild(공);
},5000);
setTimeout(function 비동기콜백함수() {
    var 공  = document.createElement('div');
    공.textContent = 당첨숫자들[5];
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px';
    공.style.width = '20px';
    공.style.height = '20px';
    공.style.textAlign = 'center';
    공.style.marginRight = '10px';
    var 배경색;
    if(당첨숫자들[5] <=10) {
        배경색 = 'red';
    } else if(당첨숫자들[5] <=20){
        배경색 = 'orange'
    } else if(당첨숫자들[5] <=30) {
        배경색 = 'yellow'
    } else if(당첨숫자들[5] <=40) {
        배경색 = 'blue'
    }  else {
        배경색 = 'green'
    }
    공.style.background = 배경색;
    결과창.appendChild(공);
},6000);

//반복문안에 비동기 사용시 closure 문제발생!!!!!!!!!!!!!!!!!!!
setTimeout(function 비동기콜백함수() {
    var 보너스글자 = document.createElement('div');
    보너스글자.textContent = "보너스";
    var 공 = document.createElement('div');
    공.style.display = 'inline=block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px';
    공.style.width = '20px';
    공.style.height = '20px';
    공.style.textAlign = 'center';
    공.textContent = 보너스;
    var 배경색;
    if(보너스 <=10) {
        배경색 = 'red';
    } else if(보너스 <=20){
        배경색 = 'orange'
    } else if(보너스 <=30) {
        배경색 = 'yellow'
    } else if(보너스 <=40) {
        배경색 = 'blue'
    }  else {
        배경색 = 'green'
    }
    공.style.background = 배경색;
    결과창.appendChild(보너스글자);
    결과창.appendChild(공);
},7000);