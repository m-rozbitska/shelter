import katrineImg from './images/pets-katrine.png';
import jenniferImg from './images/pets-jennifer.png';
import sophiaImg from './images/pets-sophia.png';
import woodyImg from './images/pets-woody.png';
import scarletImg from './images/pets-scarlet.png';
import timmyImg from './images/pets-timmy.png';
import freddieImg from './images/pets-freddie.png';
import charlyImg from './images/pets-charly.png';

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

	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		variableWidth: true,
		centerMode: true,
		centerPadding: '30px',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
				adaptiveHeight: true,
				variableWidth: true,
				centerMode: true,
				centerPadding: '30px',
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '30px',
			}
		},
		{
			breakpoint: 380,
			settings: {
				dots: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
})

document.addEventListener('DOMContentLoaded', function () {
	const openModalLinks = document.querySelectorAll('.slider__btn');

	openModalLinks.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const dataIndex = this.getAttribute('data-index');
			loadData(dataIndex);
			openModal();
		});
	});

	const petsData = {
		"img": katrineImg,
		"name": "Katrine",
		"type": "Cat",
		"breed": "British Shorthair",
		"age": "6 month",
		"description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
	};

	const jenniferData = {
		"img": jenniferImg,
		"name": "Jennifer",
		"type": "Dog",
		"breed": "Labrador",
		"description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		"age": "2 months",
	};
	
	const sophiaData = {
		"img": sophiaImg,
		"name": "Sophia",
		"type": "Dog",
		"breed": "Shih tzu",
		"description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		"age": "1 month",
	};
	
	const woodyData = {
		"img": woodyImg,
		"name": "Woody",
		"type": "Dog",
		"breed": "Golden Retriever",
		"description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		"age": "3 years 6 months",
	};
	
	const scarlettData = {
		"img": scarletImg,
		"name": "Scarlett",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		"age": "3 months",
	};
	
	const timmyData = {
		"img": timmyImg,
		"name": "Timmy",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		"age": "2 years 3 months",
	};
	
	const freddieData = {
		"img": freddieImg,
		"name": "Freddie",
		"type": "Cat",
		"breed": "British Shorthair",
		"description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		"age": "2 months",
	};
	
	const charlyData = {
		"img": charlyImg,
		"name": "Charly",
		"type": "Dog",
		"breed": "Jack Russell Terrier",
		"description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		"age": "8 years",
	};

	function loadData(index) {
		const data = getDataByIndex(index);

		const modalImg = document.querySelector('#modalImg');
		const modalTitle = document.querySelector('#modalTitle');
		const modalType = document.querySelector('#modalType');
		const modalBreed = document.querySelector('#modalBreed');
		const modalAge = document.querySelector('#modalAge');
		const modalDescr = document.querySelector('#modalDescr');

		modalImg.src = data.img;
		modalTitle.innerText = data.name;
		modalType.innerText = data.type;
		modalBreed.innerText = data.breed;
		modalAge.innerText = data.age;
		modalDescr.innerText = data.description;
	}

	function getDataByIndex(index) {
		const dataObjects = [
			petsData,
			jenniferData,
			woodyData,
			sophiaData,
			timmyData,
			charlyData,
			scarlettData,
			freddieData
		];

		if (index >= 0 && index < dataObjects.length) {
			return dataObjects[index];
		} else {
			return {};
		}
	}

	function openModal() {
		const modal = document.getElementById('modal');
		modal.style.display = 'flex';
	}

	const closeModalBtn = document.querySelector('#closeBtnModal');
	const modal = document.querySelector('#modal');

	closeModalBtn.addEventListener('click', closeModal);
	modal.addEventListener('click', outsideClick);

	function closeModal() {
		modal.style.display = 'none';
	}

	function outsideClick(e) {
		if (e.target === modal) {
			closeModal();
		}
	}
});

document.addEventListener('DOMContentLoaded', function () {
	const sliderContainer = document.querySelector('.slider__pets');
	const itemsPerPage = 8; 
	let currentPage = 1;

	const totalItems = sliderContainer.querySelectorAll('.slider__item').length;
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	function updatePagination() {
	const paginationBtns = document.querySelectorAll('.pagination__btn');
	paginationBtns.forEach((btn, index) => {
		if (index === 2) {
			btn.textContent = currentPage;
		} else if (index === 0) {
			btn.disabled = currentPage === 1;
		} else if (index === 1) {
			btn.disabled = currentPage === 1;
		} else if (index === 3) {
			btn.disabled = currentPage === totalPages;
		} else if (index === 4) {
			btn.disabled = currentPage === totalPages;
		}
	});
	}

	function goToPage(page) {
	currentPage = page;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const items = sliderContainer.querySelectorAll('.slider__item');
		items.forEach((item, index) => {
		item.style.display = index >= startIndex && index < endIndex ? 'flex' : 'none';
	});

	updatePagination();
	}

	function handlePaginationClick(e) {
		const action = e.target.dataset.action;

	if (action === 'prev' && currentPage > 1) {
	goToPage(currentPage - 1);
	} else if (action === 'next' && currentPage < totalPages) {
	goToPage(currentPage + 1);
	} else if (action === 'first') {
	goToPage(1);
	} else if (action === 'last') {
	goToPage(totalPages);
		}
	}

	function createPagination() {
	const paginationContainer = document.createElement('div');
	paginationContainer.classList.add('btns__container');

	const prevBtn = document.createElement('button');
	prevBtn.classList.add('pagination__btn');
	prevBtn.textContent = '<';
	prevBtn.addEventListener('click', handlePaginationClick);
	prevBtn.dataset.action = 'prev';

	const firstBtn = document.createElement('button');
	firstBtn.classList.add('pagination__btn');
	firstBtn.textContent = '<<';
	firstBtn.addEventListener('click', handlePaginationClick);
	firstBtn.dataset.action = 'first';

	const currentPageBtn = document.createElement('button');
	currentPageBtn.classList.add('pagination__btn', 'current-page');
	currentPageBtn.textContent = currentPage;

	const lastBtn = document.createElement('button');
	lastBtn.classList.add('pagination__btn');
	lastBtn.textContent = '>>';
	lastBtn.addEventListener('click', handlePaginationClick);
	lastBtn.dataset.action = 'last';

	const nextBtn = document.createElement('button');
	nextBtn.classList.add('pagination__btn');
	nextBtn.textContent = '>';
	nextBtn.addEventListener('click', handlePaginationClick);
	nextBtn.dataset.action = 'next';

	paginationContainer.appendChild(firstBtn);
	paginationContainer.appendChild(prevBtn);
	paginationContainer.appendChild(currentPageBtn);
	paginationContainer.appendChild(nextBtn);
	paginationContainer.appendChild(lastBtn);

	return paginationContainer;
	}

	const pagination = createPagination();
	sliderContainer.appendChild(pagination);

	goToPage(currentPage);
});

document.addEventListener('DOMContentLoaded', function () {
	const emailLink = document.querySelector('.contacts__link');
	const emailIcon = document.querySelector('.contacts__icon img');
	const phoneLink = document.querySelector('.phone__link');
	const phoneIcon = document.querySelector('.phone__item .contacts__icon img');
	const locationLink = document.querySelector('.location__text');
	const locationLinkSecond = document.querySelector('.location__text-second');

	emailLink.addEventListener('click', function (event) {
	  event.preventDefault();
	  window.open('mailto:melissa180lily@gmail.com', '_blank');
	});
 
	emailIcon.addEventListener('click', function () {
	  window.open('mailto:melissa180lily@gmail.com', '_blank');
	});

	phoneLink.addEventListener('click', dialPhoneNumber);
	phoneIcon.addEventListener('click', dialPhoneNumber);

	function dialPhoneNumber(event) {
		event.preventDefault();
		window.location.href = phoneLink.getAttribute('href');
	}

	phoneIcon.addEventListener('click', function () {
	  window.location.href = 'tel:+380934993516';
	});
 
	locationLink.addEventListener('click', function (event) {
	  event.preventDefault();
	  window.open('https://www.google.com/maps/place/1+Central+Street+Boston', '_blank');
	});

	locationLinkSecond.addEventListener('click', function (event) {
		event.preventDefault();
		window.open('https://www.google.com/maps/@51.4424571,0.0009427,17z?entry=ttu', '_blank');
	 });
 });

