(function init() {
	addEventListeners();
	
	$.mainWin.open();	
})();

function addEventListeners() {
	$.technobabbleButtonView.addEventListener("click", function(e){
		alert("Do stuff!");
	});	
}