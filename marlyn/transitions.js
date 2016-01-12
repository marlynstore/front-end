/* naomihaverland.com js scripts */


function fadeIn(element) {  
  var tick = function() {
    element.style.opacity = +element.style.opacity + 0.1;
    

    if (+element.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

function showHideCont(id) {
    var div= document.getElementById(id);

    /* ONLY USE FOR CHECKS */
    var bio= document.getElementById('bio');
    var com= document.getElementById('com');
    var contact= document.getElementById('contact');
    var otherOpts = [bio, com, contact];

    var screenWidth = window.innerWidth || document.documentElement.clientWidth
    || document.body.clientWidth;

    // needs a check for mobile screens for all to fade in at once
    if(screenWidth < 500) {
        for (var i=0; i<otherOpts.length; i++) {
            fadeIn(otherOpts[i]);
            div.scrollIntoView();
        }
    }

    else if(div.style.opacity == "0") {
    	// checks to make sure no other options are showing
    	for(var i=0; i<otherOpts.length; i++) {
    		if(otherOpts[i] == div) {
    			fadeIn(otherOpts[i]);
                otherOpts[i].style["z-index"] = "1000"; // makes links clickable
    		}
    		else {
    			 otherOpts[i].style.opacity = "0";
                 otherOpts[i].style["z-index"] = "0"
    		}
    	}
        div.style.height = "auto";
    }
    else {
        div.style.height = "0";
        div.style.opacity = "0";
    };

    /*return true;*/
}

function showHideSub(id) {
    var div= document.getElementById(id);
    var div2 = document.getElementById('gal');
    var sub = document.getElementById('submenu');
    if(div.style.opacity == "0") {
        fadeIn(div);
        div.style.padding = "0 0 5% 5%";
        div.style.height = "auto";

        sub.style.height = "auto";
        sub.style.opacity = "1";
        sub.style.filter = "alpha(opacity=100)";

        activeBackCheck(div2, true);
    }
    else {
        div.style.height = "0";
        div.style.opacity = "0";

        sub.style.height = "0";

        activeBackCheck(div2, false);
    };

    /*return true;*/
}

function activeBackCheck(id, activeBool) {
    /* this was needed because activating showHideSub made the tab background
    remain 0, when it needed to maintain hover effects */
    var div = id;

    if (activeBool == true) {
        div.style.background = "rgba(0,0,0,0.3)";
        // makes sure that :hover effects do not change background
        div.onmouseover = function(){div.style.background="rgba(0,0,0,0.3)";};
        div.onmouseout = function(){div.style.background="rgba(0,0,0,0.3)";};
    }
    else {
        div.style.background = "rgba(0,0,0,0)";
        // restores :hover effects even with js changes
        div.onmouseover = function(){div.style.background="rgba(0,0,0,0.4)";};
        div.onmouseout = function(){div.style.background="rgba(0,0,0,0)";};
    }
}