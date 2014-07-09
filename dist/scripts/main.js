// itemList = [];

// var Items = function(options) {
// 	var options = options || {};
// 	this.id = _.uniqueId(listItem);
// 	this.active = true;
// 	this.name = $('input[name="addItem"]').val("");
// }

$(function(){
    $('input[name="add"]').click(function() {
			var value =  $('input[name="addItem"]').val();
    	$('ul li:last').after("<li>" + value + "</li>");
    	$('input[name="addItem"]').val("");
			
    });
});

// console.log(itemList);


// var todotemplate = _.template$("todo-template").html();
// $("list").append(renderedtemplate);

// var renderedtemplate = todotemplate(todo);

// var data-array = [];

// $("list").append(renderedtemplate);