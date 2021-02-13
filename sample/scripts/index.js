const ham = document.querySelector(".hd-nav__hambuger");
const container = document.querySelector(".global-container");

const add = () => {
  ham.addEventListener("click", () => {
    container.classList.toggle("cover");
    container.classList.toggle("clicked-ham-menu");
  });
};

add();

