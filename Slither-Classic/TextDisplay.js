/*
function LoadSplash() {
	var text = "PRESS-W-S-D";
	var space = 0;
	var drawLatters;
	var cnt = 0;
	var cntx = 0;
	var num = text.length-1;
	var stop = 70;
	// var textGrid = document.getElementsByTagName('UL')[5].getElementsByTagName('LI')[0];



	// for (var i = 0; i < text.length; i++) {}
		// if (text[i] == " ") {space = 6;}else{console.log(text[i])}
		setInterval(function(){

			if (cnt >= stop) {cnt = 0;cntx = 0;num--;stop-=6}
			if (num >= text.length) {num = text.length}

			if (cnt < stop) {cnt+=6;
			drawLatters = Alphabet(text[num],"Capital",cnt,0);
			for (var c = 0; c < drawLatters[0].length; c++) {
				document.getElementsByTagName('UL')[drawLatters[0][c]].getElementsByTagName('LI')[drawLatters[1][c]].style.background="rgb(255, 87, 51)";
			}
			}

			if (cnt > 5) {
			drawLatters = Alphabet(text[num],"Capital",cntx,0);
			for (var c = 0; c < drawLatters[0].length; c++) {
				document.getElementsByTagName('UL')[drawLatters[0][c]].getElementsByTagName('LI')[drawLatters[1][c]].style.background="";
			}
			cntx+=6;
		}

		},10);



		// drawLatters = Alphabet(text[i],"Capital",(i*(6+space)),0);
		// for (var c = 0; c < drawLatters[0].length; c++) {
		// 	document.getElementsByTagName('UL')[drawLatters[0][c]].getElementsByTagName('LI')[drawLatters[1][c]].style.background="teal";
		// }
		
	





		// if (text[i] == " ") {space = 6;}else{console.log(text[i])}
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
}*/



