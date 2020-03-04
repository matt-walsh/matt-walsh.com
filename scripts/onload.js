(() =>{
    `use strict;`
    window.onload = (event) =>{
        InsertHeader();
        InsertFooter();
    };

    // window.addEventListener('resize', () =>{
    //     let imageContainer = document.getElementById('image-container');
    //     if( window.innerWidth <= 1270){
    //         if(imageContainer !== undefined){
    //             imageContainer.parentNode.removeChild(imageContainer);
    //         }
    //     }
    //     else{
    //         if(imageContainer !== undefined){
    //             imageContainer.parentNode.addChild(imageContainer);
    //         }
    //     }
    // })
    
    function InsertHeader(){
        let header = `
            <div id="banner-line">
                <a id="dynamic-link" href="">
                    <span class="contact-icon" alt="Contact Matt through Email">
                        <svg viewbox="0 0 25 25">
                            <use href="./images/icons/email.svg#email-icon"/>
                        </svg>
                    </span>
                </a>
                <a target="blank" href="https://www.linkedin.com/in/walshmp/">
                    <span class="contact-icon" alt="Link to Matt's LinkedIn Account">
                        <svg viewbox="0 0 25 25">
                            <use href="./images/icons/linkedin.svg#linkedin-icon"/>
                        </svg>
                    </span>
                </a>
                <a target="blank" href="https://github.com/matt-walsh">
                    <span class="contact-icon" alt="Link to Matt's Github Account">
                        <svg viewbox="0 0 25 25">
                            <use href="./images/icons/github.svg#github-icon"/>
                        </svg>
                    </span>
                </a>
                <h1><span id="first-name"><em>Matt</em>.</span><span class="light-blue">Walsh</span></h1>
            </div>
              
            <nav>
                <a id="homeLink" class="text-links" href="index.html">Home</a>
                <a id="aboutLink" class="text-links" href="./about.html">About</a>
                <a id="profileLink" class="text-links" href="./profile.html">Profile</a>
                <a id="projectsLink" class="text-links" href="./projects.html">Projects</a>
            </nav>
         `;
        
        let pageHeader = document.getElementById("page-header");
        if(pageHeader !== null){
            pageHeader.innerHTML = header;
    
            //To prevent email scraping, The email address never appears on the rendered page
            let emailLink = document.getElementById("dynamic-link");
    
            if (emailLink !=- null) {
                emailLink.addEventListener('click', (event) =>{
                    event.preventDefault();
                    
                    //Create new anchor tag containing email link
                    let emailNode = document.createElement("a");
                    emailNode.setAttribute("href", "mailto:matt.walsh.dev@gmail.com");
                    emailNode.setAttribute("target", "_blank");
    
                    //Activate the new anchor tag
                    emailNode.click();
                });
            }
        }
    }
    
    function InsertFooter(){
        let footer ="&#169; Matt Walsh 2019"
    
        let pageFooter = document.getElementById("page-footer");
        if(pageFooter !== null){
            pageFooter.innerHTML = footer;
        }
    }
})(false);
