 const app = new Vue({
    el: '#seccion',

    data: {
      color: 1,
      nuevaTarea: '',
      tareas: [
        { text: 'Comprar comida', completed: false },
        { text: 'Limpiar la casa', completed: false },
        { text: 'Pasear al perro', completed: false }
      ]
    },

    methods: {
      mas() {
        if (this.color < 100) {
          this.color += 1;
        }
      },
      menos() {
        if (this.color > 0) {
          this.color -= 1;
        }
      },
      agregar() {
        if (this.nuevaTarea) {
          this.tareas.push({
            text: this.nuevaTarea,
            completed: false
          });
          this.nuevaTarea = '';
        }
      },

      listaTareas(index) {
          this.tareas[index].completed = !this.tareas[index].completed;
        }
      },
      computed: {
        tareasCompletas() {
          return this.tareas.filter(tarea => tarea.completed).length;
        }
      
    }
 });

