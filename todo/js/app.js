var list = new Vue({
  el: '#app',
  data: {
    new_todo: '',
    todos: JSON.parse(localStorage.getItem('todos'))
  },
  methods: {
    add_newtask: function() {
      var new_todo = this.new_todo
      if (!new_todo == '' || !new_todo == null) {
        this.todos.push({
          task: new_todo,
          completed: false
        })
        localStorage.setItem('todos', JSON.stringify(this.todos));
        this.new_todo = ''
        return
      } else {
        alert('add a task');
      }
    },
    clear_taskentry: function() {
        this.new_todo = ''
        alert('hello');
    },
    task_done: function(ts_status) {

      console.log(' before' + ts_status.completed);
      this.ts_status = true;
      console.log('After' + ts_status.completed);
    }

  }
})

//
// localStorage.setItem('todos', JSON.stringify(todos));
//
// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('todos');
