function windchill(){
    var temperature = parseFloat(document.getElementById("temperature").innerHTML);
    var windspeed = parseFloat(document.getElementById("windspeed").innerHTML);

    if (temperature>=50 || windspeed<=3){
        document.getElementById("windchill").innerHTML="N/A";
    }
    else{
        var windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16));
        document.getElementById("windchill").innerHTML=windchill.toFixed(0);
    }
}

window.onload = windchill();