//사이드js
//선택지 2개 - window.onload or 링크를 가장 하단에 위치


window.onload = function() {

    var menuBtn = document.querySelector(".menuBtn");
    menuBtn.addEventListener("click", onSidenav);

}

function onSidenav() {

    var side = document.querySelector(".side");
    
    if(side.style.width == '200px' || side.style.width == '') {
        side.style.width = '0px';
    } else {
        side.style.width = '200px'
    }
}