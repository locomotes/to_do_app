// Using jQuery & Underscore

// jQuery Objects
var todo_form = $('#todoForm'),
    todo_input = $('.todoInput'),
    todo_list = $('#todoList'),
    todo_template = $('#todoTemplate').text(),
    todo_count = $('.todoLeft span');

// Our base Array & Constructor
var todos = [];

var ToDo = function (options) {
  var options = options || {};
  this.task = options.task;
  this.id = options.id;
  this.active = true;
  this.completed = false;
}

// Build Our Page
var template = _.template(todo_template);
var updateToDoList = function (t) {
  todo_list.append(template(t));
};
var updateToDoCount = function () {
  var tasks_left = _.where(todos, {completed: false }).length;
  todo_count.text(tasks_left);
};

// Addition of new task
todo_form.on('submit', function (e) {
  // Prevent Submit Default
  e.preventDefault();
  // Set up our new task instance
  if(todo_input.val() === '') return;
  var taskID = _.uniqueId('task_'),
      task = new ToDo({ task: todo_input.val(), id: taskID });
  // Update Array & DOM
  todos.push(task);
  console.log(task);
  updateToDoList(task);
  updateToDoCount();
  $(this).find('.todoInput').val('');
});

// Click ON/OFF
todo_list.on('click', 'li', function () {

  var task_id = $(this).attr('id');
  var task = _.findWhere(todos, { id: task_id });

  if(task.completed) {
    task.completed = false;
    $(this).removeClass('done');
  } else {
    task.completed = true;
    $(this).addClass('done');
  }

  updateToDoCount();

});

// Delete
todo_list.on('click', 'span', function (e) {

  e.preventDefault();
  e.stopPropagation();

  var task_id = $(this).parent().attr('id');
  var task = _.findWhere(todos, { id: task_id });

  task.active = false;
  task.completed = true;

  $(this).parent().fadeOut('slow');

  updateToDoCount();
});
