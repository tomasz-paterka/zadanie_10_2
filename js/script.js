/*var span = $("span");
span.each(function (index, element) {
	if (index % 2 == 0) {
		$(element).css('color', 'red');
	}
});*/

$("span:even").css('color', 'red');
var paragraphs = $('p');
paragraphs.each(function(index, Element) {
	var button = '<button class="btn" data-tmp="' + index + '">Clik me</button>' 
	$(Element).append(button)
});
$("button").click(function() {
	alert($(this).attr("data-tmp"));
});
		
