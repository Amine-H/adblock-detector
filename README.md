AdblockDetector
	-- a jQuery plugin to detect adblocker and act somehow by showing a message in the screen
	or defining your own function

Usage
	-- add this piece of code in the header part of your website
	<script src="adblockdetector.js"></script>
	<script type="text/javascript">
		$(document).ready(function()
		{
			$.AdblockDetector
			({
				modal:false,
				message:$('<img>',
					src:'adblockdetected.jpg'
				)
			});
		});
	</script>


Params
	'whenDetected':function to execute when adblock is detected
			==>By default it will print in the screen the 'message'
	'message':the message that will be printed out
			==>By default it's 'you are using an adblocker,thanks for not helping us'
	'modal':this can take true or false, 
		if true the message can be dissmissed when clicked on
		if false the message cannot be dissmissed untill adblocker is disabled
			==>By default it is false

Message from Amine
i am not taking any credit for the Sample it's made by html5up
i made the adblockerdetected image, you may use it if you want