$("document").ready(function(){
	$("#btn1").hover(function() {
		$('#g').animate({  borderSpacing: -22.5 }, {
			step: function(now,fx) {
				$(this).css('-webkit-transform','rotate('+now+'deg)'); 
				$(this).css('-moz-transform','rotate('+now+'deg)');
				$(this).css('transform','rotate('+now+'deg)');
			},
			duration:'fast'
		},'linear');
	}

})