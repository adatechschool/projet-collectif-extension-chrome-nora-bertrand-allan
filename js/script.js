const toDay = Math.round(Date.now()/1000);
let lat = ""
let long = ""


async function getSun(){
    while (lat === null && long === null) { 
    const reponse =  await fetch("http://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today");
    const resultSun = await reponse.json();
    }
    return resultSun
} 


async function getMoonPhase(){
    const reponse =  await fetch("http://api.farmsense.net/v1/moonphases/?d="+toDay);
    const resultMoon = await reponse.json();
    return resultMoon
}

getSun().then(
    resultSun =>{
        console.log(resultSun)
    }
) 

getMoonPhase().then(result => {
    console.log(result)
})


function gps(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(stockPosition)
    }else{
        console.log("error")
    }
}

function stockPosition(position){
     lat = position.coords.latitude;
     long = position.coords.longitude;
     console.log(lat)
     console.log(long)
    
     
}
gps()