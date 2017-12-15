new Vue({
    el: '#app',
    data: {
        count: 0,
        new_task: '',
        tasks: [],
        taskupdate: []
    },
    methods: {
        addTask: function() {
            if (!(this.new_task) == ' ' || !(this.new_task) == null) {
                this.tasks.push({
                    id: this.count++,
                    name: this.new_task,
                    done: false
                });
                this.new_task = '';
            } else {
              alert('add a task name');
            }
        },
        deleteTask: function(task) {
            // console.log(task);
            this.tasks.splice(this.tasks.indexOf(task), 1)
        }
    },
    mounted() {
        //console.log('App mounted!');
        if (localStorage.getItem('tasks'))
            this.tasks = JSON.parse(localStorage.getItem('tasks'));

        // taskupdate: {
        //     JSON.parse(localStorage.getItem('tasks')).reverse();
        //     console.log(taskupdate)
        // }


    },
    watch: {
        tasks: {
            handler() {
                // console.log('Todos changed!');
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            },
            deep: true,
        }
    },
});