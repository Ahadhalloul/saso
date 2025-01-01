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
let subMenuArrow = document.querySelector(
  ".sidebar-container .menu-list li a .sub-menu-icon img "
);
menuList.forEach((element) => {
  element.addEventListener("click", () => {
    menuList.forEach((e) => {
      e.classList.remove("active");
    });

    element.classList.add("active");

    if (!(element.id == "services-sub-menu")) {
      servicesList.classList.add("hide");
      subMenuArrow.classList.remove("flip-img-y");
    } else if (element.id == "services-sub-menu") {
      servicesList.classList.toggle("hide");
      subMenuArrow.classList.toggle("flip-img-y");
    }
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

// ----------------------------// Mlewis ----------------------------
// Tabs Functionality
const tabButtons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and tabs
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));

    // Add active class to the clicked button and corresponding tab
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

// Collapsible Sections Functionality
// document.querySelectorAll(".accordion-header").forEach(button => {
//   button.addEventListener("click", () => {
//       const targetContent = document.getElementById(button.dataset.target);

//       // Close other open accordions
//       document.querySelectorAll(".accordion-content").forEach(content => {
//           if (content !== targetContent) {
//               content.classList.remove("open");
//           }
//       });

//       // Toggle the clicked accordion content
//       targetContent.classList.toggle("open");
//   });
// });

document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const targetContent = document.getElementById(button.dataset.target);

    // Close other open accordions
    document.querySelectorAll(".accordion-content").forEach((content) => {
      if (content !== targetContent) {
        content.classList.remove("open");
      }
    });

    // Toggle the clicked accordion content
    targetContent.classList.toggle("open");
  });
});

// Get the modal elements
const modal = document.getElementById("modal");
const openModalButtons = document.querySelectorAll("#openModal"); // Select all buttons with id "openModal"
const closeModalButtons = document.querySelectorAll(
  "#closeModal, #closeModalFooter"
);

// Open modal function
openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("show");
  });
});

// Close modal function
closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.remove("show");
  });
});

// Close modal when clicking outside the modal dialog
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

// ----------------------------// ----------------------------
//--------------- popup cards ------------
const addTimeCard = document.querySelector("#select-time-popup");
const successAddCard = document.querySelector("#success-add-popup");
const addTimeBtn = document.querySelector("#add-time-btn");

addTimeBtn.addEventListener("click", () => {
  addTimeCard.classList.add("hide");
  successAddCard.classList.remove("hide");
  console.log("test");
});
// --------------------------------------
// -------------------------------------
