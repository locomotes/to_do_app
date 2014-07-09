var todotemplate = _.template($(".aggregate").html() );
$("list").append(todotemplate);

// var renderedtemplate = todotemplate(todo);

var item = [];



var ToDo = function(options) {
	var options = options || {};
	this.id = _.uniqueId(listItem);
	this.active = true;
	this.userinput = options.userinput;
};


$(".octicon-diff-renamed").click(function () {
	var todo = new ToDo ({userinput: $('#new_entry').val()
		item.push('hello');

	});
});

// $(function(){
//     $('input[name="add"]').click(function() {
// 			var value =  $('input[name="addItem"]').val();
//     	$('ul li:last').after("<li>" + value + "</li>");
//     	$('input[name="addItem"]').val("");
			
//     });
// });

$(".aggregate").append(todotemplate);

