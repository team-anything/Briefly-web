var root = document.documentElement;
var nightmode = document.getElementById("nightmode");
var nightmodeDiv = document.getElementsByClassName("nightmode")[0];

nightmodeDiv.addEventListener("click", function(){
	if(nightmode.checked){
		root.style.setProperty('--color-primary', '#f56a6a');
		root.style.setProperty('--color-white', '#222');
		root.style.setProperty('--color-white-dark', '#555');
		root.style.setProperty('--color-black', '#fff');
	}
	else {
		root.style.setProperty('--color-primary', '#f56a6a');
		root.style.setProperty('--color-white', '#fff');
		root.style.setProperty('--color-white-dark', '#ddd');
		root.style.setProperty('--color-black', '#222');	
	};	
});
