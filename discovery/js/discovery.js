window.onload = function() {
	const bn = document.querySelector(".banner");
	const bnClose = document.querySelector(".fas");

	bnClose.onclick = function() {
		bn.style.display = "none";
	};
    // banner js

	const ctop = document.querySelector("#ctop");
	window.onscroll = function () {		
		if(window.scrollY > 1100) {
			ctop.style.display = 'block';
		}
	} 
	ctop.onclick = function () {
		window.scrollTo({top:0, behavior:'smooth'});
	}
    // top btn js

    const swiper = new Swiper('#m1.swiper-container', {
        loop: true,
        autoplay:{
                delay:3000,
        },
        pagination: {
            el: '#m1 .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        navigation: {
            nextEl: '#m1 .swiper-button-next',
            prevEl: '#m1 .swiper-button-prev',
        },
        scrollbar: {
            el: '#m1 .swiper-scrollbar',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });
    // main slider js

    const swiper1 = new Swiper('#s1.swiper-container', {
        loop: true,
        autoplay:{
            delay:3000,
        },
        pagination: {
            el: '#s1 .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        navigation: {
            nextEl: '#s1 .swiper-button-next',
            prevEl: '#s1 .swiper-button-prev',
        },
        scrollbar: {
            el: '#s1 .swiper-scrollbar',
        },
    });
    // sli-2 js

    const swiper2 = new Swiper('#s2.swiper-container', {
        loop: true,
        slidesPerView: 3,
        autoplay:{
                delay:3000,
        },
        pagination: {
            el: '#s2 .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        navigation: {
            nextEl: '#s2 .swiper-button-next',
            prevEl: '#s2 .swiper-button-prev',
        },
        scrollbar: {
            el: '#s2 .swiper-scrollbar',
        },
    });
    // sli-3 js

    const swiper3 = new Swiper('#s3.swiper-container', {
        loop: true,
        slidesPerView: 3,
        autoplay:{
                delay:3000,
        },
        pagination: {
            el: '#s3 .swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        navigation: {
            nextEl: '#s3 .swiper-button-next',
            prevEl: '#s3 .swiper-button-prev',
        },
        scrollbar: {
            el: '#s3 .swiper-scrollbar',
        },
    });
    // sli-4 js


    const srchOpen = document.querySelector(".srch-open");
    
    srchOpen.onclick = function() {
        const display = document.querySelector("#display");
        const arrText = ['디스커버리 우먼스','디스커버리 티셔츠','디스커버러 공유 피크닉&캠핑 썸머룩','디스커버리 썸머 슈즈'];
        const total = 3;
        let now = 0;

        display.innerText = arrText[0];

        window.setInterval(function() {
            display.classList.remove('show');
            now = now == total ? 0 : ++now;
            window.setTimeout(function() {
                display.classList.add('show');
                display.innerText = arrText[now];
            },1000);
        },3000);

        // search text js

        const menu = document.querySelector(".head-srh-menu");
            menu.style.opacity = '1';
            menu.style.height = '500px';
            menu.style.position = "absolute";

        const swipersrch = new Swiper('#c1.swiper-container', {
            loop: true,
            slidesPerView: 2,
            autoplay:{
                    delay:3000,
            },
            navigation: {
                nextEl: '#c1 .swiper-button-next',
                prevEl: '#c1 .swiper-button-prev',
            },
        });
        // search menu js
    }

    const srchClose = document.querySelector(".srch-close");
        srchClose.onclick = function() {
            var menu = document.querySelector(".head-srh-menu");
            menu.style.opacity = '0';
            menu.style.transition = '.5s';
        }
    const mmenu = document.querySelector(".mhead-icon");
        mmenu.onclick = function () {
            const mOpen = document.querySelector(".mhead-close");
            mOpen.style.left = '0%';
        }

    const sub = document.querySelector(".sub-close");
        sub.onclick = function () {
            const mclose = document.querySelector(".mhead-close");
            mclose.style.left = "-100%";
        }
    // 반응형 메뉴 js
}

