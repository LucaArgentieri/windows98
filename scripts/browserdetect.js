
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
