window.onload = function() {
  const swiper = new Swiper('#slide1.swiper-container', {
      loop: true,
      autoplay:{
          delay:2000,
      },

      pagination: {
      el: '#slide1 .swiper-pagination',
      clickable: true,
      },

      navigation: {
      nextEl: '#slide1 .swiper-button-next',
      prevEl: '#slide1 .swiper-button-prev',
      },
  });

  // main slider js

  const notice = document.querySelector(".notice_js");
  const date = document.querySelector(".notice_date");
  const text = ['[기타]포토플레이 서비스 개선 안내', '[기타]영화 개봉연기에 따른 예매취소 안내 건 ', '[기타]2021 SVIP 스페셜 기프트 신청 안내 ','[극장]연말연시 특별 방역 조치에 따른 극장 운영 시간 조정', '[기타]영진위 지원사업-“모든요일 6천원 할인”이벤트 조기 종료 안내 (8/16 종료) ',]
  const ndate = ['2020.9.15','2020.8.16','2021.6.29','2020.12.4','2020.8.16'];
  const total = 4;
  let now = 0;

  notice.innerText = text[0];
  notice.style.fontSize = '13px';
  notice.style.paddingLeft = '10px';
  notice.style.paddingRight = '300px';
  date.style.fontSize = '13px';
  date.innerText = ndate[0];

  window.setInterval(function() {
      notice.classList.remove('show');
      now = now == total ? 0 : ++now;

      window.setTimeout(function() {
          notice.classList.add('show');
          notice.innerText = text[now];
      },1000);
  },3000);
  
  window.setInterval(function() {
      date.classList.remove('show');
      now = now == total ? 0 : ++now;
      
      window.setTimeout(function() {
          date.classList.add('show');
          date.innerText = ndate[now];
      },1000);
  },3000);

  // notice js
  
  const bn = document.querySelector("#banner");
  const close = document.querySelector(".bi");

  close.onclick = function() {
      bn.style.display = "none";
      }
  }
  // banner js
  
  window.onscroll = function() {
      const header = document.getElementById("header"); 
      const category = document.getElementById("category");
      const banner = document.getElementById('banner');

      if(window.scrollY >= header.offsetTop + header.offsetHeight) {
          category.style.top = window.scrollY - header.offsetHeight - banner.offsetHeight + 'px';
      } else {
          category.style.top = '0px';
      }
  }
  // category js