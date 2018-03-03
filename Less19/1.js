let block = document.getElementById('one');
	//click 

/*	block.onclick = function () {
		this.style.background = 'blue';

	}*/

	//dooble click
/*	block.ondblclick = function () {
		this.style.background = 'black';
	}*/

	// клик правой кнопкой мыши 

	/*block.oncontextmenu = function () {
		this.style.background = 'fuchsia';
		return false;
	}*/

	/*document.oncontextmenu = function () {
		return false;
	}*/

	//мышь входит на элемент
	/*block.onmouseenter = function () {
		console.log ('in!!!');
		this.style.background = 'gold';
	}

	//Мышь уходит  элемента 
	block.onmouseleave = function () {
		this.style.background = 'fuchsia';
	}*/

	// движение мыши внутри блока
	let  a=0;
/*
	block.onmousemove = function () {
		a++;
		this.style.width = 100 + a + 'px' ;
	}*/

	// нажимаем и держим кнопку мыши(любую)
	block.onmousedown = function (event) {
		this.style.background = 'cyan';
		console.log('button:' + event.button);
		console.log('which:' + event.which);
	}

	block.onmouseup = function () {
		this.style.background = 'green';
	}