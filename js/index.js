const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Nav Links
const navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = 'Services';
navLinks[1].textContent = 'Product';
navLinks[2].textContent = 'Vision';
navLinks[3].textContent = 'Features';
navLinks[4].textContent = 'About';
navLinks[5].textContent = 'Contact';

// Can't figure out how to add color to nav besides this
navLinks[0].style.color = "red";
navLinks[1].style.color = "red";
navLinks[2].style.color = "red";
navLinks[3].style.color = "red";
navLinks[4].style.color = "red";
navLinks[5].style.color = "red";

// Add to nav
const navAdd1 = navLinks[0].cloneNode(true);
const navAdd2 = navLinks[0].cloneNode(true);
navAdd1.textContent = "Oranges";
navAdd2.textContent = "Bananas"
document.querySelector("nav").appendChild(navAdd1);
document.querySelector("nav").prepend(navAdd2);

// section.cta
  // Text
const sectionCTA = document.querySelector(".cta-text h1");
sectionCTA.textContent = siteContent["cta"]["h1"];

  //Button
const buttonCTA = document.querySelector("button");
buttonCTA.textContent = siteContent["cta"]["button"];
  // Image
const imageCTA = document.querySelector("#cta-img");
imageCTA.src = siteContent["cta"]["img-src"];


// Main Content Headers
const mainContentHeaders = document.querySelectorAll(".main-content .text-content h4");
mainContentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
mainContentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
mainContentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
mainContentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
mainContentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

// Main Content Image
const mainImage = document.querySelector("#middle-img");
mainImage.src = siteContent["main-content"]["middle-img-src"];

// Main Content Text
const mainContentText = document.querySelectorAll(".main-content .text-content p");
mainContentText[0].textContent = siteContent["main-content"]["features-content"];
mainContentText[1].textContent = siteContent["main-content"]["about-content"];
mainContentText[2].textContent = siteContent["main-content"]["services-content"];
mainContentText[3].textContent = siteContent["main-content"]["product-content"];
mainContentText[4].textContent = siteContent["main-content"]["vision-content"];

// Contact
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent["contact"]["address"]
contactText[1].textContent = siteContent["contact"]["phone"]
contactText[2].textContent = siteContent["contact"]["email"]

// Footer
const copyright = document.querySelector("footer p");
copyright.textContent = siteContent["footer"]["copyright"];