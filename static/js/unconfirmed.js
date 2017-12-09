var loadLatestBlocks = function() {
	$.getJSON('/api/v1/submission/unconfirmed', function(data){
		var counter = 0;
		console.log(data);
		while (counter < data['blocks'].length) {
			$('#content').append('<div class="unconfirmedWrap"><p style="display: block">' + data['blocks'][counter]['username']  + '</p><p style="display: block">' + data['blocks'][counter]['block'] + '</p><p style="display: block">' + data['blocks'][counter]['blockType'] + '</p><button class="confirmButton" id=' + data['blocks'][counter]['id'] + '>Confirm</button><button class="deleteButton" id=' + data['blocks'][counter]['id'] + '>Delete</button></div><br/><br/>');
			counter = counter + 1;
		}
		if (counter == data['blocks'].length) {
			confirmBlock();
			deleteBlock();
		}
	})
}

$(document).ready(loadLatestBlocks);

var confirmBlock = function() {
	$('.confirmButton').click(function() {
		var id = $(this).attr('id');
		$.getJSON('/api/v1/submission/confirm', {'ID':id}, function(data) {
			if (data['result'] == "SUCCESS") {
				$('#' + id).parent().hide();
			} else {
				console.log(data);
			}
		})
	})
}

var deleteBlock = function() {
	$('.deleteButton').click(function() {
		var id = $(this).attr('id');
		$.getJSON('/api/v1/submission/delete', {'ID':id}, function(data) {
			if (data['result'] == "SUCCESS") {
				$('#' + id).parent().hide();
			} else {
				console.log(data);
			}
		})
	})
}
