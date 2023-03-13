const createAbout = () => {
    const about = document.createElement("div");
    about.classList.add("about");

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const aboutText =  document.createElement("div");
    aboutText.classList.add("about-text");

    const aboutHeader =  document.createElement("h5");
    aboutHeader.classList.add("about-header");
    aboutHeader.textContent='READ OUR STORY';

    const aboutSubHeading =  document.createElement("h4");
    aboutSubHeading .classList.add("about-subheader");
    aboutSubHeading.textContent='We have been making the delicious food since 1999';

    const aboutParagraph =  document.createElement("p");
    aboutParagraph .classList.add("about-paragraph");
    aboutParagraph.textContent="In todays global economy, the primary aim for production of any service or commodity is to ensure such reach the ultimate consumers across the global market.Reaching markets that transcends beyond local country of productions often presents multiple level of challenges in terms of distribution.";
    const aboutParagraph2 =  document.createElement("p");
    aboutParagraph2 .classList.add("about-paragraph");
    aboutParagraph2.textContent="In todays global economy, the primary aim for production of any service or commodity is to ensure such reach the ultimate consumers across the global market.Reaching markets that transcends beyond local country of productions often presents multiple level of challenges in terms of distribution. ";
    aboutText.appendChild(aboutHeader);
    aboutText.appendChild(aboutSubHeading);
    aboutText.appendChild(aboutParagraph);
    aboutText.appendChild(aboutParagraph2);

    const aboutImage =  document.createElement("div");
    aboutImage.classList.add("about-imgcontainer");

    const image = document.createElement("img");
    image.src = "images/img12.jpg";
    image.alt = "Chef";
    image.classList.add("about-image");
    aboutImage.appendChild(image);

    aboutContainer.appendChild(aboutText);
    aboutContainer.appendChild(aboutImage);
    about.appendChild(aboutContainer)
    return about;
}

const loadAbout = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createAbout());
  }

  
export default loadAbout;