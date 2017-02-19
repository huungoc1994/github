// JavaScript Document



/*======================================================*/

/*$(document).ready(function() {
 "use strict";
 var $website = $("#website");
 $website.hide();

 setTimeout(function() {

 alert("Chào mừng bạn đến với Website tình yêu của Nguyễn Hữu Ngọc và Dương Ngọc Lan");
 alert("Nhớ đeo tai nghe các bạn nhé");

 $website.show(5000);
 }, 100);
 });	*/

/*====================HIỆU ỨNG TRÁI TIM RƠI===============*/




var $width = $(window).width();


if ($width >= 768) {
var pictureSrc = "image/heart.png";
//the location of the snowflakes
var pictureWidth = 20;
//the width of the snowflakes
var pictureHeight = 20;
//the height of the snowflakes
var numFlakes = 25;
//the number of snowflakes
var downSpeed = 0.01;
//the falling speed of snowflakes (portion of screen per 100 ms)
var lrFlakes = 10;
//the speed that the snowflakes should swing from side to side

if ( typeof (numFlakes ) !== 'number' || Math.round(numFlakes) !== numFlakes || numFlakes < 1) {
	numFlakes = 10;
}

//draw the snowflakes
for (var x = 0; x < numFlakes; x++) {
	if (document.layers) {//releave NS4 bug
		document.write('<layer id="snFlkDiv' + x + '"><imgsrc="' + pictureSrc + '" height="' + pictureHeight + '"width="' + pictureWidth + '" alt="*" border="0"></layer>');
	} else {
		document.write('<div style="position:absolute; z-index:9999;" id="snFlkDiv' + x + '"><img src="' + pictureSrc + '"height="' + pictureHeight + '" width="' + pictureWidth + '" alt="*"border="0"></div>');
	}
}

//calculate initial positions (in portions of browser window size)
var xcoords = new Array(),
	ycoords = new Array(),
    snFlkTemp;
for (var x = 0; x < numFlakes; x++) {
	xcoords[x] = (x + 1 ) / (numFlakes + 1 );
	do {
		snFlkTemp = Math.round((numFlakes - 1 ) * Math.random());
	} while( typeof( ycoords[snFlkTemp] ) === 'number' );
	ycoords[snFlkTemp] = x / numFlakes;
}

//now animate


//DHTML handlers
function getRefToDivNest(divName) {
	"use strict";
	if (document.layers) {
		return document.layers[divName];
	}//NS4
	if (document[divName]) {
		return document[divName];
	}//NS4 also
	if (document.getElementById) {
		return document.getElementById(divName);
	}//DOM (IE5+, NS6+, Mozilla0.9+, Opera)
	if (document.all) {
		return document.all[divName];
	}//Proprietary DOM - IE4
	return false;
}

window.setInterval(function() {
	"use strict";
	if (!getRefToDivNest('snFlkDiv0')) {
		return;
	}
	var scrWidth = 0,
	    scrHeight = 0,
	    scrollHeight = 0,
	    scrollWidth = 0;
	//find screen settings for all variations. doing this every time allows for resizing and scrolling
	if ( typeof (window.innerWidth ) === 'number') {
		scrWidth = window.innerWidth;
		scrHeight = window.innerHeight;
	} else {
		if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight )) {
			scrWidth = document.documentElement.clientWidth;
			scrHeight = document.documentElement.clientHeight;
		} else {
			if (document.body && (document.body.clientWidth || document.body.clientHeight )) {
				scrWidth = document.body.clientWidth;
				scrHeight = document.body.clientHeight;
			}
		}
	}
	if ( typeof (window.pageYOffset ) === 'number') {
		scrollHeight = pageYOffset;
		scrollWidth = pageXOffset;
	} else {
		if (document.body && (document.body.scrollLeft || document.body.scrollTop )) {
			scrollHeight = document.body.scrollTop;
			scrollWidth = document.body.scrollLeft;
		} else {
			if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop )) {
				scrollHeight = document.documentElement.scrollTop;
				scrollWidth = document.documentElement.scrollLeft;
			}
		}
	}
	//move the snowflakes to their new position
	for (var x = 0; x < numFlakes; x++) {
		if (ycoords[x] * scrHeight > scrHeight - pictureHeight) {
			ycoords[x] = 0;
		}
		var divRef = getRefToDivNest('snFlkDiv' + x);
		if (!divRef) {
			return;
		}
		if (divRef.style) {
			divRef = divRef.style;
		}
		var oPix = document.childNodes ? 'px' : 0;
		divRef.top = (Math.round(ycoords[x] * scrHeight) + scrollHeight ) + oPix;
		divRef.left = (Math.round(((xcoords[x] * scrWidth ) - (pictureWidth / 2 ) ) + ((scrWidth / ((numFlakes + 1 ) * 4 ) ) * (Math.sin(lrFlakes * ycoords[x]) - Math.sin(3 * lrFlakes * ycoords[x]) ) )) + scrollWidth ) + oPix;
		ycoords[x] += downSpeed;
	}
}, 100);
}





$(document).ready(function() {
	"use strict";
	$("#mq-header").marquee({direction: "left", speed: 15000});
	
	var $bgSound = $("#bg-sound");
	var $mid = $("#mid-content");
	var $click = $("#click");
	var $meo = $("#bg-footer");
	var $shape = $("#shape");
	var $question = $("#bg-question");
	var $content = $("#content");
	var $imgShape = $("#shape img");
	var $Name = $("#myname-urname");
	$content.hide();
	$question.hide();
	$mid.hide();
	$shape.hide();
	$meo.hide();
	$click.click(function() {
		var a = $("#scroll-up").position().top;
		var b = $("#scroll-down").position().top;
		$click.hide(5000);
		$Name.slideDown(5000);
		setTimeout(function() {
			$bgSound.html("<audio src='EmLamNguoiYeuAnhNhe.mp3' autoplay></audio>");
		}, 2000);
		setTimeout(function() {
			$content.slideDown(5000);
			$('html,body').animate({
				scrollTop: b
			}, 8000);
		}, 5000);
		setTimeout(function() {
			$shape.slideDown(5000);
		}, 10000);
		setTimeout(function() {
			$('html,body').animate({
				scrollTop: a
			}, 10000);
		}, 13000);
		setTimeout(function() {
			$meo.slideDown(5000);
		}, 14000);
		setTimeout(function() {
			if (($width >= 240) && ($width < 320)) {
				$mid.show().marquee({direction: "up", speed: 23800});
			}
			else if (($width >= 320) && ($width < 480)) {
				$mid.show().marquee({direction: "up", speed: 23000});
			}
			else if (($width >= 480) && ($width < 768)) {
				$mid.show().marquee({direction: "up", speed: 19000});
			}
			else if (($width >= 768) && ($width < 1024)) {
				$mid.show().marquee({direction: "up", speed: 18500});
			}
			else if (($width >= 1024) && ($width < 1366)) {
				$mid.show().marquee({direction: "up", speed: 16500});
			}
			else {
				$mid.show().marquee({direction: "up", speed: 19800});
			}
			
			$imgShape.animate({
				marginTop : "-9%"
			}, 5000);
		}, 15000);
		setTimeout(function() {
			$question.slideDown(10000);
			$mid.fadeOut(10000);
		}, 223000);
		$click.unbind("click");
	});
	
	$click.mousedown(function() {
		$("#bg-sound").html("<audio src='button-09.mp3' autoplay></audio>");
		$click.css("transform", "scale(0.9)");
	});
	$click.mouseup(function() {
		$click.css("transform", "scale(1)");
	});
});

$(document).ready(function() {
	"use strict";
	var $denied1 = $("#denied1");
	var $denied2 = $("#denied2");
	var $agree = $("#agree");
	$denied2.hover(function() {
		$denied2.css("visibility", "hidden");
		$denied1.css("visibility", "visible");
	});
	$denied1.hover(function() {
		$denied2.css("visibility", "visible");
		$denied1.css("visibility", "hidden");
	});
	$agree.click(function() {
		$("#bg-sound").html("<audio src='cau-vong-tinh-yeu-2.mp3' autoplay></audio>");
		alert("Có hả, có click nhầm không đấy? !!");
		alert("Chắc không click nhầm đâu nhỉ... hì hì");
		alert("Yêu thì cho hun cái nè ...");
		alert("chụt .................");
		alert("Cái nữa nè :)");
		alert("Chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt chụt...");
		alert("Đã nha hehehhee");
		alert("I LOVE YOU");
		alert("Lêu Lêu !!!!!!!!");
		$agree.unbind("click");
	});
});
