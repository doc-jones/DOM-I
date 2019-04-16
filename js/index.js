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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
logo.alt = "Great Idea! Company logo.";
console.log(logo);


// navItems.style.marginTop = "35px";


const navList = document.querySelectorAll("header nav a");
navList.forEach((item, index) => {
  item.textContent = siteContent['nav'][`nav-item-${1 + index}`]
})



const headLine = document.querySelector(".cta-text h1");
headLine.textContent = siteContent['cta']["h1"];
// console.log(headLine);

const btn = document.querySelector(".cta button");
btn.textContent = siteContent['cta']["button"];
// console.log(btn);

const subHeads = document.querySelectorAll('.main-content h4');
// console.log(subHeads);
subHeads[0].textContent = siteContent['main-content']['features-h4'];
subHeads[1].textContent = siteContent['main-content']['about-h4'];
subHeads[2].textContent = siteContent['main-content']['services-h4'];
subHeads[3].textContent = siteContent['main-content']['product-h4'];
subHeads[4].textContent = siteContent['main-content']['vision-h4']

const topContent = document.querySelectorAll(".top-content .text-content p");
  topContent[0].textContent = siteContent["main-content"]["features-content"];
  topContent[1].textContent = siteContent["main-content"]["about-content"];

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])
ctaImg.alt = "Image of a code snippet.";

const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
midImg.alt = "Image of code snippets across the screen";

const bottomContent = document.querySelectorAll(".bottom-content .text-content p");
  bottomContent[0].textContent = siteContent["main-content"]["services-content"];
  bottomContent[1].textContent = siteContent["main-content"]["product-content"];
  bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

const contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = siteContent['contact']["contact-h4"];

const contactList = document.querySelectorAll(".contact p");
// console.log(contactList)
contactList[0].textContent = siteContent["contact"]["address"];
contactList[1].textContent = siteContent["contact"]["phone"];
contactList[2].textContent = siteContent["contact"]["email"];

const footer = document.querySelector("footer p");
console.log(footer);
  footer.textContent = siteContent["footer"]["copyright"];