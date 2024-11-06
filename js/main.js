// collapse sidebar menu toggle
let mainSidebar = document.getElementById("main-sidebar");
let collapsedSidebar = document.getElementById("collapsed-sidebar");
let collapseIcons = document.querySelectorAll(".collapse-icon");

let mdScreenMenuIcon = document.querySelector(".md-screen-menu-icon");
let overlayBg = document.querySelector(".overlay-bg");
let body = document.querySelector("body");
let closeMenu = document.querySelector(".sm-screen-close-icon");

collapseIcons.forEach((element) => {
  element.addEventListener("click", () => {
    mainSidebar.classList.toggle("hide");
    collapsedSidebar.classList.toggle("hide");
  });
});

closeMenu.addEventListener("click", () => {
  overlayBg.classList.remove("show");
  mainSidebar.classList.remove("show");
  body.classList.remove("stop-scroll");
});
//  smaller screen menu toggle
mdScreenMenuIcon.addEventListener("click", () => {
  mainSidebar.classList.add("show");
  overlayBg.classList.add("show");
  body.classList.add("stop-scroll");
});
// ----------------------------// ----------------------------
// move active style on the menu list items
let menuList = document.querySelectorAll(
  ".sidebar-container .menu-content > ul > li > a"
);
let subMenuList = document.querySelectorAll(
  ".sidebar-container .sub-menu-list li a"
);

let servicesSubMenu = document.querySelector("#services-sub-menu");
let servicesList = document.querySelector("#services-list");

menuList.forEach((element) => {
  element.addEventListener("click", () => {
    menuList.forEach((e) => {
      e.classList.remove("active");
    });
    subMenuList.forEach((e) => {
      e.classList.remove("active");
    });
    element.classList.add("active");
  });
});

subMenuList.forEach((element) => {
  element.addEventListener("click", () => {
    subMenuList.forEach((e) => {
      e.classList.remove("active");
    });
    element.classList.add("active");
  });
});

// services sub menu expand
servicesSubMenu.addEventListener("click", () => {
  servicesList.classList.toggle("hide");
});

// ----------------------------// ----------------------------
// ----------------------------// ----------------------------
