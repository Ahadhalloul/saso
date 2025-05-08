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
    const targetId = button.dataset.target;
    const targetContent = document.getElementById(targetId);
    if (!targetContent) return;

    const currentAccordion = button.closest(".accordion");

    // Check if it's a sub level (1st or 2nd)
    const isSubAccordion =
      currentAccordion.classList.contains("sub-accordion") ||
      currentAccordion.classList.contains("sub-child-accordion") ||
      currentAccordion.classList.contains("sub-sub-child-accordion");

    const openClass = isSubAccordion ? "sub-open" : "open";

    // Close other sections in the same accordion
    currentAccordion.querySelectorAll(".accordion-content").forEach((content) => {
      if (content !== targetContent) {
        content.classList.remove("open", "sub-open");
      }
    });

    // Toggle correct class
    targetContent.classList.toggle(openClass);
  });
});

// ----------------------------// Q&A----------------------------
document.querySelectorAll(".qa-question").forEach((button) => {
  button.addEventListener("click", () => {
    const qaItem = button.closest(".qa-item");
    const isOpen = qaItem.classList.contains("open");

    document.querySelectorAll(".qa-item").forEach((item) => {
      item.classList.remove("open");
    });

    if (!isOpen) {
      qaItem.classList.add("open");
    }
  });
});

// ----------------------------// ----------------------------

function toggleTable(button) {
  const wrapper = button.closest('.dropdown-wrapper');
  wrapper.classList.toggle('open');
}
// ----------------------------// ----------------------------
// ----------------------------// ----------------------------

// Select all buttons that open modals
const openModalButtons = document.querySelectorAll("#openModal");

openModalButtons.forEach((button) => {
  const modalId = button.dataset.modal || "modal"; // default modal
  const targetModal = document.getElementById(modalId);

  if (!targetModal) return;

  // Open modal
  button.addEventListener("click", () => {
    targetModal.classList.add("show");

    // Add ESC key handler when modal opens
    const escHandler = (event) => {
      if (event.key === "Escape") {
        targetModal.classList.remove("show");
        document.removeEventListener("keydown", escHandler);
      }
    };

    document.addEventListener("keydown", escHandler);
  });

  // Close by close buttons inside modal
  const closeButtons = targetModal.querySelectorAll("#closeModal, #closeModalFooter");
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {

      const parentModal = button.closest(".modal");
    if (parentModal) parentModal.classList.remove("show");

    document.querySelectorAll(".modal.show").forEach((m) => {
      if (m !== targetModal) m.classList.remove("show");
    });

      targetModal.classList.remove("show");
    });
  });

  // Close when clicking outside the modal-dialog
  window.addEventListener("click", (event) => {
    if (event.target === targetModal) {
      targetModal.classList.remove("show");
    }
  });
});


// ----------------------------// ----------------------------
// ----------------------------// ----------------------------
// consultant services details cards nav
const consultantServiceCard = document.querySelectorAll(
  ".consultant-service-card"
);

const specialConsultantCardContent = document.getElementById(
  "special-card-content"
);
const businessSupportContent = document.getElementById(
  "business-support-content"
);
const partnershipContent = document.getElementById("partnership-card-content");
consultantServiceCard.forEach((e) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < consultantServiceCard.length; i++) {
      consultantServiceCard[i].classList.add("disabled-card");
    }
    e.classList.remove("disabled-card");
    if (e.id == "consultant-service-card1") {
      specialConsultantCardContent.classList.remove("hide");
      businessSupportContent.classList.add("hide");
      partnershipContent.classList.add("hide");
    } else if (e.id == "consultant-service-card2") {
      businessSupportContent.classList.remove("hide");
      specialConsultantCardContent.classList.add("hide");
      partnershipContent.classList.add("hide");
    } else if (e.id == "consultant-service-card3") {
      partnershipContent.classList.remove("hide");
      specialConsultantCardContent.classList.add("hide");
      businessSupportContent.classList.add("hide");
    }
  });
});
// ----------------------------// ----------------------------
// ----------------------------// ----------------------------
// <!-- Rating -->
document.querySelectorAll(".rating").forEach(rating => {
  rating.addEventListener("click", function (event) {
      let target = event.target.closest("div[data-value]");
      if (target) {
          let numbers = Array.from(this.children);
          
          numbers.forEach(num => num.classList.remove("active"));
          
          target.classList.add("active");
      }
  });
});

