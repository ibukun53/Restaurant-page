
const createContactDetails = () => {
     const contactDetails = document.createElement("div");
     contactDetails.classList.add("contact-details");
     
     const contactDetailsText = document.createElement("h4");
     contactDetailsText.classList.add("contact-details-text");
     contactDetailsText.textContent="Contact Us"
     
     contactDetails.appendChild(contactDetailsText);
     
     const contactDetailsForm = document.createElement("form");
     contactDetailsForm.action = "https://formspree.io/f/mbjwdkeq";
     contactDetailsForm.method = "post";
     contactDetailsForm.classList.add('contact-details-form');
     
     const contactDetailsName = document.createElement("input");
     contactDetailsName.type ="text";
     contactDetailsName.name ="name";
     contactDetailsName.id ="name";
     contactDetailsName.placeholder ="Full name";
     contactDetailsName.required ="";
     contactDetailsName.maxlength ="30";
     contactDetailsName.classList.add('contact-details-name');
     contactDetailsForm.appendChild(contactDetailsName);

     const contactDetailsEmail = document.createElement("input");
     contactDetailsEmail.type ="text";
     contactDetailsEmail.name ="email";
     contactDetailsEmail.id = "email";
     contactDetailsEmail.placeholder ="Email Address";
     contactDetailsEmail.required ="";
     contactDetailsEmail.maxlength ="30";
     contactDetailsEmail.classList.add('contact-details-email');
     contactDetailsForm.appendChild(contactDetailsEmail);
     
     const contactDetailsSubject = document.createElement("input");
     contactDetailsSubject.type ="text";
     contactDetailsSubject.name ="subject";
     contactDetailsSubject.placeholder ="Subject";
     contactDetailsSubject.required ="";
     contactDetailsSubject.id ="subject";
     contactDetailsSubject.maxlength ="50";
     contactDetailsSubject.classList.add('contact-details-subject');
     contactDetailsForm.appendChild(contactDetailsSubject);

     const contactDetailsMesssage = document.createElement("input");
     contactDetailsMesssage.type ="text";
     contactDetailsMesssage.name ="message";
     contactDetailsMesssage.id ="message";
     contactDetailsMesssage.rows ="5";
     contactDetailsMesssage.placeholder ="Tell about your project";
     contactDetailsMesssage.required ="";
     contactDetailsMesssage.maxlength ="250";
     contactDetailsMesssage.classList.add('contact-details-message');
     contactDetailsForm.appendChild(contactDetailsMesssage);

     const contactDetailsSubmitContainer = document.createElement("div");
     contactDetailsSubmitContainer.classList.add('contact-submit-container')
     const contactDetailsSubmit = document.createElement("h3");
     contactDetailsSubmit.textContent ="Send Message";
     contactDetailsSubmit.classList.add('contact-details-submit');
     contactDetailsSubmitContainer.appendChild(contactDetailsSubmit);
     contactDetailsForm.appendChild(contactDetailsSubmitContainer);

     contactDetails.appendChild(contactDetailsForm);
     return contactDetails;
}

const createContactLocattion = () =>{
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    
    const contactLocation = document.createElement("img");
    contactLocation.src = "images/img3.jpg";
    contactLocation.alt = "map";
    contactLocation.classList.add("contact-location");
    
    contactContainer.appendChild(contactLocation);
    contactContainer.appendChild(createContactDetails());
    return contactContainer;
}

