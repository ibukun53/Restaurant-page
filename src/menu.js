const createMenu= () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuTitle = document.createElement("h3");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent="Our Menus";
    menu.appendChild(menuTitle);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuImageContainer = document.createElement("div");
    menuImageContainer.classList.add("menu-imagecontainer");
    
    const image1 = document.createElement("img");
    image1.src = "images/img3.jpg";
    image1.alt = "food";
    image1.classList.add("menu-image");
    menuImageContainer.appendChild(image1);

    const image2 = document.createElement("img");
    image2.src = "images/img3.jpg";
    image2.alt = "food";
    image2.classList.add("menu-image");
    menuImageContainer.appendChild(image2);

    const image3 = document.createElement("img");
    image3.src = "images/img3.jpg";
    image3.alt = "food";
    image3.classList.add("menu-image");
    menuImageContainer.appendChild(image3);

    const image4 = document.createElement("img");
    image4.src = "images/img3.jpg";
    image4.alt = "food";
    image4.classList.add("menu-image");
    menuImageContainer.appendChild(image4);
    
    const image5 = document.createElement("img");
    image5.src = "images/img3.jpg";
    image5.alt = "food";
    image5.classList.add("menu-image");
    menuImageContainer.appendChild(image5);

    const image6 = document.createElement("img");
    image6.src = "images/img3.jpg";
    image6.alt = "food";
    image6.classList.add("menu-image");
    menuImageContainer.appendChild(image6);



    
    
    const menuTextContainer = document.createElement("div");
    menuTextContainer.classList.add("menu-textcontainer");

    const menuHeading = document.createElement("h4");
    menuHeading.classList.add("menu-head");
    menuHeading.textContent="Testimonials";

    const menuParagraph = document.createElement("p");
    menuParagraph.classList.add("menu-paragraph");
    menuParagraph.textContent="In todays global economy, the primary aim for production of any service or commodity isIn todays global economy, the primary aim for production of any service or commodity isIn todays global economy, the primary aim for production of any service or commodity isIn todays global economy, the primary aim for production of any service or commodity iIn todays global economy, the primary aim for production of any service or commodity isIn todays global economy, the primary aim for production of any service or commodity i";
    
    
    menuTextContainer.appendChild(menuHeading);
    menuTextContainer.appendChild(menuParagraph);
    menuContainer.appendChild(menuImageContainer);


    menuContainer.appendChild(menuTextContainer);
    menu.appendChild(menuContainer);
    return menu
    }
    
const loadMenu = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }

  
export default loadMenu;