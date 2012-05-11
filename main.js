// Project: Deliverable 2
// Name: William Saults
// Term: 0512

// Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function() {

	// Global Variables
	var verifyValue,
		giftValue = "No",
		couponValue = "No",
		emailValue = "No"
	;

	// getElementById Function
	function $(x){
		var element = document.getElementById(x);
		return element;
	}
	
	function getSelectedRadio() {
		var radios = document.forms[0].verify;
		for(var i = 0; i < radios.length; i++) {
			if(radios[i].checked) {
				verifyValue = radios[i].value;
			}
		}
	}
	
	function getCheckBoxValue() {
		if($('giftWrapped').checked) {
			giftValue = $('giftWrapped').value;
		} else {
			giftValue = "No";
		}
		
		if($('applyCouponCode').checked) {
			couponValue = $('applyCouponCode').value;
		} else {
			couponValue = "No";
		}
		
		if($('receiveEmail').checked) {
			emailValue = $('receiveEmail').value;
		} else {
			emailValue = "No";
		}
	}
	
	function storeData() {
		var id = Math.floor(Math.random()*100000001);
		console.log("Submitting data.");
		getSelectedRadio();
		getCheckBoxValue();
		// Get all form field values.
		var item = {};
			item.itemName = ["ItemName:", $('itemName').value];
			item.itemNumber = ["ItemNumber:", $('itemNumber').value];
			item.itemColor = ["ItemColor:", $('itemColor').value];
			item.itemPrice = ["ItemPrice:", $('itemPrice').value];
			item.quantity = ["Quantity:", $('quantity').value];
			// Checkboxes
			item.giftWrapped = ["GiftWrapped:", giftValue];
			item.applyCouponCode = ["ApplyCouponCode:", couponValue];
			item.receiveEmail = ["ReceiveEmail:", emailValue];
			// Radio
			item.verify = ["Verify:", verifyValue];
			// Select
			// the following line isn't working. TODO - Fix it!
/* 			item.ChooseOne = ["ChooseOne", $('chooseOne').value]; */
			item.textarea = ["Textarea", $('textarea').value];
		
		// Save the data into local storage
		localStorage.setItem(id, JSON.stringify(item));
		alert("Item saved.");	
	}
	
	function getData() {
		console.log("Getting data.");
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		for(var i=0, len=localStorage.length; i < len; i++) {
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj) {
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
			}
		}
	}
	
	function clearLocalData() {
		console.log("Clearing data.");
		if(localStorage.length === 0) {
			alert("No data to clear");
		} else {
			localStorage.clear();
			alert("Local Storage Cleared");
			window.location.reload();
			return false;
		}
	}
	
	// Links and Submit Click Events
	var submit = $('submit');
	submit.addEventListener("click", storeData);
	
	var clearAll = $('clearAll', clearLocalData);
	clearAll.addEventListener("click", clearLocalData);

	var displayData = $('displayData');
	displayData.addEventListener("click", getData);


}); // End "DOMContentLoaded" listener