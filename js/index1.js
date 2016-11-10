window.onload = function(){setScreenClass();serBehavior();}
window.onresize = setScreenClass;

function setScreenClass(){
		var fmt = document.documentElement.clientWidth;
		var cls = (fmt<=240)?'pda_ver':(fmt>240&&fmt<=320)?'pda_hor':(fmt>320&&fmt<=640)?'screen_ultralow':(fmt>640&&fmt<=800)?'screen_low':(fmt>800&&fmt<=1024)?'screen_med':(fmt>1024&&fmt<=1280)?'screen_high':'screen_wide';
		document.getElementById('count').innerHTML=fmt+'px -> '+cls;
		document.body.className=cls;
};

function serBehavior(){
	var tabs = document.getElementsByTagName("dt");
	for (var i=0;i<tabs.length;i++){
		if(tabs[i].parentNode.parentNode.className == "tabbed"){
			tabs[i].onclick = activeTab;
		}
	}
	
};

function activeTab(){
	var tabs = document.getElementsByTagName("dt");
	for (var i = 0; i < tabs.length; i++) {
		if(tabs[i].className == 'current'){tabs[i].className="";}
	}
	var page = document.getElementsByTagName("dd");
	for (var i = 0; i < page.length; i++) {
		if(page[i].className == 'current'){page[i].className="";}
	}
	this.className = "current";
	var dd = this.nextSibling;
	if(dd.nodeType!=1){
		dd = dd.nextSibling;
	}
	dd.className="current"
}