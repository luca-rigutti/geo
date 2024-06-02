const options = {
    enableHighAccuracy: true,
    timeout: 3000,
    maximumAge: 0,
  };
    
const x = document.getElementById("isEnable");
function getLocation() {
if (navigator.geolocation) {
    // Example take from -> https://www.w3schools.com/html/html5_geolocation.asp
    navigator.geolocation.getCurrentPosition(savePosition, error, options);
} else {
    clearInterval(myTimeout);
    modalLogs.innerHTML += "</br>Geolocation is not supported by this browser.";
}
}

var last = {
    longitude: null,
    latitude: null,
    time: null,
};

totalM = 0;


function savePosition(position) {
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;

const nowDate = new Date();

if (last.time != null)
{
    var m = Math.abs(getDistanceFromLatLonInM(latitude,longitude,last.latitude,last.longitude));
    totalM += m;

    difference = (nowDate - last.time) / 1000;

    var instance = km / difference;
    var totalVelocity = totalM / ((nowDate - start) / 1000);

    document.getElementById("instance-velocity").value = `${instance}m/s`;
    document.getElementById("total-km").value = `${totalM/1000}`;
    document.getElementById("total-velocity").value = `${totalVelocity}`;
}

last.longitude = longitude;
last.latitude = latitude;
last.time = nowDate;




modalLogs.innerHTML += `</br>Latidute: ${latitude} \nLongitude: ${longitude}\nTime get: ${nowDate}`;
}

function error(err) {
modalLogs.innerHTML +=`</br>ERROR(${err.code}): ${err.message}`;
}

// https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
function getDistanceFromLatLonInM(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d * 1000;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
