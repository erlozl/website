window.onload = function() {
	const icon = document.querySelectorAll('.fl_sl1');
	const flag = document.querySelectorAll('.fl_op1');
	let basis = 0;

	for(let i = 0; i < icon.length; i++) {
		icon[i].onclick = function() {
			if (!basis) {
				for(let j = 0; j < flag.length; j++) {
					flag[j].style.display = 'block';
				}
				basis++; 
			} else {
				for(let j = 0; j < flag.length; j++) {
					flag[j].style.display = 'none';
				} 
				basis--;
			}
		}
	}
	// flag_base-1 js
	const icon2 = document.querySelectorAll('.fl_sl2');
	const flag2 = document.querySelectorAll('.fl_op2');
	let basis2 = 0;

	for(let i = 0; i < icon2.length; i++) {
		icon2[i].onclick = function() {
			if (!basis2) {
				for(let j = 0; j < flag2.length; j++) {
					flag2[j].style.display = 'block';
				}
				basis2++; 
			} else {
				for(let j = 0; j < flag2.length; j++) {
					flag2[j].style.display = 'none';
				} 
				basis2--;
			}
		}
	}
	// flag_base-2 js

	const open = document.querySelector('.hmenu_open');
	const hsub = document.querySelector('.head_sub');
	const close = document.querySelector('.hsub_close>img');
	open.onclick = function() {
		hsub.style.display = 'block';
	}
	close.onclick = function() {
		hsub.style.display = 'none';
	}

	const menu = document.querySelectorAll('.hsub_category');
	const category = document.querySelectorAll('.category_menu');
	// menuClick(menu);

	for(let i = 0; i < menu.length; i++){
		(function(i) {
			menu[i].onclick = function() {
				for(let j = 0; j < category.length; j++) {
					category[j].style.display = 'none';	
				}
				category[i].style.display = "block"
			}
		})(i);
	}
	// menu js

}	