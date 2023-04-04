// Funciones con parámetros nombrados
function customFont({ color, size, weight }) {
    //codigo de mi funcion
    console.log(color, size, weight)
}

const user = [ 'Jhon', 'Doe',  35 ] 

const name = user[0]
const surname = user[1]
const age = user[2]

const [nombre, , edad, ...resto] = [ 'Jhon', 'Doe',  35, 'user@gmail.com', true, 'd232039' ]//destructurizar es declarar un conjunto de variables a la vez, a partir, de un array, la variable resto, despues de los 3 puntitos, quiere decir que despues del valor que tome edad, los guarde en esa variable resto
//tambien si solo se quiere tomar edad y mail, se pondria const [ , , edad, mail] = [ 'Jhon', 'Doe',  35, 'user@gmail.com' ], en el caso mas aarriba, por ejemplo despues de edad para no tomarlo ni necesitamos poner mail porque no lo queriamos
console.log(nombre, edad, resto)