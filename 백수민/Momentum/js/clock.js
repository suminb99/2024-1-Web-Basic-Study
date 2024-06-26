const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date(); // date 객체 생성
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock(); // 바로 실행시키기
setInterval(getClock, 1000);