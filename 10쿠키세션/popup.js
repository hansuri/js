//팝업 쿠키생성 함수(쿠키이름을 받는다)
function createCookie(name) {
    var date = new Date();
    date.setDate( date.getDate() +1 ); //1일

    var cookie = "";
    cookie += name + "=true;";
    cookie += "expires=" + date.toUTCString() + ";";

    document.cookie = cookie;
}

//쿠키확인함수
function getCookie(name) {

    var cookies = document.cookie.split("; ");
    for(var i = 0; i < cookies.length; i++) {

        if(cookies[i].indexOf(name) != -1 ) { //name쿠키가 포함되어 있다
            return true; //존재여부를 true반환
        }
    }
}