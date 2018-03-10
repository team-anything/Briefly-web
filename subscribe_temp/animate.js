// alert("Connected!");
var submit = document.getElementById("submit");
var input = document.getElementById("taginput");
var tags = document.getElementById("tags");
var close=[].slice.call(document.getElementsByClassName("close"));

close.forEach(function(elem,index){
    elem.addEventListener("click", function(){
        var remove = elem.parentNode;
        console.log(typeof(remove));
        var result = elem.parentNode.innerHTML;
        var finalres = result.split("").reverse().slice(28).reverse().join("");
        console.log(finalres);
        tags.removeChild(remove);
            // $.ajax({
            //     url: 'http://127.0.0.1:8000/',    //Your api url
            //     type: 'POST',   //type is any HTTP method
            //     data: {
            //         data: finalres
            //     },      //Data as js object
            //     success: function () {
            //     }
            // });
    });
});
// added manually
submit.addEventListener("click", function(e){
	e.preventDefault();
	var node = document.createElement("DIV");
	var close = document.createElement("SPAN");
	node.classList.add("data");
	close.classList.add("close");
	close.innerHTML = "x";
	node.innerHTML = input.value;
	input.value = "";
	node.appendChild(close);
	tags.appendChild(node);
	close.addEventListener("click", function(){
		var remove = close.parentNode;
		var result = close.parentNode.innerHTML;
		var finalres = result.split("").reverse().slice(28).reverse().join("");
		console.log(finalres);
		tags.removeChild(remove);
            $.ajax({
                url: 'basic_app/sub/delete',    //Your api url
                type: 'POST',   //type is any HTTP method
                data: {
                    data: finalres
                },      //Data as js object
                success: function () {
                }
            });
	});
	console.log(tags);
});
