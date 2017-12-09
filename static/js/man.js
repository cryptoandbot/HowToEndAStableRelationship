var loadAny = function() {
	$.getJSON('/api/v1/man', function(data) {
		$('#content').html('<p class="block">' + data['block']['block'] + '</p><p class="username">' + data['block']['username'] + '</p>');
		$('#content').children().fadeIn('slow');
	})
}

$(document).ready(loadAny);

var clickRandom = function() {
	$('#randomButton').click(function() {
		$('#content').children().fadeOut('slow', function() {
			loadAny();
		})
	})
}

$(document).ready(clickRandom);

var loadBackground = function() {
	$('#content').css('background', '#84B1ED');
}

$(document).ready(loadBackground);
