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
			$('#number_of_agents').prop('required',true);

		} else {
			$('#number_of_agents').hide();
			$('#number_of_agents').removeAttr('required');
		}
	});
	$('#channel-form').validate();
	$('#channel-submit-button').click( function(event) {
		event.preventDefault();
		if ( $('#channel-form').valid() ) {
			MktoForms2.loadForm("//app-sj14.marketo.com", "804-YHP-876", 2583, function(form){
				var x = $('input, select, textarea');
				var	y = {},
					notes = {},
					notesNameArray = ['affiliated_with_tablet_pos', 'other_pos_companies', 'products', 'first_level_support'];
				for ( var i = x.length - 1; i >= 0; i-- ) {
					if (x[i].name !== 'channel-submit-button'){
						y[x[i].name] = x[i].value; 
                    }
				}
				for ( var b = 0; b < notesNameArray.length; b++ ) {
					notes[notesNameArray[b]] = y[notesNameArray[b]];
				}
				y['Notes__c'] = "Other Notes From Form:\nAffiliated with Tablet POS: " + notes['affiliated_with_tablet_pos'] + "\nOther POS Companies: " + notes['other_pos_companies'] + "\nProducts Sold: " + notes['products'] + "\nFirst Level Support: " + notes['first_level_support'] + " " + y['number_of_agents'] + " agents";
				form.setValues(y);
				form.submit();
				form.onSuccess(function(values, followUpUrl) {
					location.href = "https://revelsystems.com/channel-sales-thank-you/";
					return false; 
				});
			});
		}
	});
});