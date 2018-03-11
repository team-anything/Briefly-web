var root = document.documentElement;
var nightmode = document.getElementById("nightmode");
var nightmodeDiv = document.getElementsByClassName("nightmode")[0];
var active = true;

nightmodeDiv.addEventListener("click", function(){
	if(nightmode.checked){
		active=true;
		root.style.setProperty('--color-primary', '#f56a6a');
		root.style.setProperty('--color-white', '#222');
		root.style.setProperty('--color-white-dark', '#555');
		root.style.setProperty('--color-black', '#fff');
	}
	else {
		active=false;
		root.style.setProperty('--color-primary', '#f56a6a');
		root.style.setProperty('--color-white', '#fff');
		root.style.setProperty('--color-white-dark', '#ddd');
		root.style.setProperty('--color-black', '#222');
	};
});

// function preLoad(){
// 	if(active){
// 		nightmode.checked=true;
// 		root.style.setProperty('--color-primary', '#f56a6a');
// 		root.style.setProperty('--color-white', '#222');
// 		root.style.setProperty('--color-white-dark', '#555');
// 		root.style.setProperty('--color-black', '#fff');
// 	}
// 	else{
// 		nightmode.checked=false;
// 		root.style.setProperty('--color-primary', '#f56a6a');
// 		root.style.setProperty('--color-white', '#fff');
// 		root.style.setProperty('--color-white-dark', '#ddd');
// 		root.style.setProperty('--color-black', '#222');	}
// }
// window.onpaint = preLoad();
