var clickMan = function() {
	$('#blockMan').click(function() {
		window.location.href = '/man.html';
	})
};

$(document).ready(clickMan);

var clickAny = function() {
	$('#blockAny').click(function() {
		window.location.href = '/any.html';
	})
};

$(document).ready(clickAny);

var clickWoman = function() {
	$('#blockWoman').click(function() {
		window.location.href = '/woman.html';
	})
};

$(document).ready(clickWoman);
