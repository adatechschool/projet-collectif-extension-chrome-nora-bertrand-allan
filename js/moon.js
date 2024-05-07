//image de la lune
const mooon = {
    'New Moon' : 'new_moon.svg',
    'Waxing Crescent' : 'waxing_crescent.svg',
    'First Quarter' : 'first_quarter.svg',
    'Waxing Gibbous' : 'waxing_gibbous.svg',
    'Full Moon' : 'full_moon.svg',
    'Waning Gibbous' : 'waning_gibbous.svg',
    'Last Quarter' : 'last_quarter.svg',
    'Waning Crescent' : 'waning_crescent.svg',
    'Dark Moon' : 'waning_crescent.svg'
};
function getImgMoon(moonPhase) {
    const divMoon = document.createElement("div");
    const imgMoon = document.createElement("img");
    if (moonPhase in mooon) {
        imgMoon.src = "../img/" + mooon[moonPhase];
    } else { 
        imgMoon.src = "../img/new_moon.svg";
    }
    divMoon.appendChild(imgMoon);
    document.getElementById("phase").appendChild(divMoon);
};