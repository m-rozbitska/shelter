document.addEventListener('DOMContentLoaded', () => {
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