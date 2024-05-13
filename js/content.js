//COORDONNEES NAVIGATEUR
function gps() {
    navigator.geolocation.getCurrentPosition(stockPosition);
}

function stockPosition(position) {
    const coordArr = [position.coords.latitude, position.coords.longitude];
    getSun(coordArr); // Appel de getSun une fois que les coordonnées sont disponibles
};

function refreshTime() {
    const dateString = new Date().toLocaleString("fr-FR", {timeZone: tzid2});
    const getDay = new Date().getDay();
    const myDay = dateString.slice(0,2);
    const formattedString = dateString.replace(", ", " - ");
    const formattedTime = formattedString.slice(10, 19);
    const formattedDate = switchDay[getDay]+" "+myDay+" "+switchMonth[month]+" "+year;
    timeDisplay.innerHTML = formattedTime;
    dateDisplay.innerHTML = formattedDate;
    ZoneUTC.innerHTML = tzid2;
    console.log(dateString);
};

gps();
setInterval(refreshTime, 1000);

//POSITION SPE SUN & BG
let currentHour = 4
function sunAndMoonPosition() {
    let positionY;
    if (currentHour > 6 && currentHour < 10) {
        positionY = '50%';
        moonElement.remove();
    } else if (currentHour >= 11 && currentHour < 16) {
        positionY = '20%';
        moonElement.remove();
    } else if (currentHour >= 17 && currentHour < 21) {
        positionY = '40%';
        moonElement.remove();
    } else if (currentHour >= 21 && currentHour < 25) {
        positionY = '30%';
        sunElement.remove();
    } else if (currentHour >= 0 && currentHour < 6) {
        positionY = '20%';
        sunElement.remove();
    }
    sunElement.style.top = positionY;
};

function changeBackground() {
    let positionY;
    if (currentHour > 6 && currentHour < 10) {
        positionY = '50%';
        moonElement.remove();
    } else if (currentHour >= 11 && currentHour < 16) {
        positionY = '20%';
        moonElement.remove();
    } else if (currentHour >= 17 && currentHour < 21) {
        positionY = '40%';
        moonElement.remove();
    } else if (currentHour >= 21 && currentHour < 25) {
        positionY = '30%';
        sunElement.remove();
    } else if (currentHour >= 0 && currentHour < 6) {
        positionY = '20%';
        sunElement.remove();
    }
    sunElement.style.top = positionY;
};

// sunAndMoonPosition();
// changeBackground();