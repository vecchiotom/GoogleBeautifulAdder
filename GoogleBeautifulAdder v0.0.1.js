
// ==UserScript==
// @name           GoogleBeautifulAdder
// @namespace      Make Google more beautiful
// @description    Add new styles and remove many unuseful stuff from google.
// @include        *
// @author         Tommaso Celano
// @version        0.0.2-alphabuild
// ==/UserScript==
// ==OpenUserJS==
// @updateURL https://openuserjs.org/meta/vecchiotom/GoogleBeautifulAdder.meta.js
// @author vecchiotom
// ==/OpenUserJS==

	function $(id) {
		return document.getElementById(id);
	}

	function clearInterface(){
        
        $('viewport').style.background = "url(https://images7.alphacoders.com/351/351342.jpg) top left no-repeat";
				$('hplogo').title = 'Now Google is more beautiful';
		    $('lst-ib').value = "Make a beautiful search!!!";
		   
		    
   




	
	}


	clearInterface();
		    //initially i wanted to add the image search for extentions but it were very bugged so i'm working on it... in this release i've added some beautiful stuffs and an easter egg! find it!

