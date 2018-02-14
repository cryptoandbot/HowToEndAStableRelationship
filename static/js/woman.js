var loadAny = function() {
	$.getJSON('/api/v1/woman', function(data) {
		$('#content').html('<span id="wrapContent"><p class="block">' + data['block']['block'] + '</p><p class="username">' + data['block']['username'] + '</p></span>');
		$('#content').children().children().fadeIn('slow');
		$('#content').children().fadeIn('slow');
	})
}

$(document).ready(loadAny);

var clickRandom = function() {
	$('#randomButton').click(function() {
		$('#content').children().children().fadeOut('slow');
		$('#content').children().fadeOut('slow', function() {
			loadAny();
		})
	})
}

$(document).ready(clickRandom);

var loadBackground = function() {
	$('#content').css('background', '#EE7785');
}

$(document).ready(loadBackground);
