// Funciones con parámetros nombrados
function customFont({ color, size, weight }) {
    //codigo de mi funcion
    console.log(color, size, weight)
}

customFont({ weight: 800 })

const userObj = { //con Object.entries(userObj), nos va a devolver por cada propiedad que tenga nuestro objeto, un array de dos elementos, donde el primero va a ser el nombre de la variable y el segundo el valor de la variable
    name : 'Jhon',
    surname: 'Doe',
    age: 35,
    email: 'jhon@doe',
    active: true,
    phone: '3989323-29300'
}

/* 
Cuando se usa destructuracion
const arrayOfEntries = Object.entries(userObj) 
    arrayOfEntries.forEach((arrayPares) => {
        const [key, value] = arrayPares //esto se usaria para ir recorriendo el objeto de vectores, y por cada vector tomaria / mostraria los valores
    })

*/

/*
const name = userObj.name;
const surname = userObj.surname;
const age = userObj.age;
const email = userObj.email;
EN VEZ DE TENER QUE DECLARAR ESO, SE USA LO SIGUIENTE PARA LA DESTRUCTURACION*/

//const { name, phone} = userObj  //no es necesario el orden de los nombres de la variable, pero si, de que sea el mismo nombre que este usando el objeto

const { age, email: correo, ...resto} = userObj //asignando de esta forma a email: correo, lo que estoy diciendo es, asigname una variable email y ponele el valor de correo que tiene el userObj, esa es la unica forma que tengo de "renombrar", ya que va a ser que una variable tome el valora de otra, por si no me gusta el nombre propio que tiene el objeto
console.log(age, ...resto)