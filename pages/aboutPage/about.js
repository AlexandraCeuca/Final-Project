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
  const backToTopButton = document.querySelector("#backToTopButton");

  window.addEventListener("scroll", scrollFunction); 

  function scrollFunction() {
    if(window.pageYOffset > 200) {
        if(!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
    }
    else {
        if(backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function() {
                backToTopButton.style.display = "none";
            }, 250);
        }
  }
}

  backToTopButton.addEventListener("click", backToTop);

  function backToTop() {
      window.scrollTo(0, 0);
  }