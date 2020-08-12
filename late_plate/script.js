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
			var dinner_regular_counter = 0;
			var dinner_vegan_counter = 0;
			var dinner_kosher_counter = 0;
			var lunch_regular_counter = 0;
			var lunch_vegan_counter = 0;
			var lunch_kosher_counter = 0;
			var na_north_lunch = 0;
			var chi_psi_lunch = 0;
			var akpsi_lunch = 0;
			var na_north_dinner = 0;
			var chi_psi_dinner = 0;
			var akpsi_dinner = 0;
			for (i = 0; i < user_lib_len; i++) {
				if (user_lib[i].profile.late_plate_lunch === 'T') {
					lunch_counter++;
					if (user_lib[i].profile.diet === 'Regular') {
						lunch_regular_counter++;
					} else if (user_lib[i].profile.diet === 'Vegan') {
						lunch_vegan_counter++;
					} else if (user_lib[i].profile.diet === 'Kosher') {
						lunch_kosher_counter++;
					}

					if (user_lib[i].profile.house === 'Chi Psi') {
						chi_psi_lunch++;
					} else if (user_lib[i].profile.house === 'NA North') {
						na_north_lunch++;
					} else if (user_lib[i].profile.house === 'AKPsi') {
						akpsi_lunch++;
					}
				}
				if (user_lib[i].profile.late_plate_dinner === 'T') {
					dinner_counter++;
					if (user_lib[i].profile.diet === 'Regular') {
						dinner_regular_counter++;
					} else if (user_lib[i].profile.diet === 'Vegan') {
						dinner_vegan_counter++;
					} else if (user_lib[i].profile.diet === 'Kosher') {
						dinner_kosher_counter++;
					}

					if (user_lib[i].profile.house === 'Chi Psi') {
						chi_psi_dinner++;
					} else if (user_lib[i].profile.house === 'NA North') {
						na_north_dinner++;
					} else if (user_lib[i].profile.house === 'AKPsi') {
						akpsi_dinner++;
					}
				}
			}
			document.getElementById('lunch_late_plate_total_count').textContent = lunch_counter;
			document.getElementById('dinner_late_plate_total_count').textContent = dinner_counter;
			document.getElementById('regular_lunch').textContent = lunch_regular_counter;
			document.getElementById('vegan_lunch').textContent = lunch_vegan_counter;
			document.getElementById('kosher_lunch').textContent = lunch_kosher_counter;
			document.getElementById('regular_dinner').textContent = dinner_regular_counter;
			document.getElementById('vegan_dinner').textContent = dinner_vegan_counter;
			document.getElementById('kosher_dinner').textContent = dinner_kosher_counter;
			document.getElementById('chi_psi_lunch').textContent = chi_psi_lunch;
			document.getElementById('chi_psi_dinner').textContent = chi_psi_dinner;
			document.getElementById('na_north_lunch').textContent = na_north_lunch;
			document.getElementById('na_north_dinner').textContent = na_north_dinner;
			document.getElementById('akpsi_dinner').textContent = akpsi_dinner;
			document.getElementById('akpsi_lunch').textContent = akpsi_lunch;
		})
		.catch((error) => console.log('error', error));
}
