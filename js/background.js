async function getSun(coordArr) {
    const reponse = await fetch("https://api.sunrise-sunset.org/json?lat=" + coordArr[0] + "&lng=" + coordArr[1] + "&tzid=Europe/Paris&formatted=0");
    const resultSun = await reponse.json();
    const sunset = resultSun.results.sunset.slice(11, 19);
    const sunrise = resultSun.results.sunrise.slice(11, 19);
    baliseSunrise.innerHTML = sunrise;
    baliseSunset.innerHTML = sunset;
}

//MOON API
async function getMoonPhase() {
    const reponse = await fetch("http://api.farmsense.net/v1/moonphases/?d=" + toDayMoon);
    const result = await reponse.json();
    return result;
}

getMoonPhase().then(result => {
    const moonPhase = result[0].Phase;
    balisePhase.innerHTML = englishToFrench[moonPhase]
});

