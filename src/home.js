 function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const homeSpan = document.createElement('div');
    homeSpan.classList.add('homespan');
   
    const homeBar =  document.createElement('span');
    homeBar.classList.add('homebar');
    homeBar.textContent= '';

    const h4 = document.createElement('h4');
    h4.classList.add('h4');
    h4.textContent ='HELLO, NEW FRIEND';
   
    homeSpan.appendChild(homeBar);
    homeSpan.appendChild(h4);

   const paragraph = document.createElement('p');
    paragraph.classList.add('p')
    paragraph.textContent='Feels like Home,tastes like a Paradise.'
    
    const restaurantReserve = document.createElement('h3');
    restaurantReserve.classList.add('home-restaurantReserve');
    restaurantReserve.textContent='Reservation';
    

    home.appendChild(homeSpan);
    home.appendChild(paragraph);
    home.appendChild(restaurantReserve);

    return home;

}  


function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  }

  export default loadHome;