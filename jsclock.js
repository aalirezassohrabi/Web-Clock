var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var kisstime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function () {
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function () {
    var time = new Date().getHours();
    var messageText;
    var image = "https://i0.wp.com/spaceinyourcase.com/wp-content/uploads/2014/12/Afternoon-tea-for-families-at-Ox-Pasture-Hall-Hotel.jpg?ssl=1";

    var timeEventJS = document.getElementById("timeEvent");
    var lolcatImageJS = document.getElementById('lolcatImage');

    if (time == kisstime) {
        image = "https://res.cloudinary.com/grohealth/image/upload/f_auto,fl_lossy,q_auto/v1583769398/DCUK/Content/affection-baby-baby-girl-377058.jpg";
        messageText = "Kiss Time!";
    }
    else if (time == wakeuptime) {
        image = "https://st3.depositphotos.com/14803258/18215/i/1600/depositphotos_182154730-stock-photo-gesturing.jpg";
        messageText = "Wake up!";
    }
    else if (time == lunchtime) {
        image = "https://static9.depositphotos.com/1037987/1187/i/950/depositphotos_11879340-stock-photo-happy-family-having-roast-chicken.jpg";
        messageText = "Let's have some lunch!";
    }
    else if (time == naptime) {
        image = "https://static8.depositphotos.com/1518767/1029/i/950/depositphotos_10293374-stock-photo-loving-family-sleeping-together.jpg";
        messageText = "Sleep tight!";
    }
    else if (time < noon) {
        image = "https://static5.depositphotos.com/1003434/471/i/950/depositphotos_4716847-stock-photo-good-morning.jpg";
        messageText = "Good morning!";
    }
    else if (time >= evening) {
        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good evening!";
    }
    else {
        image = "https://i0.wp.com/spaceinyourcase.com/wp-content/uploads/2014/12/Afternoon-tea-for-families-at-Ox-Pasture-Hall-Hotel.jpg?ssl=1";
        messageText = "Good afternoon!";
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    lolcatImage.src = image;

    showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);


// Getting the Party Time Button To Work
var kissButton = document.getElementById("kissTimeButton");

var partyEvent = function () {
    if (kisstime < 0) {
        kisstime = new Date().getHours();
        kissTimeButton.innerText = "Kiss Over!";
        kissTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else {
        kisstime = -1;
        kissTimeButton.innerText = "Kiss Time!";
        kissTimeButton.style.backgroundColor = "#222";
    }
};

kissButton.addEventListener("click", partyEvent);
partyEvent();


// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function () {
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function () {
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function () {
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);