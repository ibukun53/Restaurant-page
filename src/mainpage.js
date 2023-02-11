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

const StartUpPage = () => {
    const content = document.getElementById("content");
    content.appendChild(createHeader());
}

export default StartUpPage;