window.onload = function () {
  let swiper = new Swiper(".mySwiper", {
    slidesPerGroup: 5,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    slidesPerView: 3,
    spaceBetween: 30,
  });

  let SubContClose = document.querySelectorAll(".teavanaClose");
  let teaCont = document.querySelectorAll("p[class^='teavana_more']");
  let teaSubCont = document.querySelectorAll(".teavana_subCont");

  function teaContBtn() {
    this.nextSibling.classList.add("on");
  }
  function subContBtn() {
    this.parentNode.classList.remove("on");
  }

  for (let i = 0; i < teaCont.length; i++) {
    (function () {
      teaCont[i].addEventListener("click", teaContBtn);
      SubContClose[i].addEventListener("click", subContBtn);
    })(i);
  }
};
