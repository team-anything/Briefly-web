var bookmark=Array.from(document.getElementsByClassName("bookmark"));
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
// console.log(bookmark);
bookmark.forEach(function(elem,index){
	elem.addEventListener("click", function(e){
		e.preventDefault();
		var link=document.getElementsByClassName("fa-newspaper-o")[index].href;
		console.log(link);
		if (elem.classList.contains("fa-bookmark-o")){
			elem.classList.remove("fa-bookmark-o");
			elem.classList.add("fa-bookmark");
            $.ajax({
                url: bookadd_url,    //Your api url
                type: 'POST',   //type is any HTTP method
                data: {
                    add: link,
                    csrfmiddlewaretoken: getCookie('csrftoken')
                },      //Data as js object
                success: function () {
                }
            });			
		}
		// else {
		// 	elem.classList.remove("fa-bookmark");
		// 	elem.classList.add("fa-bookmark-o");
		// }
	});
});