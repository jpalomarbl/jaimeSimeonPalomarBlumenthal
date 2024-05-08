// ELEMENT SELECTORS
const glassContainerOutside = document.getElementById(
  "glass-container-outside"
);
const glassContainerInside = document.getElementById("glass-container-inside");
const mainContainer = document.getElementById("main-container");
const titleContainer = document.getElementById("title-container");
const pros = document.getElementById("pros");
const tools = document.getElementById("tools");
const studies = document.getElementById("studies");
const notInitials = document.querySelectorAll("h1:not(.initials)");
const initials = document.querySelector("h1.initials");
const infoParagraphs = document.querySelectorAll(
  "div#main-container > section#info > div.text > p"
);
const cardHeaders = document.querySelectorAll(
  "div#main-container > div.card > h2"
);
const contactLink = document.getElementById("contact");

const info = {
  pros: [
    "I consider myself a very good team worker and a very innovative person, who's able to find alternate solutions to problems.",
    "I also think of myself as a creative person, because I always try new methods when facing designs, cooking recipies, making music, etc.",
  ],
  tools: [
    "As an IT Engineer, I'm able to quickly learn any new technologies or tools that I might need to use.",
    "But as today, I'm proficient in Front End Web Development, so I know my way in HTML5, CSS3, JavaScript, TypeScript and PHP. And as far as frameworks are concerned, I've developed websites using Vue2 and Vue3, React, Drupal and Laravel.",
  ],
  studies: [
    "IT Engineering Degree at the University of La Laguna (2018 - 2023)",
    "Websites and Web Applications Development Master's Degree at the Online University of Catalonia (2023 - now)",
  ],
};

// GLOBAL FUNCTION CALLS
glasssGenerator();
resetClasses();
changeTexts();

// FUNCTION DECLARATIONS
function populateInfoParagraphs(id) {
  infoParagraphs.forEach((paragraph, index) => {
    paragraph.innerText = info[id][index];
  });
}

function changeTexts() {
  if (window.innerWidth < 1000) {
    cardHeaders[0].innerText = "Pros";
    cardHeaders[1].innerText = "Tools";
    cardHeaders[2].innerText = "Studies";

    contactLink.innerText = "Click to send an email";
  } else {
    cardHeaders[0].innerText = "What am I good at?";
    cardHeaders[1].innerText = "The tools I know";
    cardHeaders[2].innerText = "My studies";

    contactLink.innerText = "palomarblumenthaljaimesimeon@gmail";
  }
}

function resetClasses() {
  mainContainer.classList.remove("display-info");
  titleContainer.classList.remove("display-info");
}

function glasssGenerator() {
  let scrollHeight = Math.max(
    glassContainerOutside.scrollHeight,
    document.documentElement.scrollHeight,
    glassContainerOutside.offsetHeight,
    document.documentElement.offsetHeight,
    glassContainerOutside.clientHeight,
    document.documentElement.clientHeight
  );

  for (let i = 0; i < 50; i++) {
    let glass = document.createElement("div");
    glass.className = "glass";
    glass.style.top = Math.random() * scrollHeight + "px";
    glass.style.left = Math.random() * window.innerWidth + "px";
    glass.style.animationDuration =
      Math.floor(Math.random() * (300 - 100) + 10) + "s";

    glass.style.setProperty("--random-x", Math.random() > 0.5 ? 1 : -1);
    glass.style.setProperty("--random-y", Math.random() > 0.5 ? 1 : -1);

    glass.style.setProperty(
      "--random-angle",
      360 - Math.floor(Math.random() * 360) + "deg"
    );

    if (Math.floor(Math.random() * 10) % 2 === 0) {
      glassContainerInside.appendChild(glass);
    } else {
      glassContainerOutside.appendChild(glass);
    }
  }
}

// EVENTS
const cardArray = [pros, tools, studies];

cardArray.forEach((card, index) => {
  card.addEventListener("click", () => {
    titleContainer.classList.add("display-info");
    mainContainer.classList.add("display-info");

    populateInfoParagraphs(card.id);

    cardArray.forEach((card_item, index_item) => {
      if (index_item === index) {
        card_item.classList.add("active");
      } else {
        card_item.classList.remove("active");
      }
    });

    if (window.innerWidth > 1000) {
      setTimeout(() => {
        mainContainer.classList.add("timeOut-css");
        titleContainer.classList.add("timeOut-css");

        notInitials.forEach((notInitial) => {
          notInitial.style = "display: none;";
        });
        initials.style = "display: block;";
      }, 2800);
    } else {
      mainContainer.classList.add("timeOut-css");
      titleContainer.classList.add("timeOut-css-mobile");

      document.body.className = "mobile";
    }
  });
});

window.addEventListener("resize", changeTexts);
