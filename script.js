const glassContainerOutside = document.getElementById('glass-container-outside');
const glassContainerInside = document.getElementById('glass-container-inside');

glasssGenerator();

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
      Math.floor(Math.random() * (300-100) + 10) + "s";

    glass.style.setProperty("--random-x", Math.random() > 0.5 ? 1 : -1);
    glass.style.setProperty("--random-y", Math.random() > 0.5 ? 1 : -1);
      
    glass.style.setProperty("--random-angle", 360 - Math.floor(Math.random() * 360) + "deg");

    if (Math.floor(Math.random() * 10) % 2 === 0) {
      glassContainerInside.appendChild(glass);
    } else {
      glassContainerOutside.appendChild(glass);
    }
  }
}