const createContactInformation = () => {
    const contactInformationContainer = document.createElement("div");
    contactInformationContainer.classList.add('contact-information-container');

    const contactInformationContainer1 = document.createElement("div");
    contactInformationContainer1.classList.add('contact-information-container1');
    
    const contactInformationFindUs = document.createElement("div");
    contactInformationFindUs.classList.add('contact-information-findus');
   
    const contactFindUs = document.createElement("h4");
    contactFindUs.classList.add('contact-information-findusText');
    contactFindUs.textContent="Find us";
   
    const contactFindUsParagraph = document.createElement("p");
    contactFindUsParagraph.classList.add('contact-information-findusP');
    contactFindUsParagraph.textContent="No 9 Zone D Ori ile,Ikumapayi Olodo Ibadan Oyo State ";
    contactInformationFindUs.appendChild(contactFindUs);
    contactInformationFindUs.appendChild(contactFindUsParagraph);
    contactInformationContainer1.appendChild(contactInformationFindUs);

    const contactInformationReservation = document.createElement("div");
    contactInformationReservation .classList.add('contact-information-reservation');
   
    const contactReservation = document.createElement("h4");
    contactReservation.classList.add('contact-information-reservationText');
    contactReservation.textContent="Reservation";
   
    const contactReservationParagraph = document.createElement("h4");
    contactReservationParagraph.classList.add('contact-information-reservationP');
    contactReservationParagraph.textContent="070-1372-9933 / 081-6976-9501  debbyblessing234@gmail.com";
    contactInformationReservation.appendChild(contactReservation);
    contactInformationReservation.appendChild(contactReservationParagraph);
    contactInformationContainer1.appendChild(contactInformationReservation);


    const contactInformationContainer2 = document.createElement("div");
    contactInformationContainer2.classList.add('contact-information-container2');
    
    const contactInformationHour = document.createElement("div");
    contactInformationHour.classList.add('contact-information-hour');

    const contactInformationHourTitle = document.createElement("h4");
    contactInformationHourTitle.classList.add('contact-information-hour-title');
    contactInformationHourTitle.textContent="Open Hours"

    const contactInformationHourParagraph1 = document.createElement("p");
    contactInformationHourParagraph1.classList.add('contact-information-hour-paragraph1');
    contactInformationHourParagraph1.textContent="Monday: Closed"

    const contactInformationHourHead1 = document.createElement("h5");
    contactInformationHourHead1.classList.add('contact-information-hour-paragraph');
    contactInformationHourHead1.textContent="Tuesday to Friday";
    const contactInformationHourParagraph2 = document.createElement("p");
    contactInformationHourParagraph2.classList.add('contact-information-hour-paragraph2');
    contactInformationHourParagraph2.textContent="7:00 AM - 9:00 PM"
    const contactInformationHourHead2 = document.createElement("h5");
    contactInformationHourHead2.classList.add('contact-information-hour-paragraph');
    contactInformationHourHead2.textContent="Saturaday - Sunday";
    const contactInformationHourParagraph3 = document.createElement("p");
    contactInformationHourParagraph3.classList.add('contact-information-hour-paragraph3');
    contactInformationHourParagraph3.textContent="7:00 AM -  10:00 PM"

    contactInformationHour.appendChild(contactInformationHourTitle);
    contactInformationHour.appendChild(contactInformationHourParagraph1);
    contactInformationHour.appendChild(contactInformationHourHead1);
    contactInformationHour.appendChild(contactInformationHourParagraph2);
    contactInformationHour.appendChild(contactInformationHourHead2);
    contactInformationHour.appendChild(contactInformationHourParagraph3);

    contactInformationContainer2.appendChild(contactInformationHour)

    const contactInformationMore = document.createElement("div");
    contactInformationMore.classList.add('contact-information-more');
    const contactSocialMedia = document.createElement("div");
    contactSocialMedia.classList.add('contact-social-media');
    const  githubIcon = document.createElement('i');
    githubIcon.classList.add('fab');
    githubIcon.classList.add('fa-github');

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/ibukun53/'

    githubIcon.appendChild(githubLink);
  
    const linkedinIcon = document.createElement('i');
    linkedinIcon.classList.add('fab');
    linkedinIcon.classList.add('fa-linkedin');
    const linkedinLink = document.createElement('a');
    linkedinLink.href = 'https://www.linkedin.com/in/ibukun53/'
    linkedinIcon.appendChild(linkedinLink);

    const whatsappIcon = document.createElement('i');
    whatsappIcon.classList.add('fab');
    whatsappIcon.classList.add('fa-linkedin');
    const whatsappLink = document.createElement('a');
    whatsappLink.href = 'https://wa.me/2347013729933/'
    whatsappIcon.appendChild(whatsappLink);

    const facebookIcon = document.createElement('i');
    facebookIcon.classList.add('fab');
    facebookIcon.classList.add('fa-linkedin');
    const facebookLink = document.createElement('a');
    facebookLink.href = 'https://web.facebook.com/debby.blessing.1460/'
    facebookIcon.appendChild(facebookLink);

    const telegramIcon = document.createElement('i');
    telegramIcon.classList.add('fab');
    telegramIcon.classList.add('fa-linkedin');
    const telegramLink = document.createElement('a');
    telegramLink.href = 'https://t.me/debbie1234/'
    telegramIcon.appendChild(telegramLink);
   
   
    
    contactSocialMedia.appendChild(githubIcon);

    contactSocialMedia.appendChild(linkedinIcon);
    contactInformationMore.appendChild(contactSocialMedia);
    contactInformationContainer2.appendChild(contactInformationMore )
    contactInformationContainer.appendChild(contactInformationContainer1);
    contactInformationContainer.appendChild(contactInformationContainer2);
     
    return contactInformationContainer;
}
// createChef function
const createContact = () => {
    const contact = document.createElement("div");
    contact.classList.add("contact");
   
    contact.appendChild(createContactLocattion());
    contact.appendChild(createContactInformation());
    return contact;
}

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());
  }

  export default loadContact;