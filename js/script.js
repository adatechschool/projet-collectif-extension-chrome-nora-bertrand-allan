const toDayMoon = Math.round(Date.now()/1000);
const toDaySun = new Date;
const year = toDaySun.getUTCFullYear();
const month = toDaySun.getUTCMonth()+1;
const day = toDaySun.getUTCDate();
const fullDateForSun = year + "-" + month + "-" + day;
const balisePhase = document.getElementById("phase")
const baliseSunset = document.getElementById("sunset")
const baliseSunrise = document.getElementById("sunrise")

//SUN API

setTimeout(() => {
    async function getSun(){
        const reponse =  await fetch("https://api.sunrise-sunset.org/json?lat="+coordArr[0]+"&lng="+coordArr[1]+"&tzid=Europe/Paris&formatted=0");
        const resultSun = await reponse.json();
        return resultSun
    }

    getSun().then(
        resultSun =>{
            console.log(resultSun);
            const sunset = resultSun.results.sunset.slice(11,19)
            const sunrise = resultSun.results.sunrise.slice(11,19)
            baliseSunrise.innerHTML = sunrise
            baliseSunset.innerHTML = sunset

        }
    )});
    
    
    //Prommesse en .then en cascade pour attente de la recupération des coordonnées GPS pour introduction dans l'API Sun.
    
    
    //MOON API
    async function getMoonPhase(){
        const reponse =  await fetch("http://api.farmsense.net/v1/moonphases/?d="+toDayMoon);
        const resultMoon = await reponse.json();
        return resultMoon
    }
    
    getMoonPhase().then(result => {
        const moonPhase = result[0].Phase
        balisePhase.innerHTML = moonPhase
})


//COORDONNEES NAVIGATEUR
function gps(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(stockPosition)
    }else{
        console.log("error")
    }
}
let coordArr = [];
function stockPosition(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    coordArr.push(lat, long);
};
gps();