document.querySelectorAll(".light-gray-bg button").forEach(button => {
  button.addEventListener("click", function () {

    let parentRow = this.closest(".flex-row"); 
      if (parentRow) {
          let rating = parentRow.querySelector(".rating");
          if (rating) {
              rating.querySelectorAll("div[data-value]").forEach(num => {
                  num.classList.remove("active"); 
              });
          }
      }
  });
});
// ----------------------------// ----------------------------
// ----------------------------// ----------------------------
// const progressIndicator = document.querySelector('.progress-indicator');
// const lis = document.querySelectorAll('.progressbar li');


// const match = [...lis].slice(1).some(li => li.classList.contains('done'));

// if (match) {
//   progressIndicator.classList.add('has-progress');
// } else {
//   progressIndicator.classList.remove('has-progress');
// }

// ----------------------------// ----------------------------
// ----------------------------// ----------------------------

  // Update the visibility status of the "Not selected yet" message
  function updateEmptyMessage(tbody) {
    const dataRows = [...tbody.querySelectorAll("tr")]
      .filter(tr => !tr.classList.contains("no-data-message"));
    const messageRow = tbody.querySelector(".no-data-message");

    if (dataRows.length === 0) {
      messageRow.style.display = "table-row";
    } else {
      messageRow.style.display = "none";
    }
  }

  // Apply the code to every table on the page
  document.querySelectorAll(".table").forEach(table => {
    const tbody = table.querySelector("tbody");

    // Delete a row when the button is clicked
    tbody.addEventListener("click", function (e) {
      if (e.target.closest(".delete-row-btn")) {
        const row = e.target.closest("tr");
        if (row) row.remove();
        updateEmptyMessage(tbody);
      }
    });

    // "Delete All" button
    const deleteAllBtn = table.querySelector(".delete-all-btn");
    if (deleteAllBtn) {
      deleteAllBtn.addEventListener("click", () => {
        [...tbody.querySelectorAll("tr")]
          .filter(tr => !tr.classList.contains("no-data-message"))
          .forEach(row => row.remove());
        updateEmptyMessage(tbody);
      });
    }

    // Initial check on page load
    updateEmptyMessage(tbody);
  });


// ----------------------------// ----------------------------
// ----------------------------// ----------------------------
const datePickerWrapper = document.getElementById("datePickerWrapper");
const datePicker = document.getElementById("datePicker");
const selectedDateEl = document.getElementById("selectedDate");
const calendarDropdown = document.getElementById("calendarDropdown");
const monthYearSelect = document.getElementById("monthYearSelect");
const daysOfWeekEl = document.getElementById("daysOfWeek");
const daysGrid = document.getElementById("daysGrid");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

// Global State
let selectedDate = new Date();
let currentMonth = selectedDate.getMonth();
let currentYear = selectedDate.getFullYear();

// Language Data
const languages = {
  ar: {
    months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    days: ["أحد", "إثن", "ثلا", "أرب", "خم", "جمع", "سبت"],
    format: (date) => date.toLocaleDateString('ar-EG', { weekday: 'long', day: 'numeric', month: 'long' }),
  },
  en: {
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    format: (date) => date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' }),
  }
};

// Get current language
function getCurrentLanguage() {
  return datePickerWrapper.classList.contains("lang-ar") ? "ar" : "en";
}

// Render Calendar
function renderCalendar() {
  const lang = getCurrentLanguage();
  const { months, days, format } = languages[lang];

  selectedDateEl.textContent = format(selectedDate);
  monthYearSelect.innerHTML = "";
  daysOfWeekEl.innerHTML = "";

  // Populate Month-Year Dropdown
  for (let year = currentYear - 5; year <= currentYear + 5; year++) {
    for (let month = 0; month < 12; month++) {
      const option = document.createElement("option");
      option.value = `${year}-${month}`;
      option.textContent = `${months[month]} ${year}`;
      if (year === currentYear && month === currentMonth) option.selected = true;
      monthYearSelect.appendChild(option);
    }
  }

  // Render Days of the Week
  days.forEach(day => {
    const dayEl = document.createElement("span");
    dayEl.textContent = day;
    daysOfWeekEl.appendChild(dayEl);
  });

  // Render Days Grid
  daysGrid.innerHTML = "";
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  const today = new Date(); // Get today's date

  // Previous Month Days
  for (let i = firstDay - 1; i >= 0; i--) {
    const dayButton = document.createElement("button");
    dayButton.textContent = prevMonthDays - i;
    dayButton.classList.add("inactive");
    daysGrid.appendChild(dayButton);
  }

  // Current Month Days
  for (let day = 1; day <= daysInMonth; day++) {
    const dayButton = document.createElement("button");
    dayButton.textContent = day;

    // Add 'today' class if it's today's date
    if (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    ) {
      dayButton.classList.add("today");
    }

    // Add 'selected' class if it's the selected date
    if (
      day === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear()
    ) {
      dayButton.classList.add("selected");
    }

    // Event listener to select the date
    dayButton.addEventListener("click", () => {
      selectedDate = new Date(currentYear, currentMonth, day);

      // Remove 'selected' class from all buttons
      document.querySelectorAll(".days-grid button").forEach(btn => btn.classList.remove("selected"));

      // Add 'selected' class to the clicked button
      dayButton.classList.add("selected");

      selectedDateEl.textContent = format(selectedDate);
      calendarDropdown.style.display = "none";
    });

    daysGrid.appendChild(dayButton);
  }

  // Next Month Days to Fill
  const totalCells = daysGrid.children.length;
  const remainingCells = 42 - totalCells; // 6 rows * 7 days

  for (let day = 1; day <= remainingCells; day++) {
    const dayButton = document.createElement("button");
    dayButton.textContent = day;
    dayButton.classList.add("inactive");
    daysGrid.appendChild(dayButton);
  }
}

// Event Listeners
datePicker.addEventListener("click", (e) => {
  e.stopPropagation();
  calendarDropdown.style.display = calendarDropdown.style.display === "block" ? "none" : "block";
});

monthYearSelect.addEventListener("change", (e) => {
  const [year, month] = e.target.value.split("-").map(Number);
  currentYear = year;
  currentMonth = month;
  renderCalendar();
});

prevMonthBtn.addEventListener("click", () => {
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  if (currentMonth === 11) currentYear--;
  renderCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  if (currentMonth === 0) currentYear++;
  renderCalendar();
});

function toggleLanguage() {
  datePickerWrapper.classList.toggle("lang-ar");
  datePickerWrapper.classList.toggle("lang-en");
  renderCalendar();
}

document.addEventListener("click", (e) => {
  if (!datePickerWrapper.contains(e.target)) {
    calendarDropdown.style.display = "none";
  }
});

// Initial Render
renderCalendar();



// ----------------------------// ----------------------------
// ----------------------------// ----------------------------
// <!-- Toast -->
function closeToast() {
  document.getElementById("toast").classList.add("hidden");
}

setTimeout(closeToast, 5000); // Auto close after 5 seconds
// ----------------------------// ----------------------------
// ----------------------------// ----------------------------
// <!-- more time dropdown box toggle -->
const moreTimeBtn = document.querySelector("#more-time-btn");
const moreTimeBox = document.querySelector("#more-time-box");

moreTimeBtn.addEventListener("click", () => {
  moreTimeBox.classList.remove("hide");
});

window.addEventListener("click", function (e) {
  if (!moreTimeBox.contains(e.target) && !moreTimeBtn.contains(e.target)) {
    moreTimeBox.classList.add("hide");
  }
});
// ----------------------------// ----------------------------
// ----------------------------// ----------------------------
window.addEventListener('DOMContentLoaded', () => {
const progressIndicator = document.querySelector('.progress-indicator');
const lis = document.querySelectorAll('.progressbar li');
const match = [...lis].slice(1).some(li => li.classList.contains('done'));

if (match) {
  progressIndicator.classList.add('has-progress');
} else {
  progressIndicator.classList.remove('has-progress');
}
});
// ----------------------------// ----------------------------

