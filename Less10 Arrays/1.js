	var m = [];
	var m1 = [99,33, 'Hello'];
	m1[3] = 'Yura';
	m1[4] = 'Boy';
	console.log(m1);

		//alert (m1.length);

		/*for  (var i=0; i<m1.length; i++ ){
			document.getElementById('out').innerHTML += m1[i] + '<br>';
					}*/

		function masOut() {
			var p = document.getElementById('out');
			var str='';
			for (var i=0; i<m1.length; i++) {
				str += i + ' --- ' + m1[i] + '<br>';
			}
			p.innerHTML = str;
		}

		masOut();

		function pu(){
			var i1 = document.getElementById('i1').value;
			m1.push(i1);
			masOut();
		}

		function pu2() {
			m1.pop();
			masOut();
		}