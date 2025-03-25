const dropdownBtn = document.querySelector(".accessibility-button-header");
const dropdown = document.getElementById("accessibilityDropdown");
const increaseFontBtn = document.getElementById("increaseFontBtn");
const decreaseFontBtn = document.getElementById("decreaseFontBtn");

let fontLevel = 1;
const maxLevel = 4;
const minLevel = 1;
const scaleStep = 0.1;

const originalFontSizes = new Map();

const saveOriginalFontSizes = () => {
  const elements = document.querySelectorAll("*");
  elements.forEach((el) => {
    const computedStyle = window.getComputedStyle(el);
    const fontSize = computedStyle.fontSize;
    if (!originalFontSizes.has(el)) {
      originalFontSizes.set(el, parseFloat(fontSize));
    }
  });
};

const applyFontSizeScaling = () => {
  const scale = 1 + (fontLevel - 1) * scaleStep;
  originalFontSizes.forEach((originalSize, el) => {
    el.style.fontSize = originalSize * scale + "px";
  });
};

increaseFontBtn.addEventListener("click", () => {
  if (fontLevel < maxLevel) {
    fontLevel++;
    applyFontSizeScaling();
  }
});

decreaseFontBtn.addEventListener("click", () => {
  if (fontLevel > minLevel) {
    fontLevel--;
    applyFontSizeScaling();
  }
});

dropdownBtn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

window.addEventListener("DOMContentLoaded", saveOriginalFontSizes);


///////////////////

  // Create and inject grayscale CSS into the page
  const grayscaleCSS = `
    body.grayscale-mode {
      filter: grayscale(100%) !important;
    }
  `;

  const styleTag = document.createElement('style');
  styleTag.innerHTML = grayscaleCSS;
  document.head.appendChild(styleTag);

  // Button functionality: toggle grayscale mode on/off
  const toggleGrayscaleBtn = document.getElementById('toggleGrayscaleBtn');

  toggleGrayscaleBtn.addEventListener('click', () => {
    document.body.classList.toggle('grayscale-mode');
  });