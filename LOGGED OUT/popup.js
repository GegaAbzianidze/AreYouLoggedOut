
function save() {	
	var checkbox = document.getElementById("checkbox1");
    localStorage.setItem("checkbox1", checkbox.checked);	
}

//for loading
var checked = JSON.parse(localStorage.getItem("checkbox1"));
    document.getElementById("checkbox1").checked = checked;