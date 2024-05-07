//image de la lune
/*  const mooon = {
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
}; */



/* 
window.addEventListener('load', getImgMoon) */
/* 
window.addEventListener('load', () => getImgMoon("New Moon")); */



/* 
window.addEventListener('load', () => {
    // Here you can set the moon phase based on your logic.
    const moonPhase = "New Moon"; // Change this to the actual moon phase
    getImgMoon(moonPhase);
});  */

 

const moonPhases = [
    "new_moon.svg",
    "waxing_crescent.svg",
    "first_quarter.svg",
    "waxing_gibbous.svg",
    "full_moon.svg",
    "waning_gibbous.svg",
    "last_quarter.svg",
    "waning_crescent.svg"
];

let currentPhaseIndex = 0
const moonImage = document.getElementById("moon-image")

function changeMoonPhase() {
    moonImage.src = "../img/" + moonPhases[currentPhaseIndex]
    currentPhaseIndex = (currentPhaseIndex + 1) % moonPhases.length
}


setInterval(changeMoonPhase, 1000)