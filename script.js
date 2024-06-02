const options = {
    enableHighAccuracy: true,
    timeout: 1000,
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



function savePosition(position) {
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;

const date = new Date();
modalLogs.innerHTML += `</br>Latidute: ${latitude} \nLongitude: ${longitude}\nTime get: ${date}`;
}

function error(err) {
modalLogs.innerHTML +=`</br>ERROR(${err.code}): ${err.message}`;
}
