jQuery(document).ready(function($){$("#get-channel-button").click(function(n){n.preventDefault(),$("#channel-popup-form").show()}),$(".dark-transparency").click(function(n){n.preventDefault(),$("#channel-popup-form").hide()}),$("#first_level_support").change(function(){"Yes"===$(this).val()?$("#number_of_agents").show():$("#number_of_agents").hide()})});