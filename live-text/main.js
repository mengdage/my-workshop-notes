// demo live text
var livetext = document.getElementById("livetextdemo");
var mtype = document.getElementById("mtype");

var demotext = "-pr!-pr!Just save it and send-rc!-rc!-rc!-rc!-rc!-rc!-rc!-rc!-rc!-rc!-rc!your text and send the link anywhere.";
var demoprop = [{"fonttype":0,"fontsize":"20","fontcol":"000000","sound":1},{"fonttype":0,"fontsize":"25","fontcol":"000000","sound":1}];
var tcounter = 0;
var timer;
var propindex = 0;
var typingsound = 1;

fontsarr = ["verdana", "tahoma", "Comic Sans MS", "Georgia"];

function write(){
	// a new line or remove char or new style -**!
	if(demotext[tcounter] == "-" && demotext[tcounter+3] == "!"){

		if(demotext.substring(tcounter+1, tcounter+3) == "nl"){
			livetext.lastChild.innerHTML += "<br>";
		}
		else if(demotext.substring(tcounter+1, tcounter+3) == "pr"){
			var nprop = demoprop[propindex];
			typingsound = nprop.sound;
			propindex++;
			livetext.innerHTML += "<span style='font-family: "+fontsarr[nprop.fonttype]+"; font-size: "+nprop.fontsize+"px; color: #"+nprop.fontcol+";'></span>";
		}
		else if(demotext.substring(tcounter+1, tcounter+3) == "rc"){
			// removing the html encoded char
			if(livetext.lastChild.innerHTML[livetext.lastChild.innerHTML.length-1] == ";" && ( livetext.lastChild.innerHTML[livetext.lastChild.innerHTML.length-6] == "&" || livetext.lastChild.innerHTML[livetext.lastChild.innerHTML.length-5] == "&" || livetext.lastChild.innerHTML[livetext.lastChild.innerHTML.length-4] == "&") )
			{
				livetext.lastChild.innerHTML = livetext.lastChild.innerHTML.substring(0, livetext.lastChild.innerHTML.lastIndexOf("&"));
			}
			//removing normal char
			else{
				if (livetext.lastChild.innerHTML == "") {
					livetext.removeChild(livetext.lastChild);
					livetext.lastChild.innerHTML = livetext.lastChild.innerHTML.substring(0, livetext.lastChild.innerHTML.length-1);
				}
				else{
					livetext.lastChild.innerHTML = livetext.lastChild.innerHTML.substring(0, livetext.lastChild.innerHTML.length-1);
				}
			}
		}

		tcounter +=4;
	}
	// encoded character
	else if(demotext[tcounter] == "&" && ( demotext[tcounter+5] == ";" || demotext[tcounter+4] == ";" || demotext[tcounter+3] == ";") ){
		
		var subspecialchar = demotext.substring( tcounter, demotext.indexOf(";",tcounter)+1 );

		livetext.lastChild.innerHTML += subspecialchar;

		tcounter += subspecialchar.length;
	}
	// normal character
	else{
		livetext.lastChild.innerHTML += demotext[tcounter];
		tcounter++;
	}	


	if(typingsound==1){
		mtype.play();
	}
	else{
		mtype.pause();
	}

	// the end of the characters
	if(tcounter >= demotext.length){
		clearInterval(timer);
		mtype.pause();
		// play again
	}

}

// start auto typing
function autotyping(){
	timer = setInterval(write ,80);
}


/*
========================== 
	typing recorder 
==========================
*/

var recordingtext =  document.getElementById('recordingtext');
var previewbtn = document.getElementById("previewbtn");
var savebtn = document.getElementById("savebtn");

recordingtext.focus();

var text = "";

// backspace trigger key
recordingtext.onkeydown = function(event) {
	kc = event.keyCode;
	if(kc==8 && (recordingtext.firstChild.innerHTML.length > 0 || recordingtext.childNodes.length > 1) ){
		text += "-rc!";

		// checking if the span is empty to delete it and go back to the old style in the recordingtext
		if(recordingtext.lastChild.innerHTML == "" && recordingtext.childNodes.length > 1){
			recordingtext.removeChild(recordingtext.lastChild);
			recordingtext.lastChild.contentEditable = true;
			recordingtext.lastChild.focus();
			cursortoend();
		}
	}
}

// normal key and new line
recordingtext.onkeypress = function(event) {
	kc = event.keyCode;
	kl = String.fromCharCode(kc);

	if (kc == 13) {
		text += "-nl!";
	}
	else{
		text += kl;
	}
}

