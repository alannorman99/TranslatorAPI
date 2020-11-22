function translateSentence(sentence, translation) {
	//fetch call to openweather api using the url provided
	fetch('https://api.funtranslations.com/translate/' + translation + '.json?text=' + sentence)
		.then(function (response) { return response.json() })
		.then(function (data) {
			displayTranslation(data);
			console.log(data);
		})
		.catch(function () {
			console.log(response.statusText);
		});
}

//assigns the html tags to specific data from the json object and displays it in the browser
function displayTranslation(data) {
	var ogString = data.contents.text;
	var original = document.createElement('p');
	original.innerHTML = "Original: " + ogString;

	document.body.appendChild(original);

	var translatedString = data.contents.translated;
	var translated = document.createElement('p');

	translated.innerHTML = "Translated: " + translatedString;


	document.body.appendChild(translated);

	console.log(ogStrning, translatedString);

}

//creates reference to button
var button = document.getElementById('Submit');

//detects button click and executes function
button.onclick = function () {

	var text_field = document.getElementById("sentence").value;
	console.log(text_field);
	translateSentence(text_field, "yoda");
}

window.onload = function () {
	//translateSentence("Hello there my friend", "yoda");
}