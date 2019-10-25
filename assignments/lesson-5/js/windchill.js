function windchill(){
    var temperature = parseFloat(document.getElementsById("temperature").innerHTML);
    var windspeed = parseFloat(document.getElementsById("windspeed").innerHTML);

    if (temperature>50 || windspeed<3){
        document.getElementsById("windchill").innerHTML="N/A";
    }
    else{
        var windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16));
        document.getElementsById("windchill").innerHTML=windchill.toFixed(2);
    }
}

window.onload = windchill();