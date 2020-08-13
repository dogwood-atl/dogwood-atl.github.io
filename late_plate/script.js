window.onload = load_users();
window.dish_lib = {};
dish_lib.value = [];

window.onload = function() {
	document.getElementById('loading').style.display = 'none';
};

async function load_users() {
	var myHeaders = new Headers();
	myHeaders.append('Origin', 'http://127.0.0.1:8000/');
	myHeaders.append('Access-Control-Allow-Origin', '*');
	myHeaders.append('Allow', 'GET, POST, HEAD, OPTIONS');
	myHeaders.append('Content-Type', 'application/json');

	var raw = JSON.stringify({
		houses: [
			'GT_Kappa_Sig',
			'GT_Theta_Chi',
			'GT_Phi_Sig',
			'GT_AEPI',
			'GT_Chi_Phi',
			'GT_Phi_Delt',
			'GT_Sig_Nu',
			'GT_Beta',
			'GT_Pi_Kapp',
			'GT_DTD',
			'GT_ATO',
			'GT_Fiji',
			'GT_NAve',
			'TN_Fiji',
			'TN_Sig_Nu',
			'TN_Pong',
			'UGA_Sigma_Chi',
			'UGA_Kappa_Sig',
			'UGA_Phi_Delt',
			'UGA_Sigma_Nu',
			'Bradley_AEPI',
			'Bradley_DU'
		]
	});

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	fetch('https://cors-anywhere.herokuapp.com/http://serene-dawn-57705.herokuapp.com/getcounts/', requestOptions)
		.then((response) => response.text())
		.then((result) => {
			var count_lib = JSON.parse(result);
			document.getElementById('lunch_late_plate_total_count').textContent = count_lib.totalLunch;
			document.getElementById('dinner_late_plate_total_count').textContent = count_lib.totalDinner;
			// document.getElementById('regular_lunch').textContent = lunch_regular_counter;
			// document.getElementById('vegan_lunch').textContent = lunch_vegan_counter;
			// document.getElementById('kosher_lunch').textContent = lunch_kosher_counter;
			// document.getElementById('regular_dinner').textContent = dinner_regular_counter;
			// document.getElementById('vegan_dinner').textContent = dinner_vegan_counter;
			// document.getElementById('kosher_dinner').textContent = dinner_kosher_counter;
			document.getElementById('gt_kappa_sig_lunch').textContent = count_lib.houses.GT_Kappa_Sig.lunch;
			document.getElementById('gt_kappa_sig_dinner').textContent = count_lib.houses.GT_Kappa_Sig.dinner;
			document.getElementById('gt_theta_chi_lunch').textContent = count_lib.houses.GT_Theta_Chi.lunch;
			document.getElementById('gt_theta_chi_dinner').textContent = count_lib.houses.GT_Theta_Chi.dinner;
			document.getElementById('gt_phi_sig_lunch').textContent = count_lib.houses.GT_Phi_Sig.lunch;
			document.getElementById('gt_phi_sig_dinner').textContent = count_lib.houses.GT_Phi_Sig.dinner;
			document.getElementById('gt_aepi_lunch').textContent = count_lib.houses.GT_AEPI.lunch;
			document.getElementById('gt_aepi_dinner').textContent = count_lib.houses.GT_AEPI.dinner;
			document.getElementById('gt_chi_phi_lunch').textContent = count_lib.houses.GT_Chi_Phi.lunch;
			document.getElementById('gt_chi_phi_dinner').textContent = count_lib.houses.GT_Chi_Phi.dinner;
			document.getElementById('gt_phi_delt_lunch').textContent = count_lib.houses.GT_Phi_Delt.lunch;
			document.getElementById('gt_phi_delt_dinner').textContent = count_lib.houses.GT_Phi_Delt.dinner;
			document.getElementById('gt_sig_nu_lunch').textContent = count_lib.houses.GT_Sig_Nu.lunch;
			document.getElementById('gt_sig_nu_dinner').textContent = count_lib.houses.GT_Sig_Nu.dinner;
			document.getElementById('gt_beta_lunch').textContent = count_lib.houses.GT_Beta.lunch;
			document.getElementById('gt_beta_dinner').textContent = count_lib.houses.GT_Beta.dinner;
			document.getElementById('gt_pi_kapp_lunch').textContent = count_lib.houses.GT_Pi_Kapp.lunch;
			document.getElementById('gt_pi_kapp_dinner').textContent = count_lib.houses.GT_Pi_Kapp.dinner;
			document.getElementById('gt_dtd_lunch').textContent = count_lib.houses.GT_DTD.lunch;
			document.getElementById('gt_dtd_dinner').textContent = count_lib.houses.GT_DTD.dinner;
			document.getElementById('gt_ato_lunch').textContent = count_lib.houses.GT_ATO.lunch;
			document.getElementById('gt_ato_dinner').textContent = count_lib.houses.GT_ATO.dinner;
			document.getElementById('gt_fiji_lunch').textContent = count_lib.houses.GT_Fiji.lunch;
			document.getElementById('gt_fiji_dinner').textContent = count_lib.houses.GT_Fiji.dinner;
			document.getElementById('gt_nave_lunch').textContent = count_lib.houses.GT_NAve.lunch;
			document.getElementById('gt_nave_dinner').textContent = count_lib.houses.GT_NAve.dinner;
			document.getElementById('tn_fiji_lunch').textContent = count_lib.houses.TN_Fiji.lunch;
			document.getElementById('tn_fiji_dinner').textContent = count_lib.houses.TN_Fiji.dinner;
			document.getElementById('tn_sig_nu_lunch').textContent = count_lib.houses.TN_Sig_Nu.lunch;
			document.getElementById('tn_sig_nu_dinner').textContent = count_lib.houses.TN_Sig_Nu.dinner;
			document.getElementById('tn_pong_lunch').textContent = count_lib.houses.TN_Pong.lunch;
			document.getElementById('tn_pong_dinner').textContent = count_lib.houses.TN_Pong.dinner;
			document.getElementById('uga_sigma_chi_lunch').textContent = count_lib.houses.UGA_Sigma_Chi.lunch;
			document.getElementById('uga_sigma_chi_dinner').textContent = count_lib.houses.UGA_Sigma_Chi.dinner;
			document.getElementById('uga_sigma_nu_lunch').textContent = count_lib.houses.UGA_Sigma_Nu.lunch;
			document.getElementById('uga_sigma_nu_dinner').textContent = count_lib.houses.UGA_Sigma_Nu.dinner;
			document.getElementById('uga_kappa_sig_lunch').textContent = count_lib.houses.UGA_Kappa_Sig.lunch;
			document.getElementById('uga_kappa_sig_dinner').textContent = count_lib.houses.UGA_Kappa_Sig.dinner;
			document.getElementById('uga_phi_delt_lunch').textContent = count_lib.houses.UGA_Phi_Delt.lunch;
			document.getElementById('uga_phi_delt_dinner').textContent = count_lib.houses.UGA_Phi_Delt.dinner;
			document.getElementById('br_aepi_lunch').textContent = count_lib.houses.Bradley_AEPI.lunch;
			document.getElementById('br_aepi_dinner').textContent = count_lib.houses.Bradley_AEPI.dinner;
			document.getElementById('br_du_lunch').textContent = count_lib.houses.Bradley_DU.lunch;
			document.getElementById('br_du_dinner').textContent = count_lib.houses.Bradley_DU.dinner;
		})
		.catch((error) => console.log('error', error));
}

