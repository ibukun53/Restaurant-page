// createChef function
const createChef = () => {
    const chef = document.createElement("div");
    chef.classList.add("chef");
   
    const chefTitle = document.createElement("h3");
    chefTitle.classList.add("chef-title");
    chefTitle.textContent="Meet our Chef";
    chef.appendChild(chefTitle);
    const chefImageConatianer = document.createElement("div");
    chefImageConatianer.classList.add("chef-Container");
    
    const chefImageConatiner1 = document.createElement("div");
    chefImageConatiner1.classList.add("chef-imgContainer");
    const image1 = document.createElement("img");
    image1.src = "images/img3.jpg";
    image1.alt = "new catherine";
    image1.classList.add("chef-image");

    const chefText1 = document.createElement("div");
    chefText1.classList.add("chef-img");
    const chefHeading1 = document.createElement("h3");
    chefHeading1.classList.add("chef-heading");
    chefHeading1.textContent="New Catherine";

    const chefParagragh1 = document.createElement("h5");
    chefParagragh1.classList.add("chef-paragraph");
    chefParagragh1.textContent="KITCHEN OFFICER";
    chefText1.appendChild(chefHeading1);
    chefText1.appendChild(chefParagragh1);

    chefImageConatiner1.appendChild(image1);
    chefImageConatiner1.appendChild(chefText1);
   // chefImageConatiner 2
    const chefImageConatiner2 = document.createElement("div");
    chefImageConatiner2.classList.add("chef-imgContainer");
    const image2 = document.createElement("img");
    image2.src = "images/img3.jpg";
    image2.alt = "Lindsay Perlen";
    image2.classList.add("chef-image");

    const chefText2 = document.createElement("div");
    chefText2.classList.add("chef-img");
    const chefHeading2 = document.createElement("h3");
    chefHeading2.classList.add("chef-heading");
    chefHeading2.textContent="Lindsay Perlen";

    const chefParagragh2 = document.createElement("h5");
    chefParagragh2.classList.add("chef-paragraph");
    chefParagragh2.textContent="MANAGER";
    chefText2.appendChild(chefHeading2);
    chefText2.appendChild(chefParagragh2);

    chefImageConatiner2.appendChild(image2);
    chefImageConatiner2.appendChild(chefText2);

      // chefImageConatiner 2
      const chefImageConatiner3 = document.createElement("div");
      chefImageConatiner3.classList.add("chef-imgContainer");
      const image3 = document.createElement("img");
      image3.src = "images/img3.jpg";
      image3.alt = "Isabella Grace";
      image3.classList.add("chef-image");
  
      const chefText3 = document.createElement("div");
      chefText3.classList.add("chef-img");
      const chefHeading3 = document.createElement("h3");
      chefHeading3.classList.add("chef-heading");
      chefHeading3.textContent="Isabella Grace";
  
      const chefParagragh3 = document.createElement("h5");
      chefParagragh3.classList.add("chef-paragraph");
      chefParagragh3.textContent="SPECIALIST";
      chefText3.appendChild(chefHeading3);
      chefText3.appendChild(chefParagragh3);
  
      chefImageConatiner3.appendChild(image3);
      chefImageConatiner3.appendChild(chefText3);
   
    chefImageConatianer.appendChild(chefImageConatiner1);
    chefImageConatianer.appendChild(chefImageConatiner2);
    chefImageConatianer.appendChild(chefImageConatiner3);
    chef.appendChild(chefImageConatianer);
  
    return chef;
}
const loadChef = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createChef());
  }

  
export default loadChef;