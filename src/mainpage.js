const createHeader = () => {
 const header = document.createElement('header');
 header.classList.add(header);

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