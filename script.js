// Orario
function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var t_str = hours + ":" + minutes + " ";
  if (hours > 11) {
    t_str += "PM";
  } else {
    t_str += "AM";
  }
  document.getElementById("orario").innerHTML = t_str;
}
setInterval(updateTime, 1000);

// Modal #1
let close1 = document.getElementById("close1");
let min1 = document.getElementById("min1");
let btn1 = document.getElementById("btn_1");
let risorse = document.getElementById("risorse");
let risorseModal = document.getElementById("risorseModal");
let width = window.innerWidth;

risorse.addEventListener("click", (evt) => {
  evt.preventDefault();
  risorseModal.style.display = "block";
  btn1.style.display = "flex";

  if (width > 900) {
    risorseModal.style.left = "200px";
    risorseModal.style.top = "200px";
  }
});

min1.addEventListener("click", (evt) => {
  if ((risorseModal.style.display = "block")) {
    risorseModal.style.display = "none";
  }
});

close1.addEventListener("click", (evt) => {
  if ((risorseModal.style.display = "block")) {
    risorseModal.style.display = "none";
    btn1.style.display = "none";
  }
});
// App bar modal#1
btn1.addEventListener("click", (evt) => {
  if (width > 900) {
    risorseModal.style.left = "200px";
    risorseModal.style.top = "200px";
  }

  if ((risorseModal.style.display = risorseModal.style.display === "block")) {
    risorseModal.style.display = "none";
  } else {
    risorseModal.style.display = "block";
  }
});

// Modal on click z-index
risorseModal.addEventListener("click", (evt) => {
  risorseModal.style.zIndex = +"1";
});

// Modal 1 Windows move
var mousePosition;
var offset = [0, 0];
var div = document.getElementById("risorseModal");
var isDown = false;

div.addEventListener(
  "mousedown",
  function (e) {
    isDown = true;
    offset = [div.offsetLeft - e.clientX, div.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown) {
      mousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
      div.style.left = mousePosition.x + offset[0] + "px";
      div.style.top = mousePosition.y + offset[1] + "px";

      div.style.marginTop = "0px";
    }
  },
  true
);

// Modal #2
let close2 = document.getElementById("close2");
let projects = document.getElementById("projects");
let projectsModal = document.getElementById("projectsModal");
let btn2 = document.getElementById("btn_2");
let min2 = document.getElementById("min2");

projects.addEventListener("click", (evt) => {
  evt.preventDefault();
  projectsModal.style.display = "block";
  btn2.style.display = "flex";

  if (width > 900) {
    projectsModal.style.left = "550px";
  }
});

min2.addEventListener("click", (evt) => {
  if ((projectsModal.style.display = "block")) {
    projectsModal.style.display = "none";
  }
});

close2.addEventListener("click", (evt) => {
  if ((projectsModal.style.display = "block")) {
    projectsModal.style.display = "none";
    btn2.style.display = "none";
  }
});

// App bar modal#2
btn2.addEventListener("click", (evt) => {
  if (width > 900) {
    projectsModal.style.left = "200px";
    projectsModal.style.top = "200px";
  }

  if ((projectsModal.style.display = projectsModal.style.display === "block")) {
    projectsModal.style.display = "none";
  } else {
    projectsModal.style.display = "block";
  }
});

// Modal on click z-index
// projectsModal.addEventListener('click', evt => {
//     projectsModal.style.zIndex  + "1"
// })

// Modal 2 Windows move
var mousePosition2;
var offset2 = [0, 0];
var div2 = document.getElementById("projectsModal");
var isDown2 = false;

div2.addEventListener(
  "mousedown",
  function (e) {
    isDown2 = true;
    offset2 = [div2.offsetLeft - e.clientX, div2.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown2 = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown2) {
      mousePosition2 = {
        x: event.clientX,
        y: event.clientY,
      };
      div2.style.left = mousePosition2.x + offset2[0] + "px";
      div2.style.top = mousePosition2.y + offset2[1] + "px";

      div2.style.marginTop = "0px";
    }
  },
  true
);

