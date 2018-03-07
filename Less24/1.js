		document.getElementById('test').onkeypress = function (event) {
			console.log(event);
			let str = '';
			srt = str + event.key;
			console.log(str);
			//return false;
		}