"use strict";

const getMoreGoods = () => {
  let button = document.querySelector(".add-sentence-btn"),
   visibleBlock = document.querySelector(".visible-sm-block"),
   hiddenBlocks = document.querySelectorAll(".hidden");

  button.addEventListener("click", event => {
    let target = event.target;
    if (target.matches(".add-sentence-btn")) {
      visibleBlock.classList.toggle("visible-sm-block");
      hiddenBlocks.forEach(el => {
          el.classList.toggle("hidden");
      });
      button.style.display = "none";
    }
  });
};

export default getMoreGoods;
