$(document.getElementById('log-in')).click(function() {
	var email = document.getElementById('inputEmail').value;
	var pswd = document.getElementById('inputPassword').value;
	console.log(get_users());
	//console.log(email);
	//console.log(pswd);
	setTimeout(function() {
		if (email === 'admin@dogwood.com' && pswd === 'dogwood') {
			location.href = 'pages/home.html';
		} else {
			alert('Wrong Credentials, Try Again!');
		}
	}, 20000);
});

async function get_users() {
	var myHeaders = new Headers();
	myHeaders.append('Origin', 'http://127.0.0.1:8000/');
	myHeaders.append('Access-Control-Allow-Origin', '*');
	myHeaders.append('Allow', 'GET, POST, HEAD, OPTIONS');
	myHeaders.append('Content-Type', 'application/json');
	var raw = JSON.stringify({ username: 'hritiksapra', email: 'hritiksapra@dogwood.api', password: '12345678' });

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		redirect: 'follow',
		mode: 'no-cors',
		body: raw
	};
	const response = await fetch('http://serene-dawn-57705.herokuapp.com/api-token-auth/', requestOptions);
	return response.text();
}
