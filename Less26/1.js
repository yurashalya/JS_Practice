		$(document).ready(function(){
			$('button').on('click' , myAJAX2);
		});

		function myAJAX() {
			$.get(
				"backend.php",
				{
					"a" : $('#num1').val()
				},
				function(data){
					console.log(data);
				}
				);
		}

		function myAJAX2(){
			$.ajax({
				url : "backend.php",
				type: "GET",
				data: {"a" : $('#num1').val()},
				success : function (data) {
					console.log(data);
				}
			});
		}