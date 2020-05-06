// Orario
function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    if(hours > 11){
        t_str += "PM";
    } else {
        t_str += "AM";
    }
    document.getElementById('orario').innerHTML = t_str;
}
setInterval(updateTime, 1000);












// Modal #1
let close1 = document.getElementById('close1');
let risorse = document.getElementById('risorse')
let risorseModal = document.getElementById("risorseModal");

risorse.addEventListener('click', evt => {
    evt.preventDefault()
    risorseModal.style.display = "block";

})

close1.addEventListener('click', evt => {
if (risorseModal.style.display = "block") {
    risorseModal.style.display = "none";
  }
})

// Modal #4
let close2 = document.getElementById('close4');
let cestino = document.getElementById('cestino')
let cestinoModal = document.getElementById("cestinoModal");

cestino.addEventListener('click', evt => {
    evt.preventDefault()
    cestinoModal.style.display = "block";

})

close4.addEventListener('click', evt => {
    if (cestinoModal.style.display = "block") {
        cestinoModal.style.display = "none";
      }
})

