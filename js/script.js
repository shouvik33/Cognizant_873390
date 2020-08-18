function add1() {
	var itemname = document.getElementById("title").value;
	var itemprice = document.getElementById("price").value;
	var itemdate = document.getElementById("dateOfLaunch").value;
	var itemcat = document.getElementById("category").value;
	var flag = 0;
	if (itemname == "") {
		alert("Please enter name");
		flag = 1;
	}
	else if (itemname.length < 2 || itemname.length > 65) {
		alert("Enter between 2 to 65");
		flag = 1;
	}
	if (itemprice == "") {
		alert("Please enter price");
		flag = 1;
	}
	else if (isNaN(itemprice)) {
		alert("Please enter number");
		flag = 1;
	}

	if (itemdate == "") {
		alert("Please enter date");
		flag = 1;
	}
	if (itemcat == "0") {
		alert("select category");
		flag = 1;
	}
	if (flag == 0) {
		window.open("edit-menu-item-status.html", "_self");
	}

}
