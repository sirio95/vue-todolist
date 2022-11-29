const { createApp } = Vue;

createApp({
    data(){
        return{
            error: false,

            tasks: [
                {
                    'task': 'Fare i compiti',
                    'done':  false,
                },
                {
                    'task': 'Fare la spesa',
                    'done': false,
                },
                {
                    'task': 'Fare il bucato',
                    'done': false,
                }
            ]

        }
        
    },

    methods: {
        addTask(){
            if(this.newTask.length <5 || this.newTask === ''){
                this.error= true;
            }else{
                this.tasks.push(
                    {
                        'task': this.newTask, 
                        'done': false
                    }
                );
                this.newTask= "";
            }
            

        },

        segnoFatto(index){
            this.tasks[index].done= true;
            document.getElementById(`${index}`).classList.add('hide');
        },
        delTask(index){
            this.tasks.splice(index, 1);
        }
    }
}).mount('#app');