$(document.getElementById('add_dish')).click(function() {
	var title = document.getElementById('inputDishTitle').value;
	var subtitle = document.getElementById('inputDishSubtitle').value;
	var diet_restriction = document.getElementById('dishDiet').value;
	var image = document.getElementById('dishImage');
	var image_name = document.getElementById('dishImage').value;
	var notes = document.getElementById('dishNotes').value;
	post_dish(title, subtitle, notes, diet_restriction, image);
});

async function post_dish(title, subtitle, notes, diet_restriction, fileInput) {
	var myHeaders = new Headers();
	myHeaders.append('Origin', 'http://127.0.0.1:8000/');
	myHeaders.append('Access-Control-Allow-Origin', '*');
	myHeaders.append('Allow', 'GET, POST, HEAD, OPTIONS');

	var formdata = new FormData();
	formdata.append('Title', title);
	formdata.append('Description', subtitle);
	formdata.append('Ingredients', notes);
	formdata.append('Diet', diet_restriction);
	formdata.append('image', fileInput.files[0], 'dogwood.jpg');

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
	};

	fetch('https://cors-anywhere.herokuapp.com/http://serene-dawn-57705.herokuapp.com/addrecipe/', requestOptions)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log('error', error));
}
