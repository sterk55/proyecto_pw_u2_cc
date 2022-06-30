const lista = [
    { nombre: 'Daniel', apellido: 'Cedeño', edad: 21 },
    { nombre: 'Juan', apellido: 'Cedeño', edad: 18 },
    { nombre: 'Luis', apellido: 'Cedeño', edad: 41 },
    { nombre: 'Javier', apellido: 'Cedeño', edad: 31 },
    { nombre: 'Daniela', apellido: 'Merchan', edad: 11 },
    { nombre: 'Carlos', apellido: 'Muñoz', edad: 11 }

]


const app = Vue.createApp({

    data() {
        return {
            lista: lista
        }
    },
    methods: {
        agregarEstudiante(){
            this.lista.unshift({nombre: 'Karla', apellido: 'Palermo', edad: 11

            })
        }

    }


})

app.mount(`#myApp`)