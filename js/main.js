
$('.hero:first-child').addClass('shown');
// $('.hero').not(':first').hide();
	

$('h1.name').text( $('.shown').attr('title') );


$('button.next').on('click', function() {
	if ( $('.shown').is(':last-child')) {
		$('.shown')
			.removeClass('shown')
			.siblings('.hero')
			.first()
			.addClass('shown');
	}

	else {
		$('.shown')
			.removeClass('shown')
			.next()
			.addClass('shown');
	}

	$('h1.name').text( $('.shown').attr('title') );
})


$('button.prev').on('click', function() {
	if ( $('.shown').is(':first-child')) {
		$('.shown')
			.removeClass('shown')
			.siblings('.hero')
			.last()
			.addClass('shown');
	}

	else {
		$('.shown')
			.removeClass('shown')
			.prev()
			.addClass('shown');
	}

	$('h1.name').text( $('.shown').attr('title') );
})