// Modal #3
let close3 = document.getElementById("close3");
let cmd = document.getElementById("cmd");
let cmdModal = document.getElementById("cmdModal");
let btn3 = document.getElementById("btn_3");
let min3 = document.getElementById("min3");

cmd.addEventListener("click", (evt) => {
  evt.preventDefault();
  cmdModal.style.display = "block";
  btn3.style.display = "flex";

  if (width > 900) {
    cmdModal.style.left = "150px";
  }
});

min3.addEventListener("click", (evt) => {
  if ((cmdModal.style.display = "block")) {
    cmdModal.style.display = "none";
  }
});

close3.addEventListener("click", (evt) => {
  if ((cmdModal.style.display = "block")) {
    cmdModal.style.display = "none";
    btn3.style.display = "none";
  }
});

// App bar modal#3
btn3.addEventListener("click", (evt) => {
  if (width > 900) {
    cmdModal.style.left = "200px";
    cmdModal.style.top = "200px";
  }

  if ((cmdModal.style.display = cmdModal.style.display === "block")) {
    cmdModal.style.display = "none";
  } else {
    cmdModal.style.display = "block";
  }
});

// Modal 3 Windows move
var mousePosition3;
var offset3 = [0, 0];
var div3 = document.getElementById("cmdModal");
var isDown3 = false;

div3.addEventListener(
  "mousedown",
  function (e) {
    isDown3 = true;
    offset3 = [div3.offsetLeft - e.clientX, div3.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown3 = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown3) {
      mousePosition3 = {
        x: event.clientX,
        y: event.clientY,
      };
      div3.style.left = mousePosition3.x + offset3[0] + "px";
      div3.style.top = mousePosition3.y + offset3[1] + "px";

      div3.style.marginTop = "0px";
    }
  },
  true
);

// Modal #4
let close4 = document.getElementById("close4");
let cestino = document.getElementById("cestino");
let cestinoModal = document.getElementById("cestinoModal");
let btn4 = document.getElementById("btn_4");
let min4 = document.getElementById("min4");

cestino.addEventListener("click", (evt) => {
  evt.preventDefault();
  cestinoModal.style.display = "block";
  btn4.style.display = "flex";

  if (width > 900) {
    cestinoModal.style.top = "150px";
  }
});

min4.addEventListener("click", (evt) => {
  if ((cestinoModal.style.display = "block")) {
    cestinoModal.style.display = "none";
  }
});

close4.addEventListener("click", (evt) => {
  if ((cestinoModal.style.display = "block")) {
    cestinoModal.style.display = "none";
    btn4.style.display = "none";
  }
});

btn4.addEventListener("click", (evt) => {
  if (width > 900) {
    cestinoModal.style.left = "200px";
    cestinoModal.style.top = "200px";
  }

  if ((cestinoModal.style.display = cestinoModal.style.display === "block")) {
    cestinoModal.style.display = "none";
  } else {
    cestinoModal.style.display = "block";
  }
});

// Modal 4 Windows move
var mousePosition4;
var offset4 = [0, 0];
var div4 = document.getElementById("cestinoModal");
var isDown4 = false;

div4.addEventListener(
  "mousedown",
  function (e) {
    isDown4 = true;
    offset4 = [div4.offsetLeft - e.clientX, div4.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown4 = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown4) {
      mousePosition4 = {
        x: event.clientX,
        y: event.clientY,
      };
      div4.style.left = mousePosition4.x + offset4[0] + "px";
      div4.style.top = mousePosition4.y + offset4[1] + "px";

      div4.style.marginTop = "0px";
    }
  },
  true
);

// Modal #5
let close5 = document.getElementById("close5");
let chromeButton = document.getElementById("chrome_button");
let chromee = document.getElementById("chrome");
let chromeModal = document.getElementById("chromeModal");
let btn5 = document.getElementById("btn5");
var audio = new Audio("audio/troll.mp3");

chromee.addEventListener("click", (evt) => {
  evt.preventDefault();
  chromeModal.style.display = "block";
  btn5.style.display = "flex";
  audio.volume = 0.2;
  audio.play();
});

