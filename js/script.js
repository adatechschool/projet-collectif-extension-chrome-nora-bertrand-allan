const toDayMoon = Math.round(Date.now() / 1000);
const toDaySun = new Date();
const year = toDaySun.getUTCFullYear();
const month = toDaySun.getUTCMonth() + 1;
const day = toDaySun.getUTCDate();
const fullDateForSun = year + "-" + month + "-" + day;
const balisePhase = document.getElementById("phase");
const baliseSunset = document.getElementById("sunset");
const baliseSunrise = document.getElementById("sunrise");
//console.log(toDaySun);

//SUN API

// (async () => {
//     const response = await chrome.runtime.sendMessage({type: "array", coordArr});
//     baliseSunrise.innerHTML = response[0];
//     baliseSunset.innerHTML = response[1];
// });

    async function getSun(coordArr) {
        const reponse =  await fetch("https://api.sunrise-sunset.org/json?lat="+coordArr[0]+"&lng="+coordArr[1]+"&date="+fullDateForSun+"&tzid=Europe/Paris&formatted=0");
        const resultSun = await reponse.json();
        const sunset = resultSun.results.sunset;
        const sunrise = resultSun.results.sunrise;
        if (sunset != null || sunrise != null) {
            baliseSunrise.innerHTML = resultSun.results.sunrise.slice(11,16);
            baliseSunset.innerHTML = resultSun.results.sunset.slice(11,16);
        } else {
            baliseSunrise.innerHTML = "N/A";
            baliseSunset.innerHTML = "N/A";
        };
    }

    //MOON API

    async function getMoonPhase(){
        const reponse =  await fetch("http://api.farmsense.net/v1/moonphases/?d="+toDayMoon);
        const resultMoon = await reponse.json();
        return resultMoon;
    };
    
    getMoonPhase().then(result => {
        const moonPhase = result[0].Phase;
        balisePhase.innerHTML = moonPhase;
        getImgMoon(moonPhase);
});


// COORDONNEES NAVIGATEUR
function gps(){
    navigator.geolocation.getCurrentPosition(stockPosition);
}

function stockPosition(position){
    const coordArr = [position.coords.latitude, position.coords.longitude];
    getSun(coordArr)
};
gps();

//MOON API
getMoonPhase().then(result => {
    const moonPhase = result[0].Phase;
    balisePhase.innerHTML = moonPhase;
});

async function getMoonPhase() {
    const reponse = await fetch("http://api.farmsense.net/v1/moonphases/?d=" + toDayMoon);
    const result = await reponse.json();
    return result;
}

async function getSun(coordArr) {
    const reponse = await fetch("https://api.sunrise-sunset.org/json?lat=" + coordArr[0] + "&lng=" + coordArr[1] + "&tzid=Europe/Paris&formatted=0");
    const resultSun = await reponse.json();
    const sunset = resultSun.results.sunset.slice(11, 19);
    const sunrise = resultSun.results.sunrise.slice(11, 19);
    baliseSunrise.innerHTML = sunrise;
    baliseSunset.innerHTML = sunset;
}