recordingtext.onclick = function(){
	recordingtext.lastChild.focus();
	cursortoend();
	document.getElementById("err").style.display = "none";
}


// send text to be saved and viewed
previewbtn.onclick = function(){
	if(text.length < 5){
		document.getElementById("err").style.display = "block";
	}
	else{
		var propstr = JSON.stringify(prop); 

		var safeuritext = encodeURIComponent(text);

		ajax("POST", "http://rewritetext.vodole.com/includes/savetext.php", "text="+safeuritext+"&tt=0"+"&prop="+propstr, function(res){
			var textid = res;
			window.location = "http://rewritetext.vodole.com/livetext/"+textid+"/0";
		});
	}
}

savebtn.onclick = function(){
	if(text.length < 5){
		document.getElementById("err").style.display = "block";
	}
	else{
		var propstr = JSON.stringify(prop); 

		var safeuritext = encodeURIComponent(text);

		ajax("POST", "http://rewritetext.vodole.com/includes/savetext.php", "text="+safeuritext+"&tt=1"+"&prop="+propstr, function(res){
			var savedtextid = res;
			if(savedtextid != ""){
				document.getElementById("shareboxcont").style.display = "block";
				document.getElementById("shareboxin").value = "http://rewritetext.vodole.com/livetext/"+savedtextid+"/1";
				document.getElementById("shareboxin").select();
				document.getElementById("closesharebox").innerHTML = "Close and Write Another One";
			}
		});
	}
}

// close sharebox
document.getElementById("closesharebox").onclick = function(){
	document.getElementById("shareboxcont").style.display = "none";
	location.reload();
}

// move cursor to the end
function cursortoend(){
	range = document.createRange();
	range.selectNodeContents(recordingtext.lastChild);
	range.collapse(false);
	selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
}

// options

var prop = [];
var fonttype = 0;
var fonttypename = "verdana";
var fontsize = 20;
var fontcol = "000000";
var sound = 1;
var showfontliststate = -1;
var showfontcolsstate = -1;
var bgcolor = -1;

setprop();

// show fonts list
function showfontslist(){
	if (showfontliststate == -1){
		document.getElementById("fontslist").style.display = "inline-block";
		showfontliststate *= -1;
	}
	else{
		document.getElementById("fontslist").style.display = "none";
		showfontliststate *= -1;
	}
}

// change font family
function cftype(ftype, elem){
	fonttype = ftype;
	fonttypename = elem.innerHTML;
	document.getElementById("currentftype").innerHTML = fonttypename;
	document.getElementById("fontslist").style.display = "none";
}

// show font colors
function showfontcols(){
	if(showfontcolsstate == -1){
		document.getElementById("fontcols").style.display = "inline-block";
		showfontcolsstate *= -1;
	}
	else{
		document.getElementById("fontcols").style.display = "none";
		showfontcolsstate *= -1;
	}
}

// change font col
function cfcol(col){
	fontcol = col;
	document.getElementById("currentfcolor").style.backgroundColor = "#"+fontcol;
	document.getElementById("fontcols").style.display = "none";
}

//change sound on/off
function csound(){
	sound *= -1;
	if(sound == 1){
		document.getElementById("soundopt").className = "soundon";
	}
	else{
		document.getElementById("soundopt").className = "soundoff";
	}
}

//change bg-color
function cbgcolor(){
	bgcolor *= -1;
	if(bgcolor == 1){
		document.getElementById("bgcoloropt").className = "blackbg";
	}
	else{
		document.getElementById("bgcoloropt").className = "whitebg";
	}
}

function setprop(){
	fontsize = document.getElementById("fsizein").value;
	if(fontsize == "" || fontsize < 1 || fontsize > 1000){
		document.getElementById("fsizein").focus();
		document.getElementById("fsizein").className = "inputerror";
	}
	else{
		prop.push({fonttype: fonttype, fontsize: fontsize, fontcol: fontcol, sound: sound, bgcolor: bgcolor});
		text += "-pr!";
	}

	// adding new style span
	if (recordingtext.lastChild) {
		recordingtext.lastChild.contentEditable = false;
	}

	recordingtext.innerHTML += "<span style='font-family:"+fonttypename+"; font-size:"+fontsize+"px; color:#"+fontcol+";' contenteditable='true'></span>";

	// changing the background color
	if(bgcolor == 1){
		recordingtext.style.backgroundColor = "black";
	}
	else{
		recordingtext.style.backgroundColor = "white";
	}
}
