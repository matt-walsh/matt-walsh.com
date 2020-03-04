'use strict;'
let projects = [
    {
        "name" : "Goal Clicker",
        "url" : "https://github.com/matt-walsh/goal-clicker",
        "image" : "goal.jpg",
        "description" : "A short 'incremental' style game created as part of a Prof. Practice Presentation"
    },
    {
        "name" : "NSCC Application",
        "url" : "https://github.com/matt-walsh/nscc_application",
        "image" : "nscc_app.jpg",
        "description" : "A recreation of a physical NSCC Application form using HTML5 and CSS3"
    },
    {
        "name" : "Battleship",
        "url" : "https://github.com/matt-walsh/battleship",
        "image" : "battleship.jpg",
        "description" : "A console recreation of the game 'BattleShip' using NodeJs."
    },
    {
        "name" : "Flag Quiz",
        "url" : "https://github.com/matt-walsh/flag-quiz",
        "image" : "flags.jpg",
        "description" : "A web application that allows you to study for and take a quiz on the flags of the world"
    },
    {
        "name" : "Flight Map",
        "url" : "https://github.com/matt-walsh/flight-map",
        "image" : "flights.jpg",
        "description" : "A web application that allows you to track Flights from canada on a map."        
    }
];

//Creates the HTML structure that is a project card and adds them to the work sample section
function InsertProjects(){
    let projectSection = document.getElementById("project-section");
    if (projectSection !== null) {
        projects.forEach((project)=>{
            //Create the "project" div. This element contains the other elements of the project
            let projectNode = document.createElement("div");
            projectNode.setAttribute("class", "project");
            
            //Create the link that will be the parent of all the project details
            let projectLink = document.createElement("a");
            projectLink.setAttribute("href", project.url)

            //Create and append the project image
            let projectImage = document.createElement("img");
            projectImage.setAttribute("class", "project-image");
            projectImage.setAttribute("src", `./images/projects/${project.image}`);
            projectImage.setAttribute("alt", project.name)
    
            projectLink.appendChild(projectImage)
    
            //Create the "project-text" div. This element holds the name and description of the project
            let projectTextNode = document.createElement("div");
            projectTextNode.setAttribute("class", "project-text-container");
    
            //Create the two text nodes (h3 and p)
            let projectTitle = document.createElement("h3");
            projectTitle.setAttribute("class","project-title");
            projectTitle.innerHTML = project.name;

            let projectDetails = document.createElement("p");
            projectDetails.setAttribute("class", "project-details");
            projectDetails.innerHTML = project.description;
    
            //Append the text nodes to projectTextNode
            projectTextNode.appendChild(projectTitle);
            projectTextNode.appendChild(projectDetails);
    
            //Append projectTextNode to projectLink
            projectLink.appendChild(projectTextNode);

            //Append projectLink to projectNode
            projectNode.appendChild(projectLink);
    
            //Append projectNode to projectSection
            projectSection.appendChild(projectNode);
        });       
    }
}

InsertProjects();