function Alphabet(latter,caseType,x,y){
	var latters = {
		"A":{"Capital":[[1+y,2+y,2+y,3+y,3+y,4+y,4+y,4+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y],[3+x,2+x,4+x,1+x,5+x,1+x,2+x,3+x,4+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x]],
		"Small":[[3+y,3+y,3+y,4+y,5+y,5+y,5+y,5+y,6+y,6+y,7+y,7+y,7+y],[2+x,3+x,4+x,5+x,2+x,3+x,4+x,5+x,1+x,5+x,2+x,3+x,4+x]]},

		"B":{"Capital":[[1+y,1+y,1+y,1+y,2+y,2+y,3+y,3+y,4+y,4+y,4+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y,7+y,7+y],[1+x,2+x,3+x,4+x,1+x,5+x,1+x,5+x,1+x,2+x,3+x,4+x,5+x,1+x,5+x,1+x,5+x,1+x,2+x,3+x,4+x]],
		"Small":[[3+y,4+y,5+y,5+y,5+y,5+y,6+y,6+y,7+y,7+y,7+y,7+y],[1+x,1+x,1+x,2+x,3+x,4+x,1+x,5+x,1+x,2+x,3+x,4+x]]},

		"C":{"Capital":[[1+y,1+y,1+y,1+y,2+y,3+y,4+y,5+y,6+y,7+y,7+y,7+y,7+y],[2+x,3+x,4+x,5+x,1+x,1+x,1+x,1+x,1+x,2+x,3+x,4+x,5+x]],
		"Small":[[3+y,3+y,3+y,3+y,4+y,5+y,6+y,7+y,7+y,7+y,7+y],[2+x,3+x,4+x,5+x,1+x,1+x,1+x,2+x,3+x,4+x,5+x]]},

		"D":{"Capital":[[1+y,1+y,1+y,2+y,2+y,3+y,3+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y,7+y],[1+x,2+x,3+x,1+x,4+x,1+x,5+x,1+x,5+x,1+x,5+x,1+x,4+x,1+x,2+x,3+x]],
		"Small":[[3+y,4+y,5+y,5+y,5+y,5+y,6+y,6+y,7+y,7+y,7+y,7+y],[5+x,5+x,2+x,3+x,4+x,5+x,1+x,5+x,2+x,3+x,4+x,5+x]]},

		"E":{"Capital":[[1+y,1+y,1+y,1+y,1+y,2+y,3+y,4+y,4+y,4+y,4+y,4+y,5+y,6+y,7+y,7+y,7+y,7+y,7+y],[1+x,2+x,3+x,4+x,5+x,1+x,1+x,1+x,2+x,3+x,4+x,5+x,1+x,1+x,1+x,2+x,3+x,4+x,5+x]],
		"Small":[[3+y,3+y,3+y,4+y,4+y,5+y,5+y,5+y,5+y,6+y,7+y,7+y,7+y,7+y],[2+x,3+x,4+x,1+x,5+x,2+x,3+x,4+x,5+x,1+x,2+x,3+x,4+x,5+x]]},

		"F":{"Capital":[[1+y,1+y,1+y,1+y,1+y,2+y,3+y,4+y,4+y,4+y,4+y,4+y,5+y,6+y,7+y],[1+x,2+x,3+x,4+x,5+x,1+x,1+x,1+x,2+x,3+x,4+x,5+x,1+x,1+x,1+x]],
		"Small":[[3+y,3+y,3+y,3+y,4+y,5+y,5+y,5+y,5+y,6+y,7+y],[2+x,3+x,4+x,5+x,2+x,1+x,2+x,3+x,4+x,2+x,2+x]]},

		"G":{"Capital":[[1+y,1+y,1+y,1+y,2+y,3+y,4+y,4+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y,7+y,7+y],[2+x,3+x,4+x,5+x,1+x,1+x,1+x,3+x,4+x,5+x,1+x,5+x,1+x,5+x,2+x,3+x,4+x,5+x]],
		"Small":[[3+y,3+y,3+y,4+y,4+y,5+y,5+y,5+y,6+y,7+y,7+y,7+y],[2+x,3+x,4+x,1+x,5+x,2+x,3+x,4+x,5+x,2+x,3+x,4+x]]},

		"H":{"Capital":[[1+y,1+y,2+y,2+y,3+y,3+y,4+y,4+y,4+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y],[1+x,5+x,1+x,5+x,1+x,5+x,1+x,2+x,3+x,4+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x]],
		"Small":[[3+y,4+y,5+y,5+y,5+y,6+y,6+y,7+y,7+y],[1+x,1+x,1+x,2+x,3+x,1+x,4+x,1+x,4+x]]},

		"I":{"Capital":[[1+y,1+y,1+y,1+y,1+y,2+y,3+y,4+y,5+y,6+y,7+y,7+y,7+y,7+y,7+y],[1+x,2+x,3+x,4+x,5+x,3+x,3+x,3+x,3+x,3+x,1+x,2+x,3+x,4+x,5+x]],
		"Small":[[3+y,5+y,6+y,7+y],[3+x,3+x,3+x,3+x]]},

		"J":{"Capital":[[1+y,1+y,1+y,1+y,1+y,2+y,3+y,4+y,5+y,6+y,6+y,7+y,7+y],[1+x,2+x,3+x,4+x,5+x,4+x,4+x,4+x,4+x,1+x,4+x,2+x,3+x]],
		"Small":[[2+y,4+y,4+y,5+y,6+y,6+y,7+y,7+y],[5+x,4+x,5+x,5+x,2+x,5+x,3+x,4+x]]},

		"K":{"Capital":[[1+y,1+y,2+y,2+y,3+y,3+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y],[1+x,5+x,1+x,4+x,1+x,3+x,1+x,2+x,1+x,3+x,1+x,4+x,1+x,5+x]],
		"Small":[[3+y,3+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y],[1+x,4+x,1+x,3+x,1+x,2+x,1+x,3+x,1+x,4+x]]},

		"L":{"Capital":[[1+y,2+y,3+y,4+y,5+y,6+y,7+y,7+y,7+y,7+y,7+y],[1+x,1+x,1+x,1+x,1+x,1+x,1+x,2+x,3+x,4+x,5+x]],
		"Small":[[3+y,3+y,4+y,5+y,6+y,7+y,7+y,7+y],[2+x,3+x,3+x,3+x,3+x,2+x,3+x,4+x]]},

		"M":{"Capital":[[1+y,1+y,2+y,2+y,2+y,2+y,3+y,3+y,3+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y],[1+x,5+x,1+x,2+x,4+x,5+x,1+x,3+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x]],
		"Small":[[3+y,3+y,4+y,4+y,4+y,4+y,5+y,5+y,5+y,6+y,6+y,7+y,7+y],[1+x,5+x,1+x,2+x,4+x,5+x,1+x,3+x,5+x,1+x,5+x,1+x,5+x]]},

		"N":{"Capital":[[1+y,1+y,2+y,2+y,2+y,3+y,3+y,3+y,4+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y],[1+x,5+x,1+x,2+x,5+x,1+x,3+x,5+x,1+x,4+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x]],
		"Small":[[3+y,3+y,3+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y],[2+x,3+x,4+x,1+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x]]},

		"O":{"Capital":[[1+y,1+y,1+y,2+y,2+y,3+y,3+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y,7+y],[2+x,3+x,4+x,1+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x,2+x,3+x,4+x]],
		"Small":[[3+y,3+y,3+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y,7+y],[2+x,3+x,4+x,1+x,5+x,1+x,5+x,1+x,5+x,2+x,3+x,4+x]]},

		"P":{"Capital":[[1+y,1+y,1+y,1+y,2+y,2+y,3+y,3+y,4+y,4+y,4+y,4+y,5+y,6+y,7+y],[1+x,2+x,3+x,4+x,1+x,5+x,1+x,5+x,1+x,2+x,3+x,4+x,1+x,1+x,1+x]],
		"Small":[[3+y,3+y,4+y,4+y,5+y,5+y,5+y,6+y,7+y],[2+x,3+x,1+x,4+x,1+x,2+x,3+x,1+x,1+x]]},

		"Q":{"Capital":[[1+y,1+y,1+y,2+y,2+y,3+y,3+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y,7+y],[2+x,3+x,4+x,1+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x,1+x,4+x,2+x,3+x,5+x]],
		"Small":[[3+y,3+y,4+y,4+y,5+y,5+y,5+y,6+y,7+y],[3+x,4+x,2+x,5+x,3+x,4+x,5+x,5+x,5+x]]},

		"R":{"Capital":[[1+y,1+y,1+y,1+y,2+y,2+y,3+y,3+y,4+y,4+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y],[1+x,2+x,3+x,4+x,1+x,5+x,1+x,5+x,1+x,2+x,3+x,4+x,1+x,3+x,1+x,4+x,1+x,5+x]],
		"Small":[[3+y,3+y,3+y,4+y,4+y,5+y,6+y,7+y],[1+x,2+x,5+x,3+x,4+x,3+x,3+x,3+x]]},

		"S":{"Capital":[[1+y,1+y,1+y,1+y,2+y,3+y,4+y,4+y,4+y,5+y,6+y,7+y,7+y,7+y,7+y],[2+x,3+x,4+x,5+x,1+x,1+x,2+x,3+x,4+x,5+x,5+x,1+x,2+x,3+x,4+x]],
		"Small":[[3+y,3+y,3+y,4+y,5+y,5+y,6+y,7+y,7+y,7+y],[2+x,3+x,4+x,1+x,2+x,3+x,4+x,1+x,2+x,3+x]]},

		"T":{"Capital":[[1+y,1+y,1+y,1+y,1+y,2+y,3+y,4+y,5+y,6+y,7+y],[1+x,2+x,3+x,4+x,5+x,3+x,3+x,3+x,3+x,3+x,3+x]],
		"Small":[[3+y,4+y,4+y,4+y,4+y,5+y,6+y,7+y,7+y],[2+x,1+x,2+x,3+x,4+x,2+x,2+x,3+x,4+x]]},

		"U":{"Capital":[[1+y,1+y,2+y,2+y,3+y,3+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y,7+y,7+y],[1+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x,2+x,3+x,4+x]],
		"Small":[[3+y,3+y,4+y,4+y,5+y,5+y,6+y,6+y,6+y,7+y,7+y,7+y],[1+x,5+x,1+x,5+x,1+x,5+x,1+x,4+x,5+x,2+x,3+x,5+x]]},

		"V":{"Capital":[[1+y,1+y,2+y,2+y,3+y,3+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y],[1+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x,2+x,4+x,3+x]],
		"Small":[[3+y,3+y,4+y,4+y,5+y,5+y,6+y,6+y,7+y],[1+x,5+x,1+x,5+x,1+x,5+x,2+x,4+x,3+x]]},

		"W":{"Capital":[[1+y,1+y,2+y,2+y,3+y,3+y,4+y,4+y,5+y,5+y,5+y,6+y,6+y,6+y,6+y,7+y,7+y],[1+x,5+x,1+x,5+x,1+x,5+x,1+x,5+x,1+x,3+x,5+x,1+x,2+x,4+x,5+x,1+x,5+x]],
		"Small":[[3+y,3+y,4+y,4+y,5+y,5+y,6+y,6+y,6+y,7+y,7+y,7+y,7+y],[1+x,5+x,1+x,5+x,1+x,5+x,1+x,3+x,5+x,1+x,2+x,4+x,5+x]]},

		"X":{"Capital":[[1+y,1+y,2+y,2+y,3+y,3+y,3+y,3+y,4+y,4+y,4+y,5+y,5+y,5+y,5+y,6+y,6+y,7+y,7+y],[1+x,5+x,1+x,5+x,1+x,2+x,4+x,5+x,1+x,3+x,5+x,1+x,2+x,4+x,5+x,1+x,5+x,1+x,5+x]],
		"Small":[[3+y,3+y,4+y,4+y,5+y,6+y,6+y,7+y,7+y],[1+x,5+x,2+x,4+x,3+x,2+x,4+x,1+x,5+x]]},

		"Y":{"Capital":[[1+y,1+y,2+y,2+y,3+y,3+y,4+y,5+y,6+y,7+y],[1+x,5+x,1+x,5+x,2+x,4+x,3+x,3+x,3+x,3+x]],
		"Small":[[3+y,3+y,4+y,4+y,5+y,6+y,6+y,7+y],[1+x,5+x,2+x,4+x,3+x,1+x,3+x,2+x]]},

		"Z":{"Capital":[[1+y,1+y,1+y,1+y,1+y,2+y,3+y,4+y,5+y,6+y,7+y,7+y,7+y,7+y,7+y],[1+x,2+x,3+x,4+x,5+x,5+x,4+x,3+x,2+x,1+x,1+x,2+x,3+x,4+x,5+x]],
		"Small":[[3+y,3+y,3+y,3+y,3+y,4+y,5+y,6+y,7+y,7+y,7+y,7+y,7+y],[1+x,2+x,3+x,4+x,5+x,4+x,3+x,2+x,1+x,2+x,3+x,4+x,5+x]]},

		"-":{"Capital":[[4+y,4+y,4+y,4+y,4+y],[1+x,2+x,3+x,4+x,5+x]],
		"Small":[[5+y,5+y,5+y,5+y,5+y],[1+x,2+x,3+x,4+x,5+x]]},
	}
	return latters[latter][caseType];
}