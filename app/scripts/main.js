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
		console.log(item);
});


// $(function(){
//     $('input[name="add"]').click(function() {
// 			var value =  $('input[name="addItem"]').val();
//     	$('ul li:last').after("<li>" + value + "</li>");
//     	$('input[name="addItem"]').val("");
			
//     });
// });

// $(".aggregate").append(todotemplate);

// $("#kill").click(function() {

// });