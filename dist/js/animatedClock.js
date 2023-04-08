const clock = document.querySelector(".clock__currentTime");
const hrHand = document.getElementById("hr-hand");
const minHand = document.getElementById("min-hand");
const secHand = document.querySelector("#sec-hand");
const hr = document.querySelector("#hr");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const isAmHandle = document.querySelector("#isAM");
const blink2 = document.querySelector("#blink-2");


setInterval(() => {
    var myDate = new Date();

    const isAm = myDate.getHours() > 12 ? "PM" : "AM";
    
    var hours = myDate.getHours() > 0 ? myDate.getHours() > 12 ? (myDate.getHours() -12).toString() : myDate.getHours().toString() : (12).toString() ;
    var mins = myDate.getMinutes().toString();
    var secs = myDate.getSeconds().toString();
    
    // Angles for moving clock hand
    let  secAngle = (myDate.getSeconds() * 6) + 180;
    secHand.style.transform = `translateY(-1px) translateX(-3px) rotate(${secAngle}deg)`;

    let minAngle = (myDate.getMinutes() * 6) + 180;
    minHand.style.transform = `translateY(-1px) translateX(-3px) rotate(${minAngle}deg)`;

    let hrAngle = (myDate.getHours() * 30) + 190;
    hrHand.style.transform = `translateY(-1px) translateX(-3px) rotate(${hrAngle}deg)`;



    // clock.innerText = `${hours.padStart(2,'0')} : ${mins.padStart(2,'0')} : ${secs.padStart(2,'0')}  ${isAm}`;

    hr.innerText = `${hours.padStart(2,'0')}`;
    min.innerText = `${mins.padStart(2,'0')}`;
    sec.innerText = `${secs.padStart(2,'0')}`;
    isAmHandle.innerText = `${isAm}`;

}, 200);
