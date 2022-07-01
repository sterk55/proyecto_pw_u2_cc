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
            lista: lista,
            mensaje: '',
            nombre: '',
            apellido: '',
            edad: ''
        }
    },
    methods: {
        agregarEstudianteInicio(){
            this.lista.unshift({nombre: this.mensaje, apellido: 'Inicio', edad: 11})
            this.mensaje = ''
        },
        eventoKeyDesustructurado({charCode, key}){
            //Evento desustructurado
            //console.log(key)
            //console.log(charcode)

            if(charCode === 13){
            console.log('se dispara el evento')
            this.lista.unshift({nombre: this.mensaje , apellido: 'Palermo', edad: 11})
            this.mensaje = ''
        }
        },
        agregarEstudianteFinal(){
            this.lista.push({nombre: this.mensaje, apellido: 'Fin', edad: 11})
            this.mensaje = ''
        },
        agregarEstudiante(tipo){
            if(tipo === 'I'){
                this.lista.unshift({nombre: this.nombre, apellido: this.apellido, edad: this.edad})
            }else{
                this.lista.push({nombre: this.nombre, apellido: this.apellido, edad: this.edad})
            }
            this.nombre = ''
            this.apellido = ''
            this.edad = ''
        },
        eventoFinal(){
            //Ejemplo de modificadores de evento
            this.lista.unshift({nombre: this.mensaje , apellido: 'Palermo', edad: 11})

        }


    }


})

app.mount(`#myApp`)