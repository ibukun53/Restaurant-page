import loadHome from "./home";
import loadAbout from "./about";
import loadMenu from "./menu";
import loadChef from "./chef";
import loadContact from "./contact";

// creating nav function element
const createNav = () => {
    const navbarContainer = document.createElement('div');
    navbarContainer.classList.add('navbarContainer');

    const nav= document.createElement('nav');
    nav.classList.add('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', (e) =>{
        if(e.target.classList.contains('active')) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const aboutButton = document.createElement('button');
    aboutButton.classList.add('nav-button');
    aboutButton.textContent = 'About';
    aboutButton.addEventListener('click', (e) =>{
        if(e.target.classList.contains('active')) return;
        setActiveButton(aboutButton);
        loadAbout();
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', (e) =>{
        if(e.target.classList.contains('active')) return;
        setActiveButton(menuButton);
        loadMenu();
    });
    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', (e) =>{
        if(e.target.classList.contains('active')) return;
        setActiveButton(contactButton);
        loadContact();
    });

    const chefButton = document.createElement('button');
    chefButton.classList.add('nav-button');
    chefButton.textContent = 'Our Chef';
    chefButton.addEventListener('click', (e) =>{
        if(e.target.classList.contains('active')) return;
        setActiveButton(chefButton);
        loadChef();
    });
    
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(chefButton);
    nav.appendChild(aboutButton);
    nav.appendChild(contactButton);

    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobileMenu');
    const spanbar1 = document.createElement('span');
    spanbar1.classList.add('bar');
    const spanbar2 = document.createElement('span');
    spanbar2.classList.add('bar');
    const spanbar3 = document.createElement('span');
    spanbar3.classList.add('bar');

    mobileMenu.appendChild(spanbar1);
    mobileMenu.appendChild(spanbar2);
    mobileMenu.appendChild(spanbar3);
    
    navbarContainer.appendChild(mobileMenu);
    navbarContainer.appendChild(nav);
    

      // displaying of mobile view
    const navbarContainers = () =>{
    navbarContainer.classList.toggle('is-active');
    };
    navbarContainer.addEventListener('click', navbarContainers);
   return navbarContainer;  
}

// Button set to active
const setActiveButton = (button) => {
 const buttons = document.querySelectorAll('.nav-button');

 buttons.forEach((button) =>{
    if(button !==  this){
        button.classList.remove('active');
     }
    });
           button.classList.add('active');
    }

//creating header function
const createHeader = () => {
 const header = document.createElement('header');
 header.classList.add('header');

 const stickyHeader= header.offsetTop;
 if (window.pageYOffset > stickyHeader){
    header.classList.add('stickyHeader');
 }else{
    header.classList.remove('stickyHeader');
 }

 const restaurantName = document.createElement('h1');
 restaurantName.classList.add('restaurantName');
 restaurantName.textContent = 'African.D';
 
 const restaurantMottor = document.createElement('p')
 restaurantMottor.classList.add('restaurantMottor');
 restaurantMottor.textContent='Good food favours the hungry heart';
 
 const restaurantReserve = document.createElement('h3');
 restaurantReserve.classList.add('restaurantReserve');
 restaurantReserve.textContent='Reservation';
 

 header.appendChild(restaurantName);
 restaurantName.appendChild(restaurantMottor);
 header.appendChild(createNav());
 header.appendChild(restaurantReserve);

 return header;
}

// creating main body function
const createMain = () =>{
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute("id", "main");
    return main
}


// creating footer function  element
const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.classList.add('footerp')
    copyright.textContent=`Copyright © ${new Date().getFullYear()} debbyblessing`

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/ibukun53/'

    const  githubIcon = document.createElement('i');
    githubIcon.classList.add('fab');
    githubIcon.classList.add('fa-github');

    const linkedinLink = document.createElement('a');
    linkedinLink.href = 'https://www.linkedin.com/in/ibukun53/'

    const linkedinIcon = document.createElement('i');
    linkedinIcon.classList.add('fab');
    linkedinIcon.classList.add('fa-linkedin');
    
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

    setActiveButton(document.querySelector(".nav-button"));
    loadHome();
}

export default StartUpPage;