let sdvig = 300;

	 let test = document.getElementById('test');
	 	// setItnerval(function_name, time)
	
	function move () {
		test.style.marginLeft = sdvig + 'px';
		sdvig = sdvig + 10;
	}


	//let tr = setInterval(move, 50); // 1s -1000ms; 
	
/*	document.getElementById('stop').onclick = function (){
		clearInterval(tr);
	}*/

	document.getElementById('stop').onclick = function(){
	clearInterval(tr);
	//clearTimeout(timer);
}



	setTimeout(move, 5000);