close5.addEventListener("click", (evt) => {
  if ((chromeModal.style.display = "block")) {
    chromeModal.style.display = "none";
    btn5.style.display = "none";
    audio.pause();
  }
});

chromeButton.addEventListener("click", (evt) => {
  if ((chromeModal.style.display = "block")) {
    chromeModal.style.display = "none";
    btn5.style.display = "none";
    audio.pause();
  }
});

// Modal 5 Windows move
var mousePosition5;
var offset5 = [0, 0];
var div5 = document.getElementById("chromeModal");
var isDown5 = false;

div5.addEventListener(
  "mousedown",
  function (e) {
    isDown5 = true;
    offset5 = [div5.offsetLeft - e.clientX, div5.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown5 = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown5) {
      mousePosition5 = {
        x: event.clientX,
        y: event.clientY,
      };
      div5.style.left = mousePosition5.x + offset5[0] + "px";
      div5.style.top = mousePosition5.y + offset5[1] + "px";

      div5.style.marginTop = "0px";
    }
  },
  true
);

// Coming Soon
let btnstart = document.getElementById("btnstart");
let close6 = document.getElementById("close6");
let comingModal = document.getElementById("comingModal");
let comingButton = document.getElementById("comingButton");
let btn6 = document.getElementById("btn6");

btnstart.addEventListener("click", (evt) => {
  evt.preventDefault();
  comingModal.style.display = "block";
  btn6.style.display = "flex";
});

close6.addEventListener("click", (evt) => {
  if ((comingModal.style.display = "block")) {
    comingModal.style.display = "none";
    btn6.style.display = "none";
    audio.pause();
  }
});

comingButton.addEventListener("click", (evt) => {
  if ((comingModal.style.display = "block")) {
    comingModal.style.display = "none";
    btn6.style.display = "none";
  }
});

// Modal 6 Windows move
var mousePosition5;
var offset5 = [0, 0];
var div6 = document.getElementById("comingModal");
var isDown5 = false;

div6.addEventListener(
  "mousedown",
  function (e) {
    isDown5 = true;
    offset5 = [div6.offsetLeft - e.clientX, div6.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown5 = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown5) {
      mousePosition5 = {
        x: event.clientX,
        y: event.clientY,
      };
      div6.style.left = mousePosition5.x + offset5[0] + "px";
      div6.style.top = mousePosition5.y + offset5[1] + "px";

      div6.style.marginTop = "0px";
    }
  },
  true
);


// Modal #7
let close7 = document.getElementById("close7");
let social = document.getElementById("social");
let socialModal = document.getElementById("socialModal");
let btn7 = document.getElementById("btn7");
let min7 = document.getElementById("min7");

social.addEventListener("click", (evt) => {
  evt.preventDefault();
  socialModal.style.display = "block";
  btn7.style.display = "flex";

  if (width > 900) {
    socialModal.style.left = "550px";
  }
});

min7.addEventListener("click", (evt) => {
  if ((socialModal.style.display = "block")) {
    socialModal.style.display = "none";
  }
});

close7.addEventListener("click", (evt) => {
  if ((socialModal.style.display = "block")) {
    socialModal.style.display = "none";
    btn7.style.display = "none";
  }
});

// App bar modal#7
btn7.addEventListener("click", (evt) => {
  if (width > 900) {
    socialModal.style.left = "200px";
    socialModal.style.top = "200px";
  }

  if ((socialModal.style.display = socialModal.style.display === "block")) {
    socialModal.style.display = "none";
  } else {
    socialModal.style.display = "block";
  }
});

// Modal 7 Windows move
var mousePosition7;
var offset7 = [0, 0];
var div7 = document.getElementById("socialModal");
var isDown7 = false;

div7.addEventListener(
  "mousedown",
  function (e) {
    isDown7 = true;
    offset7 = [div7.offsetLeft - e.clientX, div7.offsetTop - e.clientY];
  },
  true
);

document.addEventListener(
  "mouseup",
  function () {
    isDown7 = false;
  },
  true
);

document.addEventListener(
  "mousemove",
  function (event) {
    event.preventDefault();
    if (isDown7) {
      mousePosition7 = {
        x: event.clientX,
        y: event.clientY,
      };
      div7.style.left = mousePosition7.x + offset7[0] + "px";
      div7.style.top = mousePosition7.y + offset7[1] + "px";

      div7.style.marginTop = "0px";
    }
  },
  true
);


// Browser Detector
var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName = navigator.appName;
var fullVersion = "" + parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;

// In Opera 15+, the true version is after "OPR/"
if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
  browserName = "Opera";
  fullVersion = nAgt.substring(verOffset + 4);
}
// In older Opera, the true version is after "Opera" or after "Version"
else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
  browserName = "Opera";
  fullVersion = nAgt.substring(verOffset + 6);
  if ((verOffset = nAgt.indexOf("Version")) != -1)
    fullVersion = nAgt.substring(verOffset + 8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset = nAgt.indexOf("Edg")) != -1) {
  browserName = "Microsoft Edge";
  fullVersion = nAgt.substring(verOffset + 5);
}
// In Chrome, the true version is after "Chrome"
else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
  browserName = "Google Chrome";
  fullVersion = nAgt.substring(verOffset + 7);
}
// In Safari, the true version is after "Safari" or after "Version"
else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
  browserName = "Safari";
  fullVersion = nAgt.substring(verOffset + 7);
  if ((verOffset = nAgt.indexOf("Version")) != -1)
    fullVersion = nAgt.substring(verOffset + 8);
}
// In Firefox, the true version is after "Firefox"
else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
  browserName = "Firefox";
  fullVersion = nAgt.substring(verOffset + 8);
}
// In most other browsers, "name/version" is at the end of userAgent
else if (
  (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/"))
) {
  browserName = nAgt.substring(nameOffset, verOffset);
  fullVersion = nAgt.substring(verOffset + 1);
  if (browserName.toLowerCase() == browserName.toUpperCase()) {
    browserName = navigator.appName;
  }
}
// trim the fullVersion string at semicolon/space if present
if ((ix = fullVersion.indexOf(";")) != -1)
  fullVersion = fullVersion.substring(0, ix);
if ((ix = fullVersion.indexOf(" ")) != -1)
  fullVersion = fullVersion.substring(0, ix);

majorVersion = parseInt("" + fullVersion, 10);
if (isNaN(majorVersion)) {
  fullVersion = "" + parseFloat(navigator.appVersion);
  majorVersion = parseInt(navigator.appVersion, 10);
}

let browserDetectato = browserName;

// console.log(''
// +'Browser name  = '+browserName+''
//  +'Full version  = '+fullVersion+'<br>'
//  +'Major version = '+majorVersion+'<br>'
//  +'navigator.appName = '+navigator.appName+'<br>'
//  +'navigator.userAgent = '+navigator.userAgent+'<br>'
// )

// Change Browser Logo
let imgChrome = document.getElementById("imgChrome");
let parChrome = document.getElementById("parChrome");

if (browserName === "Chrome") {
  imgChrome.setAttribute("src", "img/chrome.png");
  parChrome.innerHTML = browserName;
}
if (browserName === "Firefox") {
  imgChrome.setAttribute("src", "img/firefox.png");
  parChrome.innerHTML = browserName;
}
if (browserName === "Microsoft Edge") {
  imgChrome.setAttribute("src", "img/edge.png");
  parChrome.innerHTML = browserName;
}
if (browserName === "Opera") {
  imgChrome.setAttribute("src", "img/opera.png");
  parChrome.innerHTML = browserName;
}
if (browserName === "Safari") {
  imgChrome.setAttribute("src", "img/safari.png");
  parChrome.innerHTML = browserName;
}

// Error message
let textChrome = document.getElementById("textChrome");
textChrome.innerHTML = `You are already in ${browserDetectato}`;

// New Tab
let newtab = document.getElementById("newtab");
newtab.addEventListener("click", (evt) => {
  evt.preventDefault();
  window.open("https://www.google.it/");
});
