$(document.getElementById('log-in')).click(function() {
	var email = document.getElementById('inputEmail').value;
	var pswd = document.getElementById('inputPassword').value;

	get_users(email, pswd).then(function(result) {
		var tok = JSON.parse(result).token;
		var login_error = JSON.parse(result).non_field_errors;
		if (email === 'dogwoodappteam@gmail.com' && typeof tok !== 'undefined') {
			console.log('Login Success');
			setTimeout(function() {
				location.href = 'late_plate/late_plate.html';
			}, 1000);
		} else {
			console.log('Login Failed');
			$('#login_error').show();
		}
	});
});

async function get_users(email, password) {
	var myHeaders = new Headers();
	myHeaders.append('Access-Control-Allow-Origin', '*');
	myHeaders.append('Allow', 'GET, POST, HEAD, OPTIONS');
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('Accept', 'application/json');
	var raw = { username: 'dogwoodappteam@gmail.com', email: email, password: password };

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		redirect: 'follow',
		body: JSON.stringify(raw)
	};
	const response = await fetch(
		'https://cors-anywhere.herokuapp.com/http://serene-dawn-57705.herokuapp.com/api-token-auth/',
		requestOptions
	);
	return response.text();
}
