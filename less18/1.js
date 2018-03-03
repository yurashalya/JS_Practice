	

	function one (){
		alert ( 'Hello Yura');
		//return 9; undefined 
	}

	//console.log(5+one());

	function summa (a,b) {
		 c = 40;
		a = a || 10 ;
		b = b || 20;
		alert(a+b);
		//return (a+b);
	}

		//console.log	(summa (4));
		//alert(c);

		document.getElementById('b1').onclick = function () {
			summa (12,6)
		};

		let d = function () {
			alert ('Work');
		}

		d();