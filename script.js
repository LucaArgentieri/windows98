// Orario

function updateClock() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes()
    document.getElementById('orario').innerHTML=time

}

setInterval(updateClock, 1000);


