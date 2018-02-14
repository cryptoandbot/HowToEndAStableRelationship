var loadAny = function() {
	$.getJSON('/api/v1/any', function(data) {
		$('#content').html('<span id="wrapContent"><p class="block">' + data['block']['block'] + '</p><p class="username">' + data['block']['username'] + '</p></span>');
		if(data['block']['blockType'] == 1) {
			$('#content').animate({
				'backgroundColor': '#84B1ED'
			}, 1000);
		} else if (data['block']['blockType'] == 2) {
			$('#content').animate({
				'backgroundColor': '#EE7785'
			}, 1000);
		} else {
			$('#content').animate({
				'backgroundColor': '#8CD790'
			}, 1000);
		}
		$('#content').children().fadeIn('slow');
		$('#content').children().children().fadeIn('slow');
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
