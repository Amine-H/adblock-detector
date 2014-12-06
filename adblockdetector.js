(function($)
{
	$.AdblockDetector = function(params)
	{
		params = $.extend({
			modal:false,
			message:'you are using an adblocker,thanks for not helping us',
			whenDetected:function()
			{
				var messageContainer = $('<div>',{
					id:'adbdMessage',
					click:function()
					{
						if(params.modal === false)
						{
							$('#adbdMessage').remove();
						}
					}
				}).css({
					'top':0,
					'left':0,
					'z-index':9999,
					'width':'100%',
					'height':'100%',
					'background-color':'white',
					'position':'fixed',
				}).appendTo('body');
				var message = $('<div>',{html:params.message}).css({
					'position':'relative',
					'width':'500px',
					'margin-left':'auto',
					'margin-right':'auto'
				}).appendTo(messageContainer);
			}
		},params);
		function check()
		{
			var bait = $('#adsense');
			if(bait.height < 300 ||
				bait.width < 300 ||
				bait.css('visibility') == 'hidden' ||
				bait.css('display') == 'none' ||
				bait == undefined)
			{
				params.whenDetected();
			}
			bait.remove();
		}
		var bait = $('<iframe>',{
		            id: 'adsense',
		            src: 'http://ads.google.com/adserver/adlogger_tracker.php',
		            height: '300',
		            width: '300',
		            style: 'position:absolute;z-index:-9999;top:-9999;left:-9999;'
		        });
		$('body').append(bait);
		setTimeout(check,1000);
		return this;
	}
})(jQuery)