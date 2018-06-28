jQuery(document).ready(function($) {
	$('.get-channel-button').click(function(event) {
		event.preventDefault();
		$('#channel-popup-form').show();
	});
	$('.dark-transparency').click(function(event) {
		event.preventDefault();
		$('#channel-popup-form').hide();
	});
	$('#first_level_support').change(function() {
		if ($(this).val() === "Yes") {
			$('#number_of_agents').show();
		} else {
			$('#number_of_agents').hide();
		}
	});
	$('#channel-form').validate();
	$('#channel-submit-button').click( function(event) {
		event.preventDefault();

		if ( $('#channel-form').valid() ) {
			MktoForms2.loadForm("//app-sj14.marketo.com", "804-YHP-876", 2583, function(form){
				var x = $('input, select');
				var	y = {};
				for (var i = x.length - 1; i >= 0; i--) {
					if (x[i].name !== 'channel-submit-button'){
						y[x[i].name] = x[i].value; 
                    }
				}
				var theForm = form.vals(y);
				console.log(theForm);
			});
		}
	});
});