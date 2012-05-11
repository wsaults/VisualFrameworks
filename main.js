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
			giftValue = "No"
		}
		
		if($('applyCouponCode').checked) {
			couponValue = $('applyCouponCode').value;
		} else {
			couponValue = "No"
		}
		
		if($('receiveEmail').checked) {
			emailValue = $('receiveEmail').value;
		} else {
			emailValue = "No"
		}
	}
	
	function storeData() {
		var id = Math.floor(Math.random()*100000001);
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
			item.ChooseOne = ["ChooseOne:", $('chooseOne').value];
		
		// Save the data into local storage
		localStorage.setItem(id, JSON.stringify(item));
		alert("Item saved.");	
	}
	
	function getData() {
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
	}
	
	function clearLocalData() {
		console.log("Clearning data.");
	}
	
	// Global Variables
	var verifyValue,
		giftValue = "No",
		couponValue = "No",
		emailValue = "No"
	;
	
	// Links and Submit Click Events
	var submit = $('submit');
	submit.addEventListener("click", storeData);
	
	var clearAll = $('clearAll', clearLocalData);
	clearAll.addEventListener("click", clearLocalData);

	var displayData = $('displayData');
	displayData.addEventListener("click", getData);


}); // End "DOMContentLoaded" listener