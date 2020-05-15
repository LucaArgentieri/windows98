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
let width = window.innerWidth

risorse.addEventListener('click', evt => {
    evt.preventDefault()
    risorseModal.style.display = "block";

    if(width > 900) {
        risorseModal.style.left = "200px"
        risorseModal.style.top = "200px"
    }


})

close1.addEventListener('click', evt => {
if (risorseModal.style.display = "block") {
    risorseModal.style.display = "none";
  }
})

// Modal on click z-index
risorseModal.addEventListener('click', evt => {
    risorseModal.style.zIndex = + "1"
})

// Modal #2
let close2 = document.getElementById('close2');
let projects = document.getElementById('projects')
let projectsModal = document.getElementById("projectsModal");


projects.addEventListener('click', evt => {
    evt.preventDefault()
    projectsModal.style.display = "block";


    if(width > 900){
        projectsModal.style.left = "550px"
    }

})

close2.addEventListener('click', evt => {
if (projectsModal.style.display = "block") {
    projectsModal.style.display = "none";
  }
})


// Modal on click z-index
projectsModal.addEventListener('click', evt => {
    projectsModal.style.zIndex  + "1"
})




// Modal #3
let close3 = document.getElementById('close3');
let cmd = document.getElementById('cmd')
let cmdModal = document.getElementById("cmdModal");


cmd.addEventListener('click', evt => {
    evt.preventDefault()
    cmdModal.style.display = "block";

    if(width > 900){
    cmdModal.style.left = "150px"
    }

})

close3.addEventListener('click', evt => {
if (cmdModal.style.display = "block") {
    cmdModal.style.display = "none";
  }
})


let cmdText = document.getElementById('cmdtext')
cmdText.addEventListener('click', evt => {
    
})

// Modal #4
let close4 = document.getElementById('close4');
let cestino = document.getElementById('cestino')
let cestinoModal = document.getElementById("cestinoModal");

cestino.addEventListener('click', evt => {
    evt.preventDefault()
    cestinoModal.style.display = "block";

    if(width > 900){
    cestinoModal.style.top = "150px"
    }

})

close4.addEventListener('click', evt => {
    if (cestinoModal.style.display = "block") {
        cestinoModal.style.display = "none";
      }
})


// Modal #5
let close5 = document.getElementById('close5');
let chromeButton = document.getElementById('chrome_button')
let chromee = document.getElementById('chrome')
let chromeModal = document.getElementById("chromeModal");

chromee.addEventListener('click', evt => {
    evt.preventDefault()
    chromeModal.style.display = "block";

})

close5.addEventListener('click', evt => {
    if (chromeModal.style.display = "block") {
        chromeModal.style.display = "none";
      }
})

chromeButton.addEventListener('click', evt => {
    if (chromeModal.style.display = "block") {
        chromeModal.style.display = "none";
      }
})

// Modal 1 Windows move
var mousePosition;
var offset = [0,0];
var div = document.getElementById('risorseModal')
var isDown = false;



div.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        div.offsetLeft - e.clientX,
        div.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        div.style.left = (mousePosition.x + offset[0]) + 'px';
        div.style.top  = (mousePosition.y + offset[1]) + 'px';


        div.style.marginTop = '0px'
    }
}, true);

// Modal 2 Windows move
var mousePosition2;
var offset2 = [0,0];
var div2 = document.getElementById('projectsModal')
var isDown2 = false;



div2.addEventListener('mousedown', function(e) {
    isDown2 = true;
    offset2 = [
        div2.offsetLeft - e.clientX,
        div2.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown2 = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown2) {
        mousePosition2 = {

            x : event.clientX,
            y : event.clientY

        };
        div2.style.left = (mousePosition2.x + offset2[0]) + 'px';
        div2.style.top  = (mousePosition2.y + offset2[1]) + 'px';


        div2.style.marginTop = '0px'
    }
}, true);

// Modal 3 Windows move
var mousePosition3;
var offset3 = [0,0];
var div3 = document.getElementById('cmdModal')
var isDown3 = false;



div3.addEventListener('mousedown', function(e) {
    isDown3 = true;
    offset3 = [
        div3.offsetLeft - e.clientX,
        div3.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown3 = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown3) {
        mousePosition3 = {

            x : event.clientX,
            y : event.clientY

        };
        div3.style.left = (mousePosition3.x + offset3[0]) + 'px';
        div3.style.top  = (mousePosition3.y + offset3[1]) + 'px';


        div3.style.marginTop = '0px'
    }
}, true);

// Modal 4 Windows move
var mousePosition4;
var offset4 = [0,0];
var div4 = document.getElementById('cestinoModal')
var isDown4 = false;



div4.addEventListener('mousedown', function(e) {
    isDown4 = true;
    offset4 = [
        div4.offsetLeft - e.clientX,
        div4.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown4 = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown4) {
        mousePosition4 = {

            x : event.clientX,
            y : event.clientY

        };
        div4.style.left = (mousePosition4.x + offset4[0]) + 'px';
        div4.style.top  = (mousePosition4.y + offset4[1]) + 'px';


        div4.style.marginTop = '0px'
    }
}, true);

// Modal 5 Windows move
var mousePosition5;
var offset5 = [0,0];
var div5 = document.getElementById('chromeModal')
var isDown5 = false;



div5.addEventListener('mousedown', function(e) {
    isDown5 = true;
    offset5 = [
        div5.offsetLeft - e.clientX,
        div5.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown5 = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown5) {
        mousePosition5 = {

            x : event.clientX,
            y : event.clientY

        };
        div5.style.left = (mousePosition5.x + offset5[0]) + 'px';
        div5.style.top  = (mousePosition5.y + offset5[1]) + 'px';


        div5.style.marginTop = '0px'
    }
}, true);


























// Browser Detector
var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion); 
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;

// In Opera 15+, the true version is after "OPR/" 
if ((verOffset=nAgt.indexOf("OPR/"))!=-1) {
 browserName = "Opera";
 fullVersion = nAgt.substring(verOffset+4);
}
// In older Opera, the true version is after "Opera" or after "Version"
else if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
 browserName = "Opera";
 fullVersion = nAgt.substring(verOffset+6);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("Edg"))!=-1) {
 browserName = "Microsoft Edge";
 fullVersion = nAgt.substring(verOffset+5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
 browserName = "Google Chrome";
 fullVersion = nAgt.substring(verOffset+7);
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
 browserName = "Safari";
 fullVersion = nAgt.substring(verOffset+7);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
 browserName = "Firefox";
 fullVersion = nAgt.substring(verOffset+8);
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
          (verOffset=nAgt.lastIndexOf('/')) ) 
{
 browserName = nAgt.substring(nameOffset,verOffset);
 fullVersion = nAgt.substring(verOffset+1);
 if (browserName.toLowerCase()==browserName.toUpperCase()) {
  browserName = navigator.appName;
 }
}
// trim the fullVersion string at semicolon/space if present
if ((ix=fullVersion.indexOf(";"))!=-1)
   fullVersion=fullVersion.substring(0,ix);
if ((ix=fullVersion.indexOf(" "))!=-1)
   fullVersion=fullVersion.substring(0,ix);

majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
 fullVersion  = ''+parseFloat(navigator.appVersion); 
 majorVersion = parseInt(navigator.appVersion,10);
}


let browserDetectato = browserName

// console.log(''
// +'Browser name  = '+browserName+''
//  +'Full version  = '+fullVersion+'<br>'
//  +'Major version = '+majorVersion+'<br>'
//  +'navigator.appName = '+navigator.appName+'<br>'
//  +'navigator.userAgent = '+navigator.userAgent+'<br>'
// )


// Change Browser Logo
let imgChrome = document.getElementById('imgChrome')
let parChrome = document.getElementById('parChrome')


if(browserName === 'Chrome') {
    imgChrome.setAttribute('src','img/chrome.png')
    parChrome.innerHTML=browserName
}
if(browserName === 'Firefox') {
    imgChrome.setAttribute('src','img/firefox.png')
    parChrome.innerHTML=browserName
}
if(browserName === 'Microsoft Edge') {
    imgChrome.setAttribute('src','img/edge.png')
    parChrome.innerHTML=browserName
}
if(browserName === 'Opera') {
    imgChrome.setAttribute('src','img/opera.png')
    parChrome.innerHTML=browserName
}
if(browserName === 'Safari') {
    imgChrome.setAttribute('src','img/safari.png')
    parChrome.innerHTML=browserName
}

// Error message
let textChrome = document.getElementById('textChrome')
textChrome.innerHTML = `You are already in ${browserDetectato}`

// New Tab
let newtab = document.getElementById('newtab')
newtab.addEventListener('click', evt => {
    evt.preventDefault()
    window.open('https://www.google.it/')
})