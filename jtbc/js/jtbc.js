window.onload = function() {

    AOS.init();
    
    let mouse = document.querySelector("#mouse");

    document.addEventListener("mousemove", function(e) {
        const x = e.clientX;
        const y = e.clientY;
        mouse.style.left = x +"px";
        mouse.style.top = y +"px";
    });

    // header

    const topHeader = document.querySelector("#header");
    const menuActive = document.querySelector(".menu_active");
    const headerLi = document.querySelectorAll("#header .menu > li >a");

    topHeader.addEventListener("mouseover",function() {
        $("#mouse").css("opacity","0");
        topHeader.style.background = "#fff";
    })
    topHeader.addEventListener("mouseleave",function() {
        topHeader.style.background = "#000";
        $("#mouse").css("opacity","1");
    })

    for(let i = 0; i < headerLi.length; i++) {
		(function(i) {
            headerLi[i].onclick = function(){
                for(let j = 0; j < headerLi.length; j++) {
                    headerLi[j].classList.remove("menu_active");
                }
				headerLi[i].classList.add("menu_active");
			}
		})(i);
	}

    const headerLang = document.querySelectorAll("#header .lang li a");
    for(let i = 0; i < headerLang.length; i++) {
		(function(i) {
            headerLang[i].onclick = function(){
                for(let j = 0; j < headerLang.length; j++) {
                    headerLang[j].classList.remove("lang_active");
                }
				headerLang[i].classList.add("lang_active");
			}
		})(i);
	}

    // mouse

    const topBtn = document.querySelector("#top");

	window.onscroll = function () {		
		if(window.scrollY > 1000) {
			topBtn.style.display = 'block';
		}
	} 
	topBtn.onclick = function () {
		window.scrollTo({top:0, behavior:'smooth'});
	}

    // top button

    const open = document.querySelector(".popup_title");
    const close = document.querySelector(".popup_close");
    const cont = document.querySelector(".popup_cont");
    let basic = 0;

        open.onclick = function(e) {
            e.preventDefault();
            if (!basic) {
                cont.style.display = 'block';
                basic++; 
            } else {
                cont.style.display = 'none'; 
                basic--;
            }
        }
        close.addEventListener("click",function(e) {
            e.preventDefault();
            cont.style.display = "none";
        })

    // popup

    const videoBg = document.querySelector("#nav .jtbc_bg");
    const video = document.querySelector("#nav .jtbc_video");
    const videoCont = document.querySelector("#nav .jtbc_bn .jtbc_cont");
    console.log(videoCont);
    var toggle = 0;

    videoBg.addEventListener("click",function() {
        if(toggle == 0) {
            videoBg.style.border = "800px solid transparent";
            mouse.classList.toggle("on");
            $("#mouse.on").html("close");
            
            console.log("click");
            toggle++;
        } else if (toggle!=0) {
            console.log("out");
            videoBg.style.border = "800px solid #222";
            $("#mouse").html("play");
            toggle--;
        }
    });
        

    video.addEventListener("mouseenter",function() {
        videoBg.style.border = "800px solid transparent";
        video.style.opacity = "0";
        videoCont.style.display = "none";
    })
    video.addEventListener("mouseleave",function() {
        videoBg.style.border = "800px solid #222";
        video.style.opacity = "1";
        videoCont.style.display = "block";
    })
}