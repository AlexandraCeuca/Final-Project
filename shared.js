function load_about() {
  document.getElementById("mainContent").innerHTML='<object type="text/html" data="../aboutpage/about.html"></object>';
}
function load_contact() {
  document.getElementById("mainContent").innerHTML='<object type="text/html" data="../contactpage/contact.html"></object>';
}
function load_portofolio() {
  document.getElementById("mainContent").innerHTML='<object type="text/html" data="../portofoliopage/portofolio.html"></object>';
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



