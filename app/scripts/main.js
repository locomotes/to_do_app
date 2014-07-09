var todotemplate = _.template$("todo-template").html();
$("list").append(renderedtemplate);

var renderedtemplate = todotemplate(todo);

var item = [];



var ToDo = function(options) {
	var options = options || {};
	this.id = _.uniqueId(listItem);
	this.active = true;
	this.userinput = options.userinput;
	}
}


$("buttonname").click(function () {
	var todo = new ToDo ({userinput: $(' ').val();
		_.push(item);

	}
})

// $(function(){
//     $('input[name="add"]').click(function() {
// 			var value =  $('input[name="addItem"]').val();
//     	$('ul li:last').after("<li>" + value + "</li>");
//     	$('input[name="addItem"]').val("");
			
//     });
// });

$("list").append(renderedtemplate);

