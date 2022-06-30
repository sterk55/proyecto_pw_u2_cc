const app = Vue.createApp({

    data(){
        return{
            mensaje: 'Hola Mundo',
            mensaje1: 'Mi Primer mensaje'
        }

    },
    methods: {
        cambiarMensaje(){
            
               this.mensaje = 'Mensaje Cambiado'
            
        },
        cambiarMensajeMayuscula(){
            this.mensaje1 = this.mensaje1.toUpperCase()
        },
        cambiarTodo(){
            this.cambiarMensaje()
            this.cambiarMensajeMayuscula()

        }

    }


})

app.mount(`#myApp`)