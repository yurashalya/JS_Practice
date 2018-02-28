function fun() {
	var p;
	p = document.getElementById('out');
	p1 = document.getElementById('out1');
	var i=0;
	while (i<50) {
		i++;
		p.innerHTML+=i+' ';
		
	}


	var j=100;
	p1 = document.getElementById('out1');
	do {
		p.innerHTML+=j+ ' ';
		// j-- ; j=j-1;
		j--;
	}
	while (j>0);
}