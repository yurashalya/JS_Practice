		$(document).ready(function(){
			$('button').on('click' , myAJAX);
		});

		function myAJAX() {
			$.post(
				"backend.php",
				{
					"a" : $('#num1').val()
				},
				function(data){
					console.log(data);
				}
				);
		}