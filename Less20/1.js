 		document.onmousemove = function () {
 			document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://cdn2.iconfinder.com/data/icons/halloween-symbols/64/holidays_cat-48.png" , id="cat">');

 			let cat = document.getElementById('cat');
 			cat.style.position = 'fixed' ;


 		document.onmousemove = function (event) {
 				
 				cat.style.left = event.clientX +20+ 'px' ;
 				cat.style.top = event.clientY +20+ 'px' ;
 		}
 		}



 	

 	 