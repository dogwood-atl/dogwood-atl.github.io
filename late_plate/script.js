window.onload = load_users();
window.dish_lib = {};
dish_lib.value = [];

async function load_users() {
	var myHeaders = new Headers();
	myHeaders.append('Origin', 'http://127.0.0.1:8000/');
	myHeaders.append('Access-Control-Allow-Origin', '*');
	myHeaders.append('Allow', 'GET, POST, HEAD, OPTIONS');

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	fetch('https://cors-anywhere.herokuapp.com/http://serene-dawn-57705.herokuapp.com/users/', requestOptions)
		.then((response) => response.text())
		.then((result) => {
			var user_lib = JSON.parse(result);
			var user_lib_len = user_lib.length;
			var lunch_counter = 0;
			var dinner_counter = 0;
			for (i = 0; i < user_lib_len; i++) {
				if (user_lib[i].profile.late_plate_lunch == 'T') {
					lunch_counter++;
				}
				if (user_lib[i].profile.late_plate_dinner == 'T') {
					dinner_counter++;
				}
			}
			document.getElementById('lunch_late_plate_total_count').textContent = lunch_counter;
			document.getElementById('dinner_late_plate_total_count').textContent = dinner_counter;

			// for (i = 0; i < dish_lib_len; i++) {
			// 	counter++;
			// 	$('#DW_dish_library').append(
			// 		'<div class="dish_card"><div class="dish_card_title" id="dish_card_title"></div><div class="dish_card_subtitle" id="dish_card_subtitle"></div><div class="dish_card_ID">Dish ID:&nbsp<span id="dish_card_ID"></span></div><div class="dish_card_diet">Dietary Restriction:&nbsp<span id="dish_card_diet"></span></div></div>'
			// 	);
			// 	document.getElementById('dish_card_title').id = document.getElementById('dish_card_title').id + counter;
			// 	document.getElementById('dish_card_title' + counter).textContent = dish_lib[i].Title;
			// 	document.getElementById('dish_card_subtitle').id =
			// 		document.getElementById('dish_card_subtitle').id + counter;
			// 	document.getElementById('dish_card_subtitle' + counter).textContent = dish_lib[i].Description;
			// 	document.getElementById('dish_card_ID').id = document.getElementById('dish_card_ID').id + counter;
			// 	document.getElementById('dish_card_ID' + counter).textContent = dish_lib[i].id;
			// 	document.getElementById('dish_card_diet').id = document.getElementById('dish_card_diet').id + counter;
			// 	document.getElementById('dish_card_diet' + counter).textContent = dish_lib[i].Diet;
			// }
		})
		.catch((error) => console.log('error', error));
}
