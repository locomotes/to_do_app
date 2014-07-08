itemList = [];

var Items = function(options) {
	var options = options || {};
	this.id = _.uniqueId(listItem);
	this.active = true;
	this.name = $('input[name="addItem"]').val("");
}

$(function(){
    $('input[name="add"]').click(function() {
			var value =  $('input[name="addItem"]').val();
    	$('ul li:last').after("<li>" + value + "</li>");
    	$('input[name="addItem"]').val("");
			console.log(value);
    });
});

console.log(itemList);