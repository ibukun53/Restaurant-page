// creating nav function element
const createNav = ()=>{
    const nav= document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = 'Home';

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'Menu';

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.textContent = 'Contact';
    
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

//creating header function
const createHeader = () => {
 const header = document.createElement('header');
 header.classList.add('header');

 const restaurantName = document.createElement('h1');
 restaurantName.classList.add('restaurant-page');
 restaurantName.textContent = 'African Delicacy';
 
 header.appendChild(restaurantName);
 header.appendChild(createNav());

 return header;
}

// creating main body function
const createMain = () =>{
    const main = document.createElement('main');
    main.classList.add('main');
    return main
}


// creating footer function  element
const createFooter = ()=>{
    const footer = document.createElement('footet');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.textContent=`Copyright © ${new Date().getFullYear()} debbyblessing`

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/ibukun53/'

    const  githubIcon = document.createElement('i');
    githubIcon.classList.add('fab');
    githubIcon.classList.add('fa-github');

    const linkedinLink = document.createElement('a');
    linkedinLink.href = 'https://www.linkedin.com/in/ibukun53/'

    const linkedinIcon = document.createElement('i');
    linkedinIcon .classList.add('fab');
    linkedinIcon .classList.add('fa-linkedin');
    
    githubLink.appendChild(githubIcon);
    linkedinLink.appendChild(linkedinIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);
    footer.appendChild(linkedinLink);

    return footer;
}
const StartUpPage = () => {
    const content = document.getElementById("content");
    
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export default StartUpPage;