console.log("objeto y libreria de vue.JS")
console.log(Vue)


const app = Vue.createApp({

    //Vue utiliza una representacion declarativa para evaluar/ejecutar expresiones JS
    template: `
    <h1>Hola mundo desde Vue</h1>
    <h2>Arreglos</h2>
    <p>{{[1,2,3,4,5]}}</p>
    <h2>Expresion</h2>
    <p>{{1+1}}</p>
    <h2>Objetos</h2>
    <p>{{ {nombre: "Edison", apellido: "Cayambe"} }}</p>
    <h2>Funcion termaria</h2>
    <p>{{true ? "Activo" : "Inactivo"}}</p>
    `
})

app.mount(`#myApp`)