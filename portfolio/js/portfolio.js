window.addEventListener('DOMContentLoaded', function() {
  QueryLoader2(document.querySelector("body"), {

      barColor: "#efefef",
      backgroundColor: "#000",
      percentage: true,
      barHeight: 0,
      minimumTime: 200,
      fadeOutTime: 2500,

      onComplete: function() {
          const wrap = document.querySelector("#wrap");
          const loading = document.querySelector(".load_bg");
          loading.style.display = "none";
          wrap.style.opacity = 1;
      }
  });
});

// loading 

window.onload = function() {
  const swiper1 = new Swiper('#full_content.swiper-container', {
      direction: 'vertical',
      slidesPerView : 1,
      mousewheel: true
  });

// 전체 slider js

  const sl = document.querySelector("#full_content");
      swiper1.on("slideChangeTransitionEnd", function(sl) {
          console.log(sl.realIndex);
          gsap.set(".hmenu_cty > li", {
          opacity:1,
          y: 0,
          scale: 1
      });
  gsap.set(".about_intro", {
          x : "110%",
          opacity : 1,
          stagger: 0.2,
          force3D: true,
      });
  gsap.set(".pfi_cont > p", {
          duration: 2, 
          x : 0,
      });

  switch(sl.realIndex) {

      case 0: 
      console.log("첫 페이지");
      gsap.from(".hmenu_cty > li", {
          scale: 0.2,
          opacity: 0,
          y : -50, 
          delay: 0.2, 
          stagger: 0.2,
          force3D: true
      });
      break;

      case 1:
      console.log("두번째 페이지");
          gsap.to(".about_intro", {
          x : 0,
          opacity : 1,
          stagger: 0.2,
          force3D: true,
      });
      gsap.from(".pfi_cont > p", {
          duration: 2, 
          x : innerWidth * 1, 
          delay: 0.5, 
          stagger: 0.2
      });
      break;

      case 3:
      console.log("네번째 페이지");
          break;
      };
  });

// gsap js

  const swiper2 = new Swiper('#pfo_slider.swiper-container', {
      direction: 'horizontal',

      pagination: {
      el: '#pfo_pagination',
      clickable: true
      },

      navigation: {
      nextEl: '#pfo_next',
      prevEl: '#pfo_prev',
      },
  });

// 2번째 slider js

  let mouse = document.querySelector("#mouse");
  let mimg1 = document.querySelector(".pfo_mimg1");
  let mimgs1 = document.querySelector(".pfo_mimg2");
  let mimgs2 = document.querySelector(".pfo_mimg3");
  let img1 = document.querySelector(".pfo_img1");
  let imgs1 = document.querySelector(".pfo_img1_1")
  let img2 = document.querySelector(".pfo_img2");
  let img3 = document.querySelector(".pfo_img3");
  let img4 = document.querySelector(".pfo_img4");

  document.addEventListener('mousemove',function(e) {
      const x = e.pageX;
      const y = e.pageY;
      mouse.style.top = y + 'px';
      mouse.style.left = x + 'px';
  });

  function mouseOut() {
      mouse.style.width = "3vw";
      mouse.style.height = "3vw";
      mouse.style.border = "1px solid #000";
      mouse.style.transition = '0.1s';
      mouse.innerHTML = "";
      mouse.style.backgroundColor = "transparent";
  }
  function mouseStyle() {
      mouse.style.transition = '0.1s';
      mouse.style.width = "10vw";
      mouse.style.height = "10vw";
      mouse.innerHTML = "<div>Click</div>";
      mouse.style.border = "transparent";
  }
  mimg1.onmouseover = function() {
      mouseStyle();
      mouse.style.backgroundColor = "rgba(39,62,86,0.8)";
  }
  mimg1.onmouseout = function() {
      mouseOut();
  }
  mimgs1.onmouseover = function() {
      mouseStyle();
      mouse.style.backgroundColor = "rgba(39,62,86,0.8)";
  }
  mimgs1.onmouseout = function() {
      mouseOut();
  }
  mimgs2.onmouseover = function() {
      mouseStyle();
      mouse.style.backgroundColor = "rgba(39,62,86,0.8)";
  }
  mimgs2.onmouseout = function() {
      mouseOut();
  }
  img1.onmouseover = function() {
      mouseStyle();
      mouse.style.backgroundColor = "rgba(37,38,39,0.8)";
  }
  img1.onmouseout = function() {
      mouseOut();
  }
  imgs1.onmouseover = function() {
      mouseStyle();
      mouse.style.backgroundColor = "rgba(37,38,39,0.8)";
  }
  imgs1.onmouseout = function() {
      mouseOut();
  }
  img2.onmouseover = function() {
      mouseStyle();
      mouse.style.backgroundColor = "rgba(110,89,72,0.8)";
  }
  img2.onmouseout = function() {
      mouseOut();
  }
  img3.onmouseover = function() {
      mouseStyle();
      mouse.style.backgroundColor = "rgba(171,63,7,0.8)";
  }
  img3.onmouseout = function() {
      mouseOut();
  }
  img4.onmouseover = function() {
      mouseStyle();
      mouse.style.backgroundColor = "rgba(10,49,42,0.8)";
  }
  img4.onmouseout = function() {
      mouseOut();
  }

  // mouse js

  swiper1.on("slideChangeTransitionEnd", function(sw) {
      const menuColor = document.querySelectorAll("#header .head_menu ul li a");

      for(let i = 0; i < menuColor.length; i++) {
          menuColor[i].style.color = "#fff";
      };
      reset();

      switch(sw.realIndex) {
      case 1:
          for(let i = 0; i < menuColor.length; i++) {
              menuColor[i].style.color = "#000";
          };  
      
  // menucolor

      const pg = document.querySelectorAll(".s_pg");
      let limit = [];
      let speed = [];
      let delay = [];
      let t = [];
      let value = [];
          
          for(let i = 0; i < pg.length; i++) {
              (function(i) {
              // pg.value = t;
              // pg[i].style.width = "0%";
                  limit[i] = Number(pg[i].getAttribute("limit"));
                  speed[i] = Number(pg[i].getAttribute("speed"));
                  delay[i] = Number(pg[i].getAttribute("delay")) * 500;
                  value[i] = 0;
                  setTimeout(function() {
                      t[i] = setInterval(function() {
                          if(value[i] >= limit[i]) {
                              clearInterval(t[i]);
                          } else {
                              value[i]++;
                              pg[i].style.width = value[i] + "%";
                          }
                      }, speed[i]);
                  }, delay[i]);
              })(i);
          }
          break;

      case 3: 
          for(let i = 0; i < menuColor.length; i++) {
              menuColor[i].style.color = "#000";
              };
          break;
      }
  });
  function reset(){};

  // progress js

  const open = document.querySelector(".hmenu");
  const category = document.querySelector(".hmenu_category");
  const close = document.querySelector(".hclose");
  const menu = document.querySelectorAll('.hmenu_cty>li>a');

      for(let i = 0; i < menu.length; i++) {
          (function(i) {
          menu[i].onclick = function() {
              swiper1.slideTo(i);
              category.style.left = "100%";
          }
      })(i);
  }

      open.onclick = function() {
          category.style.left = "0";
          category.style.transition = "1s";
      close.onclick = function() {
          category.style.left = "100%"; 
      }
  }
  // menu js

  window.onresize = function(){
      const section = document.getElementsByClassName('section');
      eachSection(section);
  }
  function eachSection(section) {
      for(let i = 0; i < section.length; i++) {
          section[i].style.height = window.innerHeight + "px";
      }
  }
}