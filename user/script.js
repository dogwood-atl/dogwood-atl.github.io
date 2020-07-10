$(document.getElementById('log-in')).click(function() {
	var username = document.getElementById('inputUsername').value;
	var email = document.getElementById('inputEmail').value;
	var pswd = document.getElementById('inputPassword').value;
	console.log(username);
	console.log(email);
	console.log(pswd);
	create_user(username, email, pswd);
	$('#setup').hide();
	$('#config').show();
});

async function create_user(username, email, password) {
	const response = await fetch('http://serene-dawn-57705.herokuapp.com/createuser/', {
		method: 'POST',
		mode: 'no-cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.parse('{"username": "gsim", "email": "gsim23@gmail.com", "password": "123456" }')
	});
	return response.json();
	});
}
