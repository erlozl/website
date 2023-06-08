window.onload = function() {

  const logo = document.getElementsByClassName('main_logo')[0];
      logo.classList.toggle("show");
  // main logo show js

  const swiper1 = new Swiper('#slide1.swiper-container', {
      loop: true, 
      pagination: {
          el: '#outpages1',
          clickable: true,
      },
      navigation: {
          nextEl: '#outnext1',
          prevEl: '#outprev1',
      },
  });
  // nav_main slide

  const swiper2 = new Swiper('#slide2.swiper-container', {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 10,
      autoplay:{
          delay:1000,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });
  // instagram slide

  const swiper3 = new Swiper('#slide3.swiper-container', {
      loop: true,
      slidesPerView: 7,
      spaceBetween: 10,
      autoplay:{
          delay:2000,
      },
      pagination: {
          el: '#outpages2',
          clickable: true,
      },
  });
  // review slide

  const swiper4 = new Swiper('#slide4.swiper-container', {
      loop: true,
      autoplay:{
          delay:3000,
      },
      slidesPerView: 5,
  });
  // aside slide

  AOS.init();
  // aos plugin

  const mhead = document.querySelector(".head_title");
  const mimg = document.querySelector(".head_logo>img");
  const micon = document.querySelectorAll(".head_icon>a>i");
  const msrch = document.querySelector(".head_srch > input");
  const mmenu = document.querySelector(".head_menu");
  const tit = document.querySelectorAll(".head_cont > a")
  mouseOverOut();

  function mouseOverOut() {
      
      mmenu.onmouseover = function() {
          mmenu.style.backgroundColor = "#fff";
          mhead.style.backgroundColor = "#fff";
          msrch.style.border = "1px solid #000";

      for(let i = 0; i < tit.length; i++) {
          tit[i].style.color = "#000"; 
      }  
      for (let i = 0; i < micon.length; i++) {
          micon[i].style.color = "#000";
      }
      mimg.src = "./img/hooga-logo.png";
      };

      mmenu.onmouseout = function() {
          mmenu.style.backgroundColor = "transparent"; 

      for (let i = 0; i < tit.length; i++) {
          tit[i].style.color = "#fff";
      }
      mimg.src = "./img/hooga-logo-white.png";
      msrch.style.border = "1px solid #fff";
      mhead.style.backgroundColor = "transparent";

      for (let i = 0; i < micon.length; i++) {
              micon[i].style.color = "#fff";
              }
          }
      };
  };
  // menu mouseover/out js

  window.onscroll = function () {

  const head = document.querySelector(".head_title");
  const img = document.querySelector(".head_logo>img");
  const icon = document.querySelectorAll(".head_icon>a>i");
  const srch = document.querySelector(".head_srch > input");
  const menu = document.querySelector(".head_menu");
  img.src = "./img/hooga-logo.png";
  scrollHeader();

  function scrollHeader() {
      if (window.scrollY > 45) {      
          for(let i = 0; i < icon.length; i++) {
              head.style.backgroundColor = "#fff";
              head.style.position = "fixed";
              head.style.minWidth = "1920px";
              head.style.height = "150px";
              head.style.zIndex = "1";
              head.style.transition = "0.3s";
              icon[i].style.color = "#000";
              srch.style.border = "1px solid #000";
          };
      } else if(window.scrollY <= 45){
          for(let i = 0; i < icon.length; i++) {
              icon[i].style.color = "#fff";
              head.style.backgroundColor = "transparent";
              head.style.transition = "0.3s";
              head.style.position = "static";
              srch.style.border = "1px solid #fff";
              img.src = "./img/hooga-logo-white.png";
          };
      };
  };
  
  // menu scroll js
};