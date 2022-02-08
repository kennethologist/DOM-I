const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const navigation = document.querySelector("nav");
const navLinks = navigation.querySelectorAll("a");

let linkNo = 1;
navLinks.forEach((link) => {
  link.textContent = siteContent["nav"]["nav-item-" + linkNo];
  link.classList.add("italic");
  linkNo += 1;
});

const ctaSection = document.querySelector(".cta");
const ctaH1 = ctaSection.querySelector("h1");
const ctaButton = ctaSection.querySelector("button");

ctaH1.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];

const mainSectionTopContent = document.querySelector(".main-content .top-content");

const featuresH4 =  mainSectionTopContent.querySelector(".text-content:nth-of-type(1) h4");
const featuresContent =  mainSectionTopContent.querySelector(".text-content p:nth-of-type(1)");
featuresH4.textContent = siteContent["main-content"]["features-h4"];
featuresContent.textContent = siteContent["main-content"]["features-content"];

const aboutH4 =  mainSectionTopContent.querySelector(".text-content:nth-of-type(2) h4");
const aboutContent =  mainSectionTopContent.querySelector(".text-content:nth-of-type(2) p");
aboutH4.textContent = siteContent["main-content"]["about-h4"];
aboutContent.textContent = siteContent["main-content"]["about-content"];

const mainSectionBottomContent = document.querySelector(".main-content .bottom-content");

const servicesH4 = mainSectionBottomContent.querySelector(".text-content:nth-of-type(1) h4");
const servicesContent = mainSectionBottomContent.querySelector(".text-content:nth-of-type(1) p");
servicesH4.textContent = siteContent["main-content"]["services-h4"];
servicesContent.textContent = siteContent["main-content"]["services-content"];

const productH4 = mainSectionBottomContent.querySelector(".text-content:nth-of-type(2) h4");
const productContent = mainSectionBottomContent.querySelector(".text-content:nth-of-type(2) p");
productH4.textContent = siteContent["main-content"]["product-h4"];
productContent.textContent = siteContent["main-content"]["product-content"];

const visionH4 = mainSectionBottomContent.querySelector(".text-content:nth-of-type(3) h4");
const visionContent = mainSectionBottomContent.querySelector(".text-content:nth-of-type(3) p");
visionH4.textContent = siteContent["main-content"]["vision-h4"];
visionContent.textContent = siteContent["main-content"]["vision-content"];


const contactSection = document.querySelector(".contact");
const contactH4 = contactSection.querySelector("h4");
const contactp1 = contactH4.nextElementSibling;
const contactp2 = contactp1.nextElementSibling;
const contactp3 = contactp2.nextElementSibling;

contactH4.textContent = siteContent["contact"]["contact-h4"];
contactp1.textContent = siteContent["contact"]["address"];
contactp2.textContent = siteContent["contact"]["phone"];
contactp3.textContent = siteContent["contact"]["email"];

const footerLink = document.querySelector("footer a");
footerLink.textContent = siteContent["footer"]["copyright"];
footerLink.classList.add("bold");

const imgLogo = document.querySelector("#logo-img");
imgLogo.src = siteContent["images"]["logo-img"];

const imgCTA = document.querySelector("#cta-img");
imgCTA.src = siteContent["images"]["cta-img"];

const imgMiddle = document.querySelector("#middle-img");
imgMiddle.src = siteContent["images"]["accent-img"];