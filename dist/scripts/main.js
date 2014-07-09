var todotemplate = _.template($("#todotemplate").html() );


// var renderedtemplate = todotemplate(todo);

var item = [];



var ToDo = function(options) {
	var options = options || {};
	this.id = _.uniqueId();
	this.active = true;
	this.new_entry = options.new_entry;
};


$(".octicon-diff-renamed").click(function () {
	var todo = new ToDo ({
		new_entry:$('#new_entry').val()
	});
		$(".aggregate").append(todotemplate(todo));

		item.push(todo);
		// console.log(item);

 


		var hey = $(".octicon-x");
		console.log(hey+"this is hey!!");
});

 
// $(function(){
//     $('input[name="add"]').click(function() {
// 			var value =  $('input[name="addItem"]').val();
//     	$('ul li:last').after("<li>" + value + "</li>");
//     	$('input[name="addItem"]').val("");
			
//     });
// });

// $(".aggregate").append(todotemplate);
$(document).ready(function () {
		$(document).on('click', '#kill', function() {
			console.log("I'm clicked");
			var current_id = $(this).parents('.todo').attr('id');
			console.log(current_id);
			$('li#'+current_id).remove();
			
  		item.splice(current_id-1, 1);
  		// console.log(item);
  		// console.log("I'm the result");

		});
});



