var bookmark=Array.from(document.getElementsByClassName("bookmark"));

// console.log(bookmark);
bookmark.forEach(function(elem,index){
	elem.addEventListener("click", function(e){
		e.preventDefault();
		var link=document.getElementsByClassName("fa-newspaper-o")[index].href;
		console.log(link);
		if (elem.classList.contains("fa-bookmark-o")){
			elem.classList.remove("fa-bookmark-o");
			elem.classList.add("fa-bookmark");
		}
		else {
			elem.classList.remove("fa-bookmark");
			elem.classList.add("fa-bookmark-o");
		}
	});
});