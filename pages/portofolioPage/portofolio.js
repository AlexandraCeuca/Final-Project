const projects = [
    {
      title: "CSS-and-Git",
      description: "One of the very first challenges from the start of the course. A page build with the knowledges that i had back then: HTML & CSS",
      linkGit: "https://alexandraceuca.github.io/Homework---CSS-and-Git/",
      poster: "../../images/CCSandGIT.JPG",
      gitCode: "https://github.com/AlexandraCeuca/Homework---CSS-and-Git"
    },
    {
      title: "DOM-Manipulation-Contact-Form",
      description: "I had to implement a Contact form component. Simple and easy, this was the second challenge that i faced during this course",
      linkGit: "https://alexandraceuca.github.io/DOM-Manipulation---Contact-Form-Homework/",
      poster: "../../images/DomManipulation.JPG",
      gitCode: "https://github.com/AlexandraCeuca/DOM-Manipulation---Contact-Form-Homework"
    },
    {
      title: "Rock-paper-scissors game",
      description: "Who doesn't know this famous game? Tell me... Can you win against computer? A game implemented in Html, Css and Javascrip",
      linkGit: "https://alexandraceuca.github.io/Homework---Rock-paper-scissors-game/",
      poster: "../../images/Rock-paper-scissors.JPG",
      gitCode: "https://github.com/AlexandraCeuca/Homework---Rock-paper-scissors-game"
    },
    {
        title: "Astronomy Picture of the day",
        description: "Using NASA's Astronomy Picture of the Day API i had to build a page so you can all see what's Today's Astronomy Picture of the Day.",
        linkGit: "https://alexandraceuca.github.io/Ajax-Promises---Homework/",
        poster: "../../images/AstronomyPicture.JPG",
        gitCode: "https://github.com/AlexandraCeuca/Ajax-Promises---Homework"
    },
    {
        title: "Full-Game-App-Homework",
        description: "I implemented the CRUD operations (create, read, update, delete) using a provided Games API",
        linkGit: "https://alexandraceuca.github.io/Full-Game-App-Homework/",
        poster: "../../images/FullGame.JPG",
        gitCode: "https://github.com/AlexandraCeuca/Full-Game-App-Homework"
    },
    {
        title: "Homework-The-Player",
        description: "Mario, the beginner version. You can play it, just for fun. I implemented this game with Html, Css and Javascript.",
        linkGit: "https://alexandraceuca.github.io/Homework-The-Player/",
        poster: "../../images/thePlayer.JPG",
        gitCode: "https://github.com/AlexandraCeuca/Homework-The-Player"
    },
  ];

  
function displayProjects() {
    const projectsContainer = document.getElementById("projectsContainer");
    for(i=0;i<projects.length;i++){
        const projectElement = document.createElement("div");
        projectElement.setAttribute("class", "projectElement");
        projectElement.innerHTML = i%2 === 0 ?
                `<div class="posterContainer">
                    <a href="${projects[i].linkGit}"></a>
                    <img src="${projects[i].poster}" class="poster"></img>
                </div>
                <div class="projectsInformationContainer">
                    <div class="title" style="text-align: right;">${projects[i].title}</div>
                    <div class="projectsDescriptions" style="margin-left: -60px">${projects[i].description}</div>
                    <div class="gitCodeContainer" style="display: flex; justify-content: flex-end;">
                        <a class="gitCode" href="${projects[i].gitCode}"> 
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16 fa-fw fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path fill="rgb(107, 120, 152)" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                            </svg>
                        </a>
                    </div>
                </div>`
            :   `<div class="projectsInformationContainer">
                    <div class="title" style="text-align: left;">${projects[i].title}</div>
                    <div class="projectsDescriptions" style="margin-right: -60px">${projects[i].description}</div>
                    <div class="gitCodeContainer" style="display: flex; justify-content: flex-start;">
                        <a class="gitCode" href="${projects[i].gitCode}"> 
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16 fa-fw fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path fill="rgb(107, 120, 152)" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="posterContainer">
                    <a href="${projects[i].linkGit}"></a>
                    <img src="${projects[i].poster}" class="poster"></img>
                </div>`
        projectsContainer.appendChild(projectElement);
    }
}
displayProjects();

  