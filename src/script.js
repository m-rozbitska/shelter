//function changeColor() {


//let container = document.querySelector('#container');
//container.addEventListener('click', function(event) {
	//let target = event.target;
	//if (target.className == 'btn') {
		//console.log('No');
	//}
//}); 

//};



//document.addEventListener('DOMContentLoaded', changeColor);

//let button = document.querySelector('.btn');

//function showConsole() {
	//console.log('No');
//};

//button.addEventListener('click', showConsole);

function showMessage() {
	let button = document.querySelector('.btn');

	button.addEventListener("click", function(){
		console.log('Click')
	})
}

document.addEventListener('DOMContentLoaded', showMessage)