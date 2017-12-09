var manButtonClick = function() {
	$('#manButton').click(function() {
		window.location.href = '/man.html';
	});
}

var womanButtonClick = function() {
	$('#womanButton').click(function() {
		window.location.href = '/woman.html';
	});
}

var anyButtonClick = function() {
	$('#anyButton').click(function() {
		window.location.href = '/any.html';
	});
}

var aboutButtonClick = function() {
	$('#aboutButton').click(function() {
		window.location.href = '/about.html';
	});
}

var uploadButtonClick = function() {
	$('#uploadButton').click(function() {
		window.location.href = '/upload.html';
	});
}

var homeButtonClick = function() {
	$('#homeButton').click(function() {
		window.location.href = '/index.html';
	});
}

$(document).ready(manButtonClick);
$(document).ready(womanButtonClick);
$(document).ready(anyButtonClick);
$(document).ready(aboutButtonClick);
$(document).ready(uploadButtonClick);
$(document).ready(homeButtonClick);
