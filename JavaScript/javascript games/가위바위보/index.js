 var 이미지좌표 ='0';
var 가위바위보 = { //딕셔너리 자료구조
    바위: '0',
    가위: '142px',
    보: '-284px'
};
// var 가위바위보2 = {
//     '0': '바위',
//     '-142px': '가위',
//     '-284px': '보'
// }
function 컴퓨터의선택(이미지좌표) {
    return Object.entries(가위바위보).find(function(v) {
       // console.log(v);
        return v[1] ===이미지좌표;
    })[0];
};
var 인터벌;
function 인터벌메이커() {
    인터벌 = setInterval(()=> {
        if(이미지좌표 == 가위바위보.바위) {
            이미지좌표 = 가위바위보.가위;
        } else if (이미지좌표 === 가위바위보.가위) {
            이미지좌표 = 가위바위보.보;
        } else {
            이미지좌표 = 가위바위보.바위
        }
        document.querySelector('#computer').style.background = 
            'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) '+ 이미지좌표 + ' 0';
     }, 100);
}
 
인터벌메이커();
//  for (var i=0; i< document.querySelectorAll('.btn').length; i+=1) {
//     document.querySelectorAll(".btn")[i].addEventListener('click', function() {
//         console.log('클릭했습니당')
//     });
//  }
var 점수표 = {
    가위: 1,
    바위: 0,
    보 : -1
};
document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click',function() {
        clearInterval(인터벌);
        setTimeout(function(){
            인터벌메이커();
        },1000);
        var 나의선택 = this.textContent
       // console.log(나의선택, 컴퓨터의선택(이미지좌표));
        // if(나의선택 ==='가위') {
        //     if(컴퓨터의선택(이미지좌표)=== '가위') {
        //         console.log('비겼습니다.');
        //     }
        //     else if(컴퓨터의선택(이미지좌표)==='바위') {
        //         console.log('졌습니다.');
        //     }
        //     else{
        //         console.log('이겼습니다.!')
        //     }
        // }else if(나의선택 ==="바위") {
        //     if(컴퓨터의선택(이미지좌표)=== '바위') {
        //         console.log('비겼습니다.');
        //     }
        //     else if(컴퓨터의선택(이미지좌표)==='가위') {
        //         console.log('졌습니다.');
        //     }
        //     else{
        //         console.log('이겼습니다.!')
        //     }
        // }else if(나의선택 ==="보") {
        //     if(컴퓨터의선택(이미지좌표)=== '보') {
        //         console.log('비겼습니다.');
        //     }
        //     else if(컴퓨터의선택(이미지좌표)==='바위') {
        //         console.log('졌습니다.');
        //     }
        //     else{
        //         console.log('이겼습니다.!')
        //     }
        // }
        if(점수표[나의선택] - 점수표[컴퓨터의선택(이미지좌표)] ===0) {
            console.log('비겼습니다.');
        }else if([-1,2].includes(점수표[나의선택] - 점수표[컴퓨터의선택(이미지좌표)])) {
            console.log('이겼습니다.');
        }else {
            console.log('졌습니다.');
        }
    });
});
