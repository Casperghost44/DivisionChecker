"use strict";
const inpData = document.querySelector(".inp-num");
const numArr = document.querySelectorAll(".num-box");
const btnAdd = document.querySelectorAll(".last-in-row");
const btnRemove = document.querySelectorAll(".btn-hide");
const containerEl = document.querySelector(".container");
const spanEls = document.querySelectorAll("span");
const darkIcon = document.querySelector(".dark-icon");
const checkBtn = document.querySelector("#switch");
const description = document.querySelector(".short-description");
const footerEl = document.querySelector("footer");
const cvLink = document.querySelector(".cv-link");

inpData.addEventListener("keyup", function () {
  clearNums();
  const numVal = Number(inpData.value);
  if (!Number.isFinite(numVal) || numVal < 0 || !Number.isInteger(numVal))
    return;
  checkDivisibility(numVal);
});

const checkDivisibility = function (numValue) {
  numArr.forEach((num) => {
    if (numValue % Number(num.textContent) === 0 && numValue != 0) {
      num.classList.add("divisible");
    }
  });
};

const clearNums = function () {
  numArr.forEach((num) => num.classList.remove("divisible"));
};

btnAdd.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    if (btn.textContent !== "+") return;
    btn.textContent = Number(btn.dataset.val);

    document.querySelector(".row--inactive").classList.remove("row--inactive");
    if (i > 0) {
      btnRemove[i - 1].style.display = "none";
    }
  });
});

btnRemove.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    btn.closest(".row").classList.add("row--inactive");
    btnAdd[i].textContent = "+";
    if (i > 0) {
      btnRemove[i - 1].style.display = "flex";
    }
  });
});

checkBtn.checked = false;

checkBtn.addEventListener("change", function () {
  inpData.classList.toggle("dark");
  numArr.forEach((item) => {
    item.classList.toggle("dark");
  });
  spanEls.forEach((item) => {
    item.classList.toggle("dark");
  });
  darkIcon.classList.toggle("dark");
  containerEl.classList.toggle("dark");
  description.classList.toggle("dark");
  cvLink.classList.toggle("dark");
  footerEl.classList.toggle("dark");
});

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
