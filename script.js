"use strict";

const text = document.querySelector(".text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const letters = text.querySelectorAll("span");
for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener("mouseover", () => {
        letters[i].classList.add("active");
    });
}