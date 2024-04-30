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

// GLOBAL FUNCTION CALLS
glasssGenerator();
resetClasses();

// FUNCTION DECLARATIONS
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

// INTERACTJS
interact(".draggable").draggable({
  inertia: false,
  modifiers: [
    interact.modifiers.restrictRect({
      endOnly: true,
    }),
  ],
  autoScroll: true,
  listeners: {
    move: dragMoveListener,
    end: function (event) {
      event.target.style.transform = "none";
      event.target.setAttribute("data-x", 0);
      event.target.setAttribute("data-y", 0);
    },
  },
});

interact(".draggable").styleCursor(false);

interact(".draggable").on("dragstart", (event) => {
  console.log(event);
});

function dragMoveListener(event) {
  var target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.transform = "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

// EVENTS
const cardArray = [pros, tools, studies];

cardArray.forEach((card, index) => {
  card.addEventListener("click", () => {
    titleContainer.classList.add("display-info");
    mainContainer.classList.add("display-info");

    cardArray.forEach((card_item, index_item) => {
      if (index_item === index) {
        card_item.classList.add("active");
      } else {
        card_item.classList.remove("active");
      }
    });

    setTimeout(() => {
      mainContainer.classList.add("timeOut-css");
      titleContainer.classList.add("timeOut-css");

      notInitials.forEach((notInitial) => {
        notInitial.style = "display: none;"
      });

      initials.style = "display: block;";
    }, 2800);
  });

  card.addEventListener("mousedown", (event) => {
    card.vanillaTilt.destroy();
  });

  card.addEventListener("mouseup", () => {
    VanillaTilt.init(card);
  });
});