async function get_users(house) {
	var myHeaders = new Headers();
	myHeaders.append('Origin', 'http://127.0.0.1:8000/');
	myHeaders.append('Access-Control-Allow-Origin', '*');
	myHeaders.append('Allow', 'GET, POST, HEAD, OPTIONS');
	myHeaders.append('Content-Type', 'application/json');

	var raw = JSON.stringify({
		houses: [ house ]
	});

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	const response = fetch(
		'https://cors-anywhere.herokuapp.com/http://serene-dawn-57705.herokuapp.com/getusers/',
		requestOptions
	);

	return response;
}

$('#gt_kappa_sig_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Kappa Sig - Lunch Late Plates';
	get_users('GT_Kappa_Sig').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Kappa_Sig;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_kappa_sig_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Kappa Sig - Dinner Late Plates';
	get_users('GT_Kappa_Sig').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Kappa_Sig;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_theta_chi_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Theta Chi - Lunch Late Plates';
	get_users('GT_Theta_Chi').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Theta_Chi;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_theta_chi_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Theta Chi - Dinner Late Plates';
	get_users('GT_Theta_Chi').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Theta_Chi;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_fiji_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Fiji - Lunch Late Plates';
	get_users('GT_Fiji').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Fiji;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_fiji_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Fiji - Dinner Late Plates';
	get_users('GT_Fiji').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Fiji;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_phi_sig_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Phi Sig - Lunch Late Plates';
	get_users('GT_Phi_Sig').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Phi_Sig;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_phi_sig_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Phi Sig - Dinner Late Plates';
	get_users('GT_Phi_Sig').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Kappa_Sig;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_aepi_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT AEPI - Lunch Late Plates';
	get_users('GT_AEPI').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_AEPI;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_aepi_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT AEPI - Dinner Late Plates';
	get_users('GT_AEPI').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_AEPI;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_chi_phi_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Chi Phi - Lunch Late Plates';
	get_users('GT_Chi_Phi').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Chi_Phi;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_chi_phi_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Chi Phi - Dinner Late Plates';
	get_users('GT_Chi_Phi').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Kappa_Sig;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_phi_delt_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Phi Delt - Lunch Late Plates';
	get_users('GT_Phi_Delt').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Phi_Delt;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_phi_delt_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Kappa Sig - Dinner Late Plates';
	get_users('GT_Phi_Delt').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Phi_Delt;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_sig_nu_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Sig Nu - Lunch Late Plates';
	get_users('GT_Sig_Nu').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Sig_Nu;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_sig_nu_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Sig Nu - Dinner Late Plates';
	get_users('GT_Sig_Nu').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Sig_Nu;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_beta_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Beta - Lunch Late Plates';
	get_users('GT_Beta').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Beta;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_beta_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Beta - Dinner Late Plates';
	get_users('GT_Beta').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Beta;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_pi_kapp_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Pi Kapp - Lunch Late Plates';
	get_users('GT_Pi_Kapp').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Pi_Kapp;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_pi_kapp_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT Pi Kapp - Dinner Late Plates';
	get_users('GT_Pi_Kapp').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_Pi_Kapp;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_dtd_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT DTD - Lunch Late Plates';
	get_users('GT_DTD').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_DTD;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_dtd_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT DTD - Dinner Late Plates';
	get_users('GT_DTD').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_DTD;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_ato_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT ATO - Lunch Late Plates';
	get_users('GT_ATO').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_ATO;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_ato_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT ATO - Dinner Late Plates';
	get_users('GT_ATO').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_ATO;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_nave_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT N Ave - Lunch Late Plates';
	get_users('GT_NAve').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_NAve;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#gt_nave_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'GT N Ave - Dinner Late Plates';
	get_users('GT_NAve').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.GT_NAve;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#tn_fiji_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'TN Fiji - Lunch Late Plates';
	get_users('TN_Fiji').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.TN_Fiji;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#tn_fiji_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'TN Fiji - Dinner Late Plates';
	get_users('TN_Fiji').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.TN_Fiji;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#tn_sig_nu_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'TN Sig Nu - Lunch Late Plates';
	get_users('TN_Sig_Nu').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.TN_Sig_Nu;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#tn_sig_nu_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'TN Sig Nu - Dinner Late Plates';
	get_users('TN_Sig_Nu').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.TN_Sig_Nu;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#tn_pong_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'TN Pong - Lunch Late Plates';
	get_users('TN_Pong').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.TN_Pong;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#tn_pong_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'TN Pong - Dinner Late Plates';
	get_users('TN_Pong').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.TN_Pong;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#uga_sigma_chi_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'UGA Sigma Chi - Lunch Late Plates';
	get_users('UGA_Sigma_Chi').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.UGA_Sigma_Chi;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#uga_sigma_chi_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'UGA Sigma Chi - Dinner Late Plates';
	get_users('UGA_Sigma_Chi').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.UGA_Sigma_Chi;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#uga_kappa_sig_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'UGA Kappa Sig - Lunch Late Plates';
	get_users('UGA_Kappa_Sig').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.UGA_Kappa_Sig;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#uga_kappa_sig_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'UGA Kappa Sig - Dinner Late Plates';
	get_users('UGA_Kappa_Sig').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.UGA_Kappa_Sig;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#uga_phi_delt_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'UGA Phi Delt - Lunch Late Plates';
	get_users('UGA_Phi_Delt').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.UGA_Phi_Delt;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#uga_phi_delt_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'UGA Phi Delt - Dinner Late Plates';
	get_users('UGA_Phi_Delt').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.UGA_Phi_Delt;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#uga_sigma_nu_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'UGA Sigma Nu - Lunch Late Plates';
	get_users('UGA_Sigma_Nu').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.UGA_Sigma_Nu;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#uga_sigma_nu_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'UGA Sigma Nu - Dinner Late Plates';
	get_users('UGA_Sigma_Nu').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.UGA_Sigma_Nu;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#br_aepi_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'Bradley AEPI - Lunch Late Plates';
	get_users('Bradley_AEPI').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.Bradley_AEPI;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#br_aepi_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'Bradley AEPI - Dinner Late Plates';
	get_users('Bradley_AEPI').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.Bradley_AEPI;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#br_du_lunch_more').click(function() {
	document.getElementById('modal_title').textContent = 'Bradley DU - Lunch Late Plates';
	get_users('Bradley_DU').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.Bradley_DU;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_lunch === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});

$('#br_du_dinner_more').click(function() {
	document.getElementById('modal_title').textContent = 'Bradley DU - Dinner Late Plates';
	get_users('Bradley_DU').then((response) => response.text()).then((result) => {
		var user_lib = JSON.parse(result);
		user_array = user_lib.Bradley_DU;
		var modal = document.getElementById('modal_content');
		for (i = 0; i < user_array.length; i++) {
			if (user_array[i].late_plate_dinner === 'T') {
				modal.innerHTML +=
					'<div>' +
					user_array[i].user.username +
					'  -  ' +
					user_array[i].diet +
					'  -  ' +
					user_array[i].phone_number +
					'</div>';
			}
		}
	});
	$('#fratModal').modal('show');
	document.getElementById('modal_content').textContent = '';
});
