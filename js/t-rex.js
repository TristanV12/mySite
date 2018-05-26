var color1 = "#f6bd60";
var color2 = "#4c4b63";
var color3 = "#949396";
var color4 = "#aba8b2";

var morph = 1;
var max = 3;

var t_rex_height = 125;
var t_rex_width = 120;

var snake_height = 100;
var snake_width = 200;

var wolf_height = 125;
var wolf_width = 20;

var testing = false;
var speed = 100;

var screenWidth;
var screenHeight;

var pos;

function make_t_rex(top, right, selection){
	var triangle;
	var unit = 25
	if(selection == 1 || selection == 0){
		triangle = $('#triangle1');
		triangle.css("top", top.toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-left", unit.toFixed() + "px solid " + color1);
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");
		triangle.css("border-top", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle5');
		triangle.css("top", (top + unit).toFixed() + "px");
		triangle.css("right", (right - (3 * unit)).toFixed() + "px");
		triangle.css("border-left", unit.toFixed() + "px solid " + color1);
		triangle.css("border-top", unit.toFixed() + "px solid transparent");
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle10');
		triangle.css("top", top.toFixed() + "px");
		triangle.css("right", (right - (5 * unit)).toFixed() + "px");
		triangle.css("border-top", unit.toFixed() + "px solid " + color1);
		triangle.css("border-right", unit.toFixed() + "px solid transparent");
		triangle.css("border-left", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle14');
		triangle.css("top", (top + (3 * unit)).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-right", unit.toFixed() + "px solid " + color1);
		triangle.css("border-top", unit.toFixed() + "px solid transparent");
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");
	}

	if(selection == 2 || selection == 0){
		triangle = $('#triangle2');
		triangle.css("top", (top + (2 * unit)).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-left", unit.toFixed() + "px solid " + color2);
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");
		triangle.css("border-top", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle7');
		triangle.css("top", top.toFixed() + "px");
		triangle.css("right", (right - (4 * unit)).toFixed() + "px");
		triangle.css("border-bottom", unit.toFixed() + "px solid " + color2);
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
		triangle.css("border-right", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle9');
		triangle.css("top", (top + unit).toFixed() + "px");
		triangle.css("right", (right - (4 * unit)).toFixed() + "px");
		triangle.css("border-right", unit.toFixed() + "px solid " + color2);
		triangle.css("border-top", unit.toFixed() + "px solid transparent");
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle15');
		triangle.css("top", (top + (3 * unit)).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-left", (2 * unit).toFixed() + "px solid " + color2);
		triangle.css("border-top", (2 * unit).toFixed() + "px solid transparent");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid transparent");
	}

	if(selection == 3 || selection == 0){
		triangle = $('#triangle3');
		triangle.css("top", (top + unit).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-right", unit.toFixed() + "px solid " + color3);
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");
		triangle.css("border-top", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle8');
		triangle.css("top", (top + unit).toFixed() + "px");
		triangle.css("right", (right - (4 * unit)).toFixed() + "px");
		triangle.css("border-top", unit.toFixed() + "px solid " + color3);
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
		triangle.css("border-right", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle11');
		triangle.css("top", (top + unit).toFixed() + "px");
		triangle.css("right", (right - (5 * unit)).toFixed() + "px");
		triangle.css("border-left", unit.toFixed() + "px solid " + color3);
		triangle.css("border-top", unit.toFixed() + "px solid transparent");
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle16');
		triangle.css("top", (top + (3 * unit)).toFixed() + "px");
		triangle.css("right", right.toFixed() + "px");
		triangle.css("border-right", (2 * unit).toFixed() + "px solid " + color3);
		triangle.css("border-top", (2 * unit).toFixed() + "px solid transparent");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle18');
		triangle.css("top", (top + (4 * unit)).toFixed() + "px");
		triangle.css("right", (right - (3 * unit)).toFixed() + "px");
		triangle.css("border-bottom", (unit / 2).toFixed() + "px solid " + color3);
		triangle.css("border-left", "0px solid transparent");
		triangle.css("border-right", unit.toFixed() + "px solid transparent");
	}

	if(selection == 4 || selection == 0){
		triangle = $('#triangle4');
		triangle.css("top", top.toFixed() + "px");
		triangle.css("right", (right - (3 * unit)).toFixed() + "px");
		triangle.css("border-top", unit.toFixed() + "px solid " + color4);
		triangle.css("border-right", unit.toFixed() + "px solid transparent");
		triangle.css("border-left", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle6');
		triangle.css("top", (top + (2 * unit)).toFixed() + "px");
		triangle.css("right", (right - (4 * unit)).toFixed() + "px");
		triangle.css("border-bottom", unit.toFixed() + "px solid " + color4);
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
		triangle.css("border-right", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle12');
		triangle.css("top", (top).toFixed() + "px");
		triangle.css("right", (right - (5 * unit)).toFixed() + "px");
		triangle.css("border-right", unit.toFixed() + "px solid " + color4);
		triangle.css("border-top", unit.toFixed() + "px solid transparent");
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle13');
		triangle.css("top", (top + (2 * unit)).toFixed() + "px");
		triangle.css("right", (right - unit).toFixed() + "px");
		triangle.css("border-right", unit.toFixed() + "px solid " + color4);
		triangle.css("border-top", unit.toFixed() + "px solid transparent");
		triangle.css("border-bottom", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle17');
		triangle.css("top", (top + (6 * unit)).toFixed() + "px");
		triangle.css("right", (right - (3 * unit)).toFixed() + "px");
		triangle.css("border-bottom", unit.toFixed() + "px solid " + color4);
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
		triangle.css("border-right", (2 * unit).toFixed() + "px solid transparent");
	}
}

function make_snake(top, right, selection){
	var triangle;
	var unit = 25;

	if(selection == 4 || selection == 0){
		triangle = $('#triangle1');
		triangle.css("top", top.toFixed() + "px");
		triangle.css("right", (right - (13 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-top", (3 * unit).toFixed() + "px solid " + color1);
		triangle.css("border-right", (2 * unit).toFixed() + "px solid transparent");
		triangle.css("border-left", (2 * unit).toFixed() + "px solid transparent");
	}

	if(selection == 1 || selection == 0){
		triangle = $('#triangle2');
		triangle.css("top", (top + unit).toFixed() + "px");
		triangle.css("right", (right - (13 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid " + color2);
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
		triangle.css("border-right", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle5');
		triangle.css("top", (top + 1 + (3 * unit)).toFixed() + "px");
		triangle.css("right", (right - (11 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-bottom", unit.toFixed() + "px solid " + color2);
		triangle.css("border-right", unit.toFixed() + "px solid transparent");
		triangle.css("border-left", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle8');
		triangle.css("top", (top + 2 + (4 * unit)).toFixed() + "px");
		triangle.css("right", (right - (19 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-bottom", (unit * 2).toFixed() + "px solid " + color2);
		triangle.css("border-right", unit.toFixed() + "px solid transparent");
		triangle.css("border-left", (4 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle11');
		triangle.css("top", (top + 2 + (4 * unit)).toFixed() + "px");
		triangle.css("right", right.toFixed() + "px");
		triangle.css("border-bottom", (unit * 2).toFixed() + "px solid " + color2);
		triangle.css("border-right", (unit / 2).toFixed() + "px solid transparent");
		triangle.css("border-left", (unit / 2).toFixed() + "px solid transparent");
	}

	if(selection == 2 || selection == 0){
		triangle = $('#triangle3');
		triangle.css("top", (top + 1 + (3 * unit)).toFixed() + "px");
		triangle.css("right", (right - (13 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-top", unit.toFixed() + "px solid " + color3);
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
		triangle.css("border-right", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle7');
		triangle.css("top", (top + 1 + (3 * unit)).toFixed() + "px");
		triangle.css("right", (right - (7 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-bottom", unit.toFixed() + "px solid " + color3);
		triangle.css("border-right", unit.toFixed() + "px solid transparent");
		triangle.css("border-left", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle10');
		triangle.css("top", (top + 2 + (4 * unit)).toFixed() + "px");
		triangle.css("right", (right - (17 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-top", (unit * 2).toFixed() + "px solid " + color3);
		triangle.css("border-right", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-left", (4 * unit).toFixed() + "px solid transparent");
	}

	if(selection == 3 || selection == 0){
		triangle = $('#triangle4');
		triangle.css("top", (top + 1 + (3 * unit)).toFixed() + "px");
		triangle.css("right", (right - (15 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-bottom", unit.toFixed() + "px solid " + color4);
		triangle.css("border-right", unit.toFixed() + "px solid transparent");
		triangle.css("border-left", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle6');
		triangle.css("top", (top + 1 + (3 * unit)).toFixed() + "px");
		triangle.css("right", (right - (9 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-top", unit.toFixed() + "px solid " + color4);
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
		triangle.css("border-right", unit.toFixed() + "px solid transparent");

		triangle = $('#triangle9');
		triangle.css("top", (top + 2 + (4 * unit)).toFixed() + "px");
		triangle.css("right", (right - (9 * (unit / 2.0))).toFixed() + "px");
		triangle.css("border-bottom", (unit * 2).toFixed() + "px solid " + color4);
		triangle.css("border-right", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-left", unit.toFixed() + "px solid transparent");
	}
}

function make_wolf(top, right, selection){
	var triangle;
	var unit = 10;

	if(selection == 1 || selection == 0){ // red
		triangle = $('#triangle5');
		triangle.css("top", (top + (4 * unit)).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-left", (2 * unit).toFixed() + "px solid " + color1);
		triangle.css("border-top", (2 * unit).toFixed() + "px solid transparent");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle8');
		triangle.css("top", (top + (8 * unit)).toFixed() + "px");
		triangle.css("right", (right - (4 * unit)).toFixed() + "px");
		triangle.css("border-left", (4 * unit).toFixed() + "px solid " + color1);
		triangle.css("border-top", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-bottom", (4 * unit).toFixed() + "px solid transparent");
	}

	if(selection == 2 || selection == 0){ // green
		triangle = $('#triangle4');
		triangle.css("top", (top + (2 * unit)).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-right", (2 * unit).toFixed() + "px solid " + color2);
		triangle.css("border-top", (2 * unit).toFixed() + "px solid transparent");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle9');
		triangle.css("top", (top + (12 * unit)).toFixed() + "px");
		triangle.css("right", right.toFixed() + "px");
		triangle.css("border-top", (4 * unit).toFixed() + "px solid " + color2);
		triangle.css("border-left", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-right", (0 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle12');
		triangle.css("top", (top + (16 * unit)).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid " + color2);
		triangle.css("border-left", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-right", (2 * unit).toFixed() + "px solid transparent");
	}

	if(selection == 3 || selection == 0){ // blue
		triangle = $('#triangle1');
		triangle.css("top", top.toFixed() + "px");
		triangle.css("right", (right - (6 * unit)).toFixed() + "px");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid " + color3);
		triangle.css("border-right", "0px solid transparent");
		triangle.css("border-left", (4 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle3');
		triangle.css("top", (top + (2 * unit)).toFixed() + "px");
		triangle.css("right", (right - (2 * unit)).toFixed() + "px");
		triangle.css("border-top", (2 * unit).toFixed() + "px solid " + color3);
		triangle.css("border-right", (2 * unit).toFixed() + "px solid transparent");
		triangle.css("border-left", (2 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle6');
		triangle.css("top", (top + (4 * unit)).toFixed() + "px");
		triangle.css("right", (right - (4 * unit)).toFixed() + "px");
		triangle.css("border-right", (4 * unit).toFixed() + "px solid " + color3);
		triangle.css("border-top", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-bottom", (4 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle10');
		triangle.css("top", (top + (12 * unit)).toFixed() + "px");
		triangle.css("right", right.toFixed() + "px");
		triangle.css("border-left", (4 * unit).toFixed() + "px solid " + color3);
		triangle.css("border-top", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-bottom", (2 * unit).toFixed() + "px solid transparent");
	}

	if(selection == 4 || selection == 0){ // orange
		triangle = $('#triangle2');
		triangle.css("top", (top + (2 * unit)).toFixed() + "px");
		triangle.css("right", (right - (6 * unit)).toFixed() + "px");
		triangle.css("border-top", (4 * unit).toFixed() + "px solid " + color4);
		triangle.css("border-left", "0px solid transparent");
		triangle.css("border-right", (4 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle7');
		triangle.css("top", (top + (4 * unit)).toFixed() + "px");
		triangle.css("right", right.toFixed() + "px");
		triangle.css("border-right", (4 * unit).toFixed() + "px solid " + color4);
		triangle.css("border-bottom", "0px solid transparent");
		triangle.css("border-top", (8 * unit).toFixed() + "px solid transparent");

		triangle = $('#triangle11');
		triangle.css("top", (top + (12 * unit)).toFixed() + "px");
		triangle.css("right", (right - (4 * unit)).toFixed() + "px");
		triangle.css("border-right", (2 * unit).toFixed() + "px solid " + color4);
		triangle.css("border-bottom", (4 * unit).toFixed() + "px solid transparent");
		triangle.css("border-top", (2 * unit).toFixed() + "px solid transparent");
	}
}

function animation(top, right){
	var triangle;
	var unit = 25;

	triangle = $('#triangle1');
	triangle.css("top", top.toFixed() + "px");
	triangle.css("right", (right - (4 * unit)).toFixed() + "px");
	triangle.css("border-right", (4 * unit).toFixed() + "px solid " + color1);
	triangle.css("border-top", (4 * unit).toFixed() + "px solid transparent");
	triangle.css("border-bottom", (4 * unit).toFixed() + "px solid transparent");

	triangle = $('#triangle2');
	triangle.css("top", top.toFixed() + "px");
	triangle.css("right", right.toFixed() + "px");
	triangle.css("border-left", (4 * unit).toFixed() + "px solid " + color2);
	triangle.css("border-top", (4 * unit).toFixed() + "px solid transparent");
	triangle.css("border-bottom", (4 * unit).toFixed() + "px solid transparent");

	triangle = $('#triangle3');
	triangle.css("top", (top + (4 * unit)).toFixed() + "px");
	triangle.css("right", (right - (4 * unit)).toFixed() + "px");
	triangle.css("border-bottom", (4 * unit).toFixed() + "px solid " + color3);
	triangle.css("border-right", (4 * unit).toFixed() + "px solid transparent");
	triangle.css("border-left", (4 * unit).toFixed() + "px solid transparent");

	triangle = $('#triangle4');
	triangle.css("top", top.toFixed() + "px");
	triangle.css("right", (right - (4 * unit)).toFixed() + "px");
	triangle.css("border-top", (4 * unit).toFixed() + "px solid " + color4);
	triangle.css("border-right", (4 * unit).toFixed() + "px solid transparent");
	triangle.css("border-left", (4 * unit).toFixed() + "px solid transparent");
}

function control(){
	if(morph == max){ morph = 1; }
	else{ morph = morph + 1; }
	something_professional(1, pos);
}
function fix_title(num){
	if(num == 2){
		$('#title').css("width", "90%");
		$('#title').css("top", "175px");
		$('#title').css("right", "5%");
		$('#title-text').css("text-align", "center");
	}
	if(num == 0){
		$('#title').css("width", "50%");
		$('#title').css("top", ((screenHeight - $('#title').height()) / 2).toFixed() + "px");
		$('#title').css("right", (screenWidth / 8).toFixed() + "px");
		$('#title-text').css("text-align", "left");
	}
	if(num == 1){
		$('#title').css("width", "65%");
		$('#title').css("top", (15).toFixed() + "px");
		$('#title').css("right", (screenWidth / 8).toFixed() + "px");
		$('#title-text').css("text-align", "left");
	}
}

//If position is 1, position logo in the top left, otherwise main position
function something_professional(num, position){
	screenWidth = $(window).width();
	screenHeight = $(window).height();
	pos = position;
	$('#title').css("top", ((screenHeight - $('#title').height()) / 2).toFixed() + "px");
	$('#title').css("right", (screenWidth / 24).toFixed() + "px");
	$('#animal').html("");
	for (var i = 24; i >= 0; i--) {
		$('#animal').html($('#animal').html() + "<div id=\"triangle" + i.toString() + "\" class=\"triangle\" onclick=\"control()\"></div>");
	};
	//animation((screenHeight / 2) - 100, (screenWidth / 2));
	if(!testing){
		if(morph == 1 && num == 1){
			var i = 1;
			var top = 15;
			var right = (5 * screenWidth / 6) + t_rex_width;
			if(position == 0){
				right = (2 * screenWidth / 3) + t_rex_width;
				top = (screenHeight - t_rex_height - 50) / 2;
			}
			if((screenWidth / 3) * (1 - position) + (screenWidth / 6) * (position) < snake_width + 50){
				top = 25;
				right = (screenWidth / 2) + (t_rex_width / 2);
				fix_title(2);
			}else{ fix_title(position); }

			var interval = setInterval(function(){
				make_t_rex(top, right, i);
				i += 1;
				if(i >= 5){
					clearInterval(interval);
				}
			}, speed);
		}else if(morph == 2 && num == 1){
			var i = 1;
			var top = 15;
			var right = (5 * screenWidth / 6) + snake_width + 50;
			if(position == 0){
				right = (2 * screenWidth / 3) + snake_width + 50;
				top = (screenHeight - snake_height - 50) / 2;
			}
			if((screenWidth / 3) * (1 - position) + (screenWidth / 6) * (position) < snake_width + 50){
				top = 25;
				right = (screenWidth / 2) + (snake_width / 2);
				fix_title(2);
			}else{ fix_title(position); }
			var interval = setInterval(function(){
				make_snake(top, right, i);
				i += 1;
				if(i >= 5){
					clearInterval(interval);
				}
			}, speed);
		}else if(morph == 3 && num == 1){
			var i = 1;
			var top = 15;
			var right = (5 * screenWidth / 6) + wolf_width + 50;
			if(position == 0){
				right = (2 * screenWidth / 3) + wolf_width + 50;
				top = (screenHeight - wolf_height - 50) / 2;
			}
			if((screenWidth / 3) * (1 - position) + (screenWidth / 6) * (position) < snake_width + 50){
				top = 25;
				right = (screenWidth / 2) + (wolf_width / 2);
				fix_title(2);
			}else{ fix_title(position); }

			var interval = setInterval(function(){
				make_wolf(top, right, i);
				i += 1;
				if(i >= 5){
					clearInterval(interval);
				}
			}, speed);
		}
		if(morph == 1 && num == 0){
			var top = (screenHeight - t_rex_height - 50) / 2;
			var right = (2 * screenWidth / 3) + t_rex_width;
			if((screenWidth / 3) < t_rex_width){
				top = 25;
				right = (screenWidth / 2) + (t_rex_width / 2);
				fix_title(2);
			}else{ fix_title(position); }
			make_t_rex(top, right, 0);
		}else if(morph == 2 && num == 0){
			var top = (screenHeight - snake_height - 50) / 2;
			var right = (2 * screenWidth / 3) + snake_width + 50;
			if((screenWidth / 3) < snake_width + 50){
				top = 25;
				right = (screenWidth / 2) + (snake_width / 2);
				fix_title(2);
			}else{ fix_title(position); }
			make_snake(top, right, 0);
		}else if(morph == 3 && num == 0){
			var top = (screenHeight - wolf_height - 50) / 2;
			var right = (2 * screenWidth / 3) + wolf_width + 50;
			if((screenWidth / 3) < wolf_width + 50){
				top = 25;
				right = (screenWidth / 2) + (wolf_width / 2);
				fix_title(2);
			}else{ fix_title(position); }
			make_wolf(top, right, 0);
		}
	}
}