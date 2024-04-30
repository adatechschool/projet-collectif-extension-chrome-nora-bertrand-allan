const toDay = Math.round(Date.now()/1000);

//SUN API

setTimeout(() => {
    async function getSun(){
        const reponse =  await fetch("https://api.sunrise-sunset.org/json?lat="+coordArr[0]+"&lng="+coordArr[1]+"&date="+toDay);
        const resultSun = await reponse.json();
        return resultSun
    }

    getSun().then(
        resultSun =>{
            console.log(resultSun)
        }
    )}, "5000");


//Prommesse en .then en cascade pour attente de la recupération des coordonnées GPS pour introduction dans l'API Sun.


//MOON API
async function getMoonPhase(){
    const reponse =  await fetch("http://api.farmsense.net/v1/moonphases/?d="+toDay);
    const resultMoon = await reponse.json();
    return resultMoon
}

getMoonPhase().then(result => {
    console.log(result)
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
     console.log(coordArr);
};
gps();