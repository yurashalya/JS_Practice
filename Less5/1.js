function out(){
	var p;
	p = document.getElementById('out');
	//p.innerHTML += '<b>Hello</b>';
	//p.insertAdjacentHTML('beforeBegin','Hi');    
	// beforeBegin - перед открывающим тегом
	//p.insertAdjacentHTML('afterBegin','Hi');      
	p.outerHTML = '<div class ="one">hello</div>'                                       
}