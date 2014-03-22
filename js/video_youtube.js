$('document').ready(function() {
	if( !device.tablet() && !device.mobile() ) {
		
		var options = { videoId: 'ssutK1Gei4A', mute: false};
		$('#video').tubular(options);

} else {
	
	$('body').addClass('poster-image');
	
}

});


