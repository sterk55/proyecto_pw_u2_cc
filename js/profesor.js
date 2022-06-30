const lista = [
    { nombre: 'Daniel', apellido: 'Cedeño', edad: 21, ciudad: 'Quito', profesion: 'Ingeniero' , universidad: 'UCE' },
    { nombre: 'Juan', apellido: 'Cedeño', edad: 56, ciudad: 'Quito', profesion: 'Licenciado' , universidad: 'UPS' },
    { nombre: 'Luisa', apellido: 'Santos', edad: 41 , ciudad: 'Manta', profesion: 'Psicologa' , universidad: 'ULEAM'},
    { nombre: 'Javier', apellido: 'Cedeño', edad: 31, ciudad: 'Guayaquil', profesion: 'Ingeniero' , universidad: 'ESPOL' },
    { nombre: 'Daniela', apellido: 'Merchan', edad: 34, ciudad: 'Portoviejo', profesion: 'Biologa' , universidad: 'UTM' },
    { nombre: 'Carlos', apellido: 'Muñoz', edad: 28 , ciudad: 'Cuenca', profesion: 'Doctor' , universidad: 'UCUENCA'}

]

const app = Vue.createApp({

    data() {
        return {
            lista: lista
        }
    },
    methods: {
        agregarProfesor(){
            this.lista.unshift({nombre: 'Karla', apellido: 'Palermo', edad: 46 , ciudad: 'Quito', profesion: 'Ingeniero' , universidad: 'EPN'

            })
        }

    }


})
app.mount(`#myApp`)