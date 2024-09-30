
let lastScrollTop = 0;
const header = document.getElementById('header');
// ヘッダーの高さを取得
let headerHeight = header.offsetHeight;
const scrollThreshold = 200; // ユーザーが下に50px以上スクロールした場合にヘッダーを隠す

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

   if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // 下にスクロールしているときはヘッダーを隠す
        // header.style.top = `-${headerHeight}px`;
		header.classList.add('js-hidden');
    } else {
        // 上にスクロールしているときはヘッダーを表示する
        // header.style.top = '0';
		header.classList.remove('js-hidden');
    }
    lastScrollTop = scrollTop;
});



const nav = document.getElementById('nav');
const navbarToggle = document.querySelector('.navbar-toggle');
const modal = document.querySelector('.modal');
// const navMenu = document.querySelector('.header-list');


navbarToggle.addEventListener('click', function() {
    // navMenu.classList.toggle('js-active');
    navbarToggle.classList.toggle('js-active');
	nav.classList.toggle('js-active');
	modal.classList.toggle('js-active');
    document.body.classList.toggle('js-active');

});



const menuItems = document.querySelectorAll('.modal-list .modal-item');
const contentItems = document.querySelectorAll('.image-area .image');

// 各メニューアイテムにマウスオーバーイベントを追加
menuItems.forEach((item, index) => {
	item.addEventListener('mouseover', () => {
		// すべてのコンテンツを非表示にする
		contentItems.forEach(content => content.classList.remove('js-active'));
		
		// 対応するインデックスのコンテンツを表示
			contentItems[index].classList.add('js-active');
		});
		item.addEventListener('mouseleave', () => {
		// すべてのコンテンツを非表示にする
		contentItems.forEach(content => content.classList.remove('js-active'));
	});
});

// let lastScrollTop = 0;
// const header = document.getElementById('header');
// // ヘッダーの高さを取得
// let headerHeight = header.offsetHeight;
// const scrollThreshold = 200; // ユーザーが下に50px以上スクロールした場合にヘッダーを隠す

// window.addEventListener('scroll', function() {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
//         // 下にスクロールしているときはヘッダーを隠す
//         // header.style.top = `-${headerHeight}px`;
// 		header.classList.add('js-hidden');
//     } else {
//         // 上にスクロールしているときはヘッダーを表示する
//         // header.style.top = '0';
// 		header.classList.remove('js-hidden');
//     }
//     lastScrollTop = scrollTop;
// });


(function(){
	const mySwiper = new Swiper('.mv .swiper', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		loop: true,
		loopAdditionalSlides: 1,
		speed: 2000,
		autoplay: {
			delay: 7000,
			disableOnInteraction: false,
			waitForTransition: false,
		},
		followFinger: false,
		navigation: {
			nextEl: '.testslide01 .swiper-button-next',
			prevEl: '.testslide01 .swiper-button-prev',
		},
	});
}());



(function(){
	const mySwiper = new Swiper('.sample001 .swiper', {
		slidesPerView: 1,
		spaceBetween: 24,
		grabCursor: true,
		pagination: {
			el: '.sample001 .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.sample001 .swiper-button-next',
			prevEl: '.sample001 .swiper-button-prev',
		},
		breakpoints: {
			600: {
				slidesPerView: 2,
			},
			1025: {
				slidesPerView: 4,
				spaceBetween: 32,
			}
		},
	});
}());



(function(){
	const swiper01 = new Swiper('.event .swiper01 .swiper', {
		
		effect: 'slide',	
		// fadeEffect: {
		// 	crossFade: true,
		// },
		loop: true,
		loopAdditionalSlides: 1,
		// speed: 600,
		// autoplay: {
		// 	delay: 1000,
		// 	disableOnInteraction: false,
		// 	waitForTransition: false,
		// },
		// followFinger: false,
		// pagination: {
		// 	el: '.event .swiper-pagination',
		// 	clickable: true,
		// },
		navigation: {
			nextEl: ".event .swiper-button-next",
			prevEl: ".event .swiper-button-prev",
		}

	});


	const swiper02 = new Swiper('.event .swiper02 .swiper', {

		slidesPerView: 3,
		spaceBetween: 24,
		
		effect: 'slide',	
		// fadeEffect: {
		// 	crossFade: true,
		// },
		loop: true,
		loopAdditionalSlides: 1,
		// speed: 600,
		// autoplay: {
		// 	delay: 1000,
		// 	disableOnInteraction: false,
		// 	waitForTransition: false,
		// },
		// followFinger: false,
		// pagination: {
		// 	el: '.event .swiper-pagination',
		// 	clickable: true,
		// },
		navigation: {
			nextEl: ".event .swiper-button-next",
			prevEl: ".event .swiper-button-prev",
		}

	});


	// let slideNum;


	// swiper01.on('slideChangeTransitionEnd', (slider) => {
	// 	slideNum = slider.realIndex;
	// 	swiper02.slideToLoop(slideNum, undefined, false);
	// });


	// swiper02.on('slideChangeTransitionEnd', (slider) => {
	// 	slideNum = slider.realIndex;
	// 	swiper01.slideToLoop(slideNum, undefined, false);
	// });

	// swiper01.controller.control = [swiper02];
	// swiper02.controller.control = [swiper01];
}());