// ==UserScript==
// @name           GoogleBeautifulAdder
// @namespace      Make Google more beautiful
// @description    Add new styles and remove many unuseful stuff from google.
// @include        *
// @author         Tommaso Celano
// @version        0.0.2-alphabuild
// ==/UserScript==

	function $(id) {
		return document.getElementById(id);
	}

	function clearInterface(){
        
        $('viewport').style.background = "url(https://images7.alphacoders.com/351/351342.jpg) top left no-repeat";
				$('hplogo').title = 'Now Google is more beautiful';
		    $('lst-ib').value = "Make a beautiful search!!!";
		    $('fbar').style.margin = '290px auto';
		    //don't watch at next line... it's only for a test... it will be patched in official 0.0.2 version!!!
		    $('fbar').innerHTML = 'ciaoregaa'
				//this script is not completed! this is only the 0.0.2 test build! more version to be expected in next months!!!
		    
   




	
	}


	clearInterface();
