function ajax(method, url, data, callback){
	var x = new XMLHttpRequest();
	x.open(method, url, true);
	x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	x.onreadystatechange = function(){
		if(x.readyState == 4 && x.status == 200){
			callback(x.responseText.trim());
		}
	}

	if(method == "POST"){
		x.send(data);
	}
	else if(method == "GET"){
		x.send();
	}
}
