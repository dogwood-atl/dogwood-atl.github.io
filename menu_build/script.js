window.onload = load_dishes();
window.dish_lib = {};
dish_lib.value = [];

async function load_dishes() {
	var myHeaders = new Headers();
	myHeaders.append('Origin', 'http://127.0.0.1:8000/');
	myHeaders.append('Access-Control-Allow-Origin', '*');
	myHeaders.append('Allow', 'GET, POST, HEAD, OPTIONS');

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	fetch('https://cors-anywhere.herokuapp.com/http://serene-dawn-57705.herokuapp.com/recipes/', requestOptions)
		.then((response) => response.text())
		.then((result) => {
			var dish_lib = JSON.parse(result);
			var dish_lib_len = dish_lib.length;
			var counter = 0;
			for (i = 0; i < dish_lib_len; i++) {
				counter++;
				$('#DW_dish_library').append(
					'<div class="dish_card"><div class="dish_card_title" id="dish_card_title"></div><div class="dish_card_subtitle" id="dish_card_subtitle"></div><div class="dish_card_ID">Dish ID:&nbsp<span id="dish_card_ID"></span></div><div class="dish_card_diet">Dietary Restriction:&nbsp<span id="dish_card_diet"></span></div></div>'
				);
				document.getElementById('dish_card_title').id = document.getElementById('dish_card_title').id + counter;
				document.getElementById('dish_card_title' + counter).textContent = dish_lib[i].Title;
				document.getElementById('dish_card_subtitle').id =
					document.getElementById('dish_card_subtitle').id + counter;
				document.getElementById('dish_card_subtitle' + counter).textContent = dish_lib[i].Description;
				document.getElementById('dish_card_ID').id = document.getElementById('dish_card_ID').id + counter;
				document.getElementById('dish_card_ID' + counter).textContent = dish_lib[i].id;
				document.getElementById('dish_card_diet').id = document.getElementById('dish_card_diet').id + counter;
				document.getElementById('dish_card_diet' + counter).textContent = dish_lib[i].Diet;
			}
		})
		.catch((error) => console.log('error', error));
}

$(document.getElementById('add_to_menu')).click(function() {
	var lunch = document.getElementById('inputLunchID').value;
	var lunch_ID = parseInt(lunch, 10);
	var dinner = document.getElementById('inputDinnerID').value;
	var dinner_ID = parseInt(dinner, 10);
	var house = document.getElementById('menuHouse').value;
	post_to_menu(lunch_ID, dinner_ID, house);
	document.getElementById('inputLunchID').value = '';
	document.getElementById('inputDinnerID').value = '';
});

async function post_to_menu(lunch_ID, dinner_ID, house) {
	var myHeaders = new Headers();
	myHeaders.append('Origin', 'http://127.0.0.1:8000/');
	myHeaders.append('Access-Control-Allow-Origin', '*');
	myHeaders.append('Allow', 'GET, POST, HEAD, OPTIONS');
	myHeaders.append('Content-Type', 'application/json');

	var raw = JSON.stringify({
		meals: [ { recipe: lunch_ID, lunch: 'T', dinner: 'F' }, { recipe: dinner_ID, lunch: 'F', dinner: 'T' } ],
		house: house,
		date: '2020-08-11'
	});

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	fetch('https://cors-anywhere.herokuapp.com/http://serene-dawn-57705.herokuapp.com/createmenu/', requestOptions)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));
}
