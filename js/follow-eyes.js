
// Defaults
var jseyesimg="img/claus.png";
var jseyeimg="img/jseyeblue.gif";
var jseyeslink="http://localhost/";


// Internal
var jseyeso=null, jseye1=null, jseye2=null;
var standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body //create reference to common "body" across doctypes

// General utils

// Find object by name or id
function jseyesobj(id) {
  var i, x;
  x= document[id];
  if (!x && document.getElementById) x= document.getElementById(id);
  for (i=0; !x && i<document.forms.length; i++) x= document.forms[i][id];
  return(x);
}


// Move eyes
function jseyesmove(x, y) {
  var ex, ey, dx, dy;
  if (jseyeso && jseye1 && jseye2 && jseyeso.style) {
    ex=jseyeso.offsetLeft+46; ey=jseyeso.offsetTop+58;
    dx=x-ex; dy=y-ey;
    r=(dx*dx/8+dy*dy/109<1) ? 1 : Math.sqrt(8*109/(dx*dx*109+dy*dy*8));
    jseye1.style.left= r*dx+128.5+'px'; jseye1.style.top= r*dy+86+'px';
    ex+=56; dx-=56;
    r=(dx*dx/8+dy*dy/109<1) ? 1 : Math.sqrt(8*109/(dx*dx*109+dy*dy*8));
    jseye2.style.left= r*dx+150.5+'px'; jseye2.style.top= r*dy+86+'px';
  }
}



// Main
function jseyes() {
  var img;
  var x, y, a=false;

  if (arguments.length==2) {
    x= arguments[0];
    y= arguments[1];
    a= true;
  }

    img= "<div id='jseyeslayer' class='hidden-md hidden-sm hidden-xs' style='position:"+
           (a ? "absolute; left:"+x+"; top:"+y : "relative")+
           "; z-index:5; width:300; height:400 overflow:hidden'>"+
	     "<div id='jseye1' style='position:absolute; left:127; top:90; z-index:6; width:12; height:20'>"+
	       "<img class='papa' src='"+jseyeimg+"' width=10 height=20 />"+
	     "</div>"+
	     "<div id='jseye2' style='position:absolute; left:150; top:90; z-index:6; width:12; height:20'>"+
	       "<img class='papa' src='"+jseyeimg+"' width=10 height=20 />"+
	     "</div>"+
	     "<img class='papa' src='"+jseyesimg+"' width=300 height=400 />"+
	 "</div>";
    $('.claus').append(img);
    jseyeso=jseyesobj('jseyeslayer');
    jseye1=jseyesobj('jseye1');
    jseye2=jseyesobj('jseye2');

    document.onmousemove=jseyesmousemove;
}

// Mouse move events

function jseyesmousemove(e) {
		var mousex=(e)? e.pageX : event.clientX+standardbody.scrollLeft
		var mousey=(e)? e.pageY : event.clientY+standardbody.scrollTop
  jseyesmove(mousex, mousey);
  //return(false);
}