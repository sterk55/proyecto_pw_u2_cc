console.log("objeto y libreria de vue.JS")
console.log(Vue)


const app = Vue.createApp({

    //Vue utiliza una representacion {{}} declarativa para evaluar/ejecutar expresiones JS
    //template: `
    //<h1>Hola mundo desde Vue</h1>
    
    //<p>{{[1,2,3,4,5]}}</p>
    //<p>{{1+1}}</p>
    //<p>{{ {nombre: "Edison", apellido: "Cayambe"} }}</p>
    //<p>{{true ? "Activo" : "Inactivo"}}</p>
    //`

    data(){
        return{
            mensaje:"Mensaje desde un atributo DATA" ,
            mensaje2 : "Prueba M2"
        }
    }
})

app.mount(`#myApp`)