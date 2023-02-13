// creating nav function element
const createNav = ()=>{
    const nav= document.createElement('nav');
    nav.classList.add('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = 'Home';

    const aboutButton = document.createElement('button');
    aboutButton.classList.add('nav-button');
    aboutButton.textContent = 'About';

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'Menu';

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.textContent = 'Contact';

    const orderButton = document.createElement('button');
    orderButton.classList.add('nav-button');
    orderButton.textContent = 'Order';
    

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
    nav.appendChild(mobileMenu);
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(orderButton);
    nav.appendChild(aboutButton);
    nav.appendChild(contactButton);

      // displaying of mobile view
    const navbarContainer = () =>{
    nav.classList.toggle('is-active');
    mobileMenu.classList.toggle('active');
    };
    nav.addEventListener('click', navbarContainer);
    mobileMenu.addEventListener('click', navbarContainer)


    return nav;
}

// Button set to active
const setActiveButton = () => {
 const buttons = document.querySelectorAll('nav-button');

 buttons.forEach((button) =>{
    if(button !==  this){
        button.classList.remove('active');
    } else {
        button.classList.add('active');
    }
 });
 
}
setActiveButton();



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

window.onscroll = function() {createHeader()};
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