let countDown = document.getElementById("countDown");
let start = document.querySelector(".start_btn");
let reset = document.querySelector(".reset_btn");
let stop = document.querySelector(".stop_btn");
let time = document.querySelector(".time_btn");
let clear = document.querySelector(".clear_btn");

let seconds = 0;
let intervalId;

const getstoptime = () => {
    let p = document.createElement("p");
    p.innerText = `The stopped time is ${seconds}`;
    timenote.appendChild(p);
};

const startclock = () => {
    countDown.innerText = seconds;
    intervalId = setInterval(() => {
        seconds++;
        countDown.innerText = seconds;
    }, 1000);
};

const stopclock = () => {
    clearInterval(intervalId);
    intervalId = null;
    getstoptime();
};

const resetclock = () => {
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    countDown.innerText = 0;
};

const gettime = () => {
    let p = document.createElement("p");
    p.innerText = `The time is ${seconds}`;
    timenote.appendChild(p);
};

const clearclock = () => {
    timenote.innerText = "";
};






start.addEventListener("click", startclock);
stop.addEventListener("click", stopclock);
reset.addEventListener("click", resetclock);
time.addEventListener("click", gettime);
clear.addEventListener("click", clearclock);
