// var characterCase = "Capital";
// var character = null;
// var elmTag = null; 
// var check = null;
// var config = false;
const element = [];
const cssClass1 = ["btn btn-outline-primary","btn btn-outline-dark","btn btn-outline-info"];
const cssClass2 = ["btn btn-primary","btn btn-dark","btn btn-info"];


$(document).ready(function(){
	$(this).contextmenu(function() {return false;}); // Removes right click menu
	$(this).bind('dragstart',function(){return false;});


	// button toggle
	$(this).click(function(e){
		if (e.target.nodeName == "BUTTON" || e.target.nodeName == "LABEL" && ($(e.target).html()) != "Reset") {
		let holdClass = e.target.className;
console.log($.trim($(e.target).text()))
			
			// // toggle style
			if ($.trim($(e.target).text()) == "UPPER - CASE") {$("#char").find("button").css("text-transform", "uppercase");characterCase = "Capital"}
			if ($.trim($(e.target).text()) == "lower - case") {$("#char").find("button").css("text-transform", "lowercase");characterCase = "Small"}

			// toggle prev class
			if (!jQuery.isEmptyObject(element)) {
				let tempElm = $(element[holdClass.split("-")[holdClass.split("-").length-1]]);
				
				if (typeof $(tempElm).html() != "undefined" && typeof $(e.target).html() != "undefined"){
					if ($(tempElm).html() != $(e.target).html()) {
						let cActive = tempElm.attr('class');
						let cName = "btn btn-outline-primary";//cActive.substr(0,cActive.length-cActive.split(" ").pop().length-1);
						tempElm.removeClass(cActive).addClass(cName);
					}
				}
			}

			element[holdClass.split("-")[holdClass.split("-").length-1]] = e.target;		
		}
	});
});


// // Grid controlls / data manipulation 
// $.grid = function(){
// 	$(".box").mousedown(function(e){ 
// 		if (config == false) {
// 			$(this).mousemove(function(e){
// 				check = "Edit";
	
// 				if (e.which == 1) {
// 					$("ul:eq("+(e.target.parentNode.id-1)+") li:eq("+(e.target.id-1)+")").css("background-color","#27AE60");
// 				}
// 				if (e.which == 3) {
// 					$("ul:eq("+(e.target.parentNode.id-1)+") li:eq("+(e.target.id-1)+")").css("background-color","");
// 				}
// 			});
// 			if (e.which == 1) {
// 				$("ul:eq("+(e.target.parentNode.id-1)+") li:eq("+(e.target.id-1)+")").css("background-color","#27AE60");
// 			}
// 			if (e.which == 3) {
// 				$("ul:eq("+(e.target.parentNode.id-1)+") li:eq("+(e.target.id-1)+")").css("background-color","");
// 			}
// 		}
// 	});
// }

	

// // Stores all data

// var latters = [];
// var xdata = "", ydata = "";
// var cnt = 0;


// $.dataBase = function(){
// 	$(elmTag).css("font-weight","bold");
// 	// if (check == "Edit" ) {$(elmTag).css("font-weight","bold");check = "charPress"}
// 	// || check == "charPress"

// 	xdata = "";
// 	ydata = "";
// 	character = character.toUpperCase();
// 	latters[character] = {"Capital":[[],[]],"Small":[[],[]]}

// 	console.log(latters[character]["Capital"][0],latters[character]["Capital"][0][1])
// 	for (var r = 0; r < 5; r++) {
// 		for (var c = 0; c < 5; c++) {


// 			if ($("ul:eq("+(r)+") li:eq("+(c)+")").css("background-color") != "rgba(0, 0, 0, 0)") {
// 				// xdata+="x+"+c+",";
// 				// ydata+="y+"+r+",";
// 				latters[character]["Capital"][0].push(c);
// 				latters[character]["Capital"][1].push(r);
// 			}
// 		}
// 	}
// }