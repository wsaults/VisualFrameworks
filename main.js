/* 
Project: Deliverable 2
Name: William Saults
Term: 0512
*/

// Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){

	// getElementById Function
	function $(arg){
		var element = document.getElementById(arg);
		return element;
	}
	
	// Links and Submit Click Events
	var submit = $('submit');
	submit.addEventListener("click", storeData);
	
	var clearAll = $('clearAll', clearLocalData);
	clearAll.addEventListener("click", clearLocalData);
	
	var storeData = function () {
		console.log("Storing data.");
	};
	
	var gatData = function () {
		
	};
	
	var makeCats = function () {
		
	};
	
	var clearLocalData = function () {
		
	};


}); // End "DOMContentLoaded" listener