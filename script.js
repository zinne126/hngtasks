let today = new Date();
let dayName = document.querySelector("[data-testid=currentDayOfTheWeek]");
let timeUtc = document.querySelector("[data-testid=currentUTCTime]");

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

days.forEach((day, index) => {
    if (index == today.getDay()) {
        dayName.textContent = day;
    }
});

timeUtc.textContent += today.getTime();