var bookmark=Array.from(document.getElementsByClassName("bookmark"));

// console.log(bookmark);
bookmark.forEach(function(elem,index){
	elem.addEventListener("click", function(e){
		e.preventDefault();
		var link=document.getElementsByClassName("fa-newspaper-o")[index].href;
		console.log(link);
	});
});