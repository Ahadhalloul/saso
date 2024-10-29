// collapse sidebar menu
let mainSidebar = document.getElementById("main-sidebar");
let collapsedSidebar = document.getElementById("collapsed-sidebar");
let collapseIcons = document.querySelectorAll(".collapse-icon");

collapseIcons.forEach((element) => {
  element.addEventListener("click", () => {
    mainSidebar.classList.toggle("hide");
    collapsedSidebar.classList.toggle("hide");
  });
});
// ----------------------
