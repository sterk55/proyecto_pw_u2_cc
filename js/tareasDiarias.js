const lista = [
        { nombre: 'Lavar', descripcion: 'lavar la ropa', hora: '17pm' },
    { nombre: 'Arreglar', descripcion: 'Arreglar la sala', hora: '18pm' }
]


const app = Vue.createApp({

    data() {
        return {
            lista: lista,
            mensaje: '',
            nombre: '',
            descripcion: '',
            hora: ''
        }
    },
    methods: {
             
        agregarTarea(){
          
                this.lista.push({nombre: this.nombre, descripcion: this.descripcion, hora: this.hora})
            
            this.nombre = ''
            this.descripcion = ''
            this.hora = ''
        }


    }


})

app.mount(`#myApp`)