
$(document).ready(function(){
	$(this).contextmenu(function() {return false;}); // Removes right click menu
	$(this).bind('dragstart',function(){return false;});

	var element = [];
	var check = false;
	
	$(this).click(function(e){
	// 	try{ 
	// 	switch(true){
	// 	// Upper/lower case buttons
		
	// 		case e.target.firstChild.data == "UPPER - CASE": 
	// 			if ($case!= undefined) {$case.removeClass("btn-outline-info").addClass("btn-info")}
	// 			$case = $(e.target);
	// 			$(e.target).removeClass("btn-info").addClass("btn-outline-info");
	// 		break;

	// 		case e.target.firstChild.data == "lower - case": 
	// 			if ($case!=undefined) {$case.removeClass("btn-outline-info").addClass("btn-info")}
	// 			$case = $(e.target);
	// 			$(e.target).removeClass("btn-info").addClass("btn-outline-info");
	// 		break;

	// 		// Font size
	// 		case e.target.firstChild.data == "Small": 
	// 			if ($fontSize!= undefined) {$fontSize.removeClass("btn-outline-dark").addClass("btn-dark")}
	// 			$fontSize = $(e.target);
	// 			$(e.target).removeClass("btn-dark").addClass("btn-outline-dark");
	// 		break;

	// 		case e.target.firstChild.data == "Medium": 
	// 			if ($fontSize!=undefined) {$fontSize.removeClass("btn-outline-dark").addClass("btn-dark")}
	// 			$fontSize = $(e.target);
	// 			$(e.target).removeClass("btn-dark").addClass("btn-outline-dark");
	// 		break;

	// 		case e.target.firstChild.data == "Big": 
	// 			if ($fontSize!=undefined) {$fontSize.removeClass("btn-outline-dark").addClass("btn-dark")}
	// 			$fontSize = $(e.target);
	// 			$(e.target).removeClass("btn-dark").addClass("btn-outline-dark");
	// 		break;
	// 	}
	// 	}catch(err) {}

	const cssClass1 = ["btn btn-outline-primary","btn btn-outline-dark","btn btn-outline-secondary","btn btn-info","btn btn-dark"];
	const cssClass2 = ["btn btn-primary","btn btn-dark","btn btn-secondary","btn btn-outline-info","btn btn-outline-dark"];

	if (e.target.nodeName =="BUTTON") {
		let holdClass = e.target.className;

		console.log(holdClass)
		if (element[e.target.className]!= undefined) {
			$(element[holdClass]).removeClass(holdClass).addClass("btn btn-info");
		}

		$(e.target).removeClass(holdClass).addClass(cssClass2[cssClass1.indexOf(holdClass)]);
		element[holdClass] = e.target;


	}
		
	});






	$(".box").mousedown(function(e){
		$(this).mousemove(function(e){ 
			if (e.which == 1) {
				$("ul:eq("+(e.target.parentNode.id-1)+") li:eq("+(e.target.id-1)+")").css("background-color","#27AE60");
			}

			if (e.which == 3) {
				$("ul:eq("+(e.target.parentNode.id-1)+") li:eq("+(e.target.id-1)+")").css("background-color","");
			}
		})

		if (e.which == 1) {
			$("ul:eq("+(e.target.parentNode.id-1)+") li:eq("+(e.target.id-1)+")").css("background-color","#27AE60");
		}

		if (e.which == 3) {
			$("ul:eq("+(e.target.parentNode.id-1)+") li:eq("+(e.target.id-1)+")").css("background-color","");
		}
	})
});




	// 	if (text[i] == " ") {space = 6;}else{console.log(text[i])}
	// 	drawLatters = Alphabet("E","Small",0,0);
	// 	for (var c = 0; c < drawLatters[0].length; c++) {
	// 		document.getElementsByTagName('UL')[drawLatters[0][c]].getElementsByTagName('LI')[drawLatters[1][c]].style.background="teal";
	// 	}

	// var arrayLatter = [];
	// 	arrayLatter[0] = [];
	// 	arrayLatter[1] = [];

	// document.oncontextmenu = function () {
	//    return false;
	// };
	// document.addEventListener("mousedown",function(e){
	// 	if (e.button == 0) {
	// 		if (!(arrayLatter[0][e.target.parentNode.id+e.target.id] == e.target.parentNode.id && arrayLatter[1][e.target.parentNode.id+e.target.id] == e.target.id)) {
	// 			document.getElementsByTagName('UL')[e.target.parentNode.id].getElementsByTagName('LI')[e.target.id].style.background="red";
	// 			arrayLatter[0][e.target.parentNode.id+""+e.target.id] = Number(e.target.parentNode.id);
	// 			arrayLatter[1][e.target.parentNode.id+""+e.target.id] = Number(e.target.id);
	// 		}
	// 	}else if (e.button == 2){
	// 		if (arrayLatter[0][e.target.parentNode.id+e.target.id] == e.target.parentNode.id && arrayLatter[1][e.target.parentNode.id+e.target.id] == e.target.id) {
	// 			document.getElementsByTagName('UL')[e.target.parentNode.id].getElementsByTagName('LI')[e.target.id].style.background="";
	// 			delete arrayLatter[0][e.target.parentNode.id+""+e.target.id];
	// 			delete arrayLatter[1][e.target.parentNode.id+""+e.target.id];
	// 		}
	// 	}

	// 	if (e.button == 1) {
	// 		console.log("["+(arrayLatter[0].filter(Number).map(y => y+"+y"))+"],["+(arrayLatter[1].filter(Number).map(x => x+"+x"))+"]");

	// 	}
	// });