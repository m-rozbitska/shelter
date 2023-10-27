document.addEventListener('DOMContentLoaded', () => {

	const menu = document.querySelector('.menu__body');
	const menuBtn = document.querySelector('.menu__icon');
	const body = document.body;
	const menuLinks = document.querySelectorAll('.menu__link');


		menuBtn.addEventListener('click', () => {
			menu.classList.toggle('active');
			menuBtn.classList.toggle('active');
			body.classList.toggle('lock');
		});

		menuLinks.forEach(link => {
			link.addEventListener('click', () => {
				menu.classList.remove('active');
				menuBtn.classList.remove('active');
				body.classList.remove('lock');
			});
		});
		
	$('.slider__pets').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 3,
		responsive: [
		  {
			 breakpoint: 1024,
			 settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			 }
		  },
		  {
			 breakpoint: 600,
			 settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			 }
		  },
		  {
			 breakpoint: 480,
			 settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			 }
		  }
		]
	 });

	 $('.slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		adaptiveHeight: true,
		variableWidth: true,
	
		responsive: [
		  {
			 breakpoint: 1024,
			 settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			 }
		  },
		  {
			 breakpoint: 768,
			 settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			 }
		  },
		  {
			 breakpoint: 380,
			 settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			 }
		  }
		]
	 });
})