function load_header() {
  document.getElementById("headerContainer").innerHTML='<object id="objectHeader" type="text/html" data="../../header/header.html"></object>';
}
function load_icons() {
  document.getElementById("socialIconsContainer").innerHTML='<object id="objectIcons"type="text/html" data="../../socialIcons/socialIcons.html"></object>';
}
load_header();
load_icons();

function openLink(linkName) {
  const links = {
    facebook : "https://www.facebook.com/adda.daa.1",
    gitHub : "https://github.com/AlexandraCeuca",
    linkedIn : "https://www.linkedin.com/in/alexandra-cristina-ceuca-8b90b2137/"
  }
  window.open(links[linkName]);
}
function load_workExperience(param) {
  const options= ['school','work1','work2','work3'];
  options.forEach(option => {
    document.getElementById(option).style.display= option==param ? "block" : "none";
    document.getElementById(`button_${option}`).classList = option==param ? "selected" : ""
  })
}

function load_education(param) {
  const options= ['master','university','highschool'];
  options.forEach(option => {
    document.getElementById(option).style.display= option==param ? "block" : "none";
    document.getElementById(`button_${option}`).classList = option==param ? "selected" : ""
  })
}
