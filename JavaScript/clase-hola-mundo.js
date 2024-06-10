// ejecutar next.js
//     node nombrePrograma.js
// Tipos de dato primitivo - Inmutables
// let numero = 23
// numero = numero + 10
// let esVerdadero = true
// console.log(esVerdadero)
// // Mutable
// let usuario = {nombre:'pepito', edad:15}
// usuario.edad = 30
// console.log(usuario)
// function cambiarNombre(objeto){
//     objeto.nombre = 'Nuemvo Nombre'
// }
// let persona = {nombre:'Antonio'}
// cambiarNombre(persona)
// console.log(persona)
// let x = 1
// let y = 'hola'
// let z = null
// let a = x
// let b = y
// let c = z
// console.log(x,y,z,a,b,c)
// a = 12
// b = 'Platzi'
// c = undefined

// Paso por referencia
// let frutas = ['manzana']
// frutas.push('pera')
// console.log(frutas)
// Poso por variable
// let panes = ['🍞']
// let copiaDePanes = panes
// console.log(copiaDePanes)
// Tipo de dato complejo , Paso por referencia
// let frutas  = {
//     naranja: '🍊' 
// }
// let vegetales = frutas

// Pase por referencia
// let ropa = {
//     blusa: '👗' 

// }
// ropa.pantalon = '👖'
// console.log(ropa)

// const primeraOpcion = 'Me encanta'
// const segundoaOpcion = 'La gente'
// const terceraOpcion = '🏳️‍⚧️'
// const pensamiento   = [primeraOpcion, segundoaOpcion, terceraOpcion]

// console.log(pensamiento.join(' '))
// // concatenar usando concat
// const hobbie1 = 'correr'
// const hobbie2 = 'leer'
// const hobbie3 = 'estudiar'
// const hobbie4 = 'Mis hobbies son: '.concat(hobbie1,' ',hobbie2,' ',hobbie3)
// console.log(hobbie4)
// 1.- escape alternativo
// const stringprimitivo = 'Soy un string primitivo'
// console.log(stringprimitivo[2])
// console.log(typeof(stringprimitivo))
// typeof(stringprimitivo)
// console.log(stringprimitivo.lastIndexOf('o'))
// console.log(stringprimitivo.indexOf('o'))
// const saludoDividido = stringprimitivo.split(' ')
// console.log(saludoDividido)

// numero en javascricp
// 1.- tiene entreo y decimal
// const entero = 42
// const decimal = 3.14
// console.log(typeof(entero), typeof(decimal))
// // 2.-notacion cientifica
// const cientifica = 5e3
// // 3.- Infinitos 
// const infinito = Infinity
// const noEsunNumero = NaN


// operaciones aritmeticas
// 1.-Suma, Resta, Multiplicacion y Division
// const suma = 3 + 4
// const resta = 4 - 4
// const Multiplicacion = 4 * 4

// // 2.- Modulo y Exponenciación
// const modulo = 15 % 8
// const Exponenciación = 2 ** 3
// // Precision
// const resultado = 0.1 + 0.2 

// console.log(resultado)
// console.log(resultado.toFixed(2))
// console.log(resultado === 0.3)

// // Operaciones Avanzadas
// const raizCuadrada = Math.sqrt(16)
// const valorAbsoluto = Math.abs(-7)
// const aleatorio = Math.random()
// console.log(raizCuadrada)
// console.log(valorAbsoluto)
// console.log(aleatorio)

// const isActive = true
// const hasPermisson = false
// // Conversion Implicita
// const result = 5 > 3
// console.log(result)

// const uniqueId = Symbol('id')
// const symbol1 = Symbol('id')
// const symbol2 = Symbol('id')
// console.log(symbol1 === symbol2)

// const ID = Symbol('id')
// let user = {}
// user[ID] = '1234'
// console.log(user)
// social media profile
// 1.- User Informormation
// const username  = 'codigoAventur'
// const fullname  = 'Jhon Doe'
// const age       = 25
// const isStudent = true

// // 2.- Adresss
// const address = {
//     street: '123 Main Street',
//     city: 'Techville',
//     state: 'Codingland',
//     zipCode: 54321
// } 
// // 3.hobbies
// const hobbies = ['Coding', 'Reading', 'Gaming']
// // 4.- Generatin personalized bio
// const personalizedBio = `Hi, I'm ${fullname}.
// I'm ${age} years old.
// I live in ${address.city}.
// I love ${hobbies.join(', ')}.
// Follow me for coding adventures!`

// console.log(personalizedBio)
// function calculateDiscountedPrice(price, discountPercentaje) {
//     return (price * discountPercentaje ) / 100 
// }
// console.log(calculateDiscountedPrice(80, 10))
// capacidades que tienen las funciones
// 1.- pasar funciones como parámetros
// function a(){}
// function b(){}
// b(a)
// // 2./Retornar funciones
// function a(){  
//         function b(){}
//     return b}
// // 2.- Asigna funciones a variable
// const a = function(){}
// // 3.- Tener propiedades y metodos
// function a(){}
// const obj = {}
// a.call(obj)
// // Anidar funciones - Nested functions
// function a(){
//     function b(){
//         function c(){

//         }
//         c()
//     }
//     b()
// }
// a()
// es posible almacenar funciones en objetos?
/*
const rocket = {
    name: 'Falcon',
    launchMessage: function launchMessage(){
        console.log('🔥')
    }
}
rocket.launchMessage()
*/
// Funciones pura, dado una entrada obtendremos el mismo output
// function sum (a, b){
//     return a + b
// }
/*
const house = {
    dogname: 'Fido',
    dogGreeting: function(){
        dogname = 'Firilai'
        console.log(`hi, i'm ${this.dogname}`)
        console.log(`hi, i'm ${dogname}`)
    }
}*/
/*
function dogGreeting(owner, address){
    console.log(`hi, i'm ${this.dogname} su dueno ${owner} y vive en : ${address}`)
}
const newhouse1 = {
    dogname: 'Firulai',
    dogAge: 3
}

const owner = 'Pepita'
const address = 'Avenue 123'
dogGreeting.call(newhouse1, owner, address)
*/
// const greeting = function(name){
//     return `hi, ${name}`
// }
// const newGreeting = (name) => {
//     return `hi, ${name}`
// }
// const newGreetingImplisity = (name,lastname) => `hi, ${name} ${lastname}`
/*function Rocket(name, ownMessage){
    this.name = name
    this.launchMessage = function(){
        console.log(ownMessage)
    }
}
const falcon9Roket = new Rocket('Falcon 9', 'No entiendo porque si funciona')
const falconHeavyRocket = new Rocket('Falcon Heavy', 'Aqui tambpo entiendo porque no funciona')
*/
//Create PowerPushGirl object//
function PowerPushGirl(name, color, superpower, isleader){
    this.name = name
    this.color = color
    this.superpower = superpower
    this.isleader = isleader
    this.displayInfo = function (){
        console.log(`PowerPushGirl Informacion:
        name: ${this.name} 
        color:${this.color}
        superpower:${this.superpower}
        ${this.isleader ? 'Leader: YES':'Leader: NO' }  ` )
    }
    this.becameLeader = function(isleader){
        this.isleader = isleader
        console.log(`${this.name} has become in the powerfull, ${this.isleader} `)
    }

}
const blosson = new PowerPushGirl('Blossom','Pink','Ice',false)
const buttercup = new PowerPushGirl('Blossom','Green','Ice',false)
const Bubbles = new PowerPushGirl('Bubbles','Blue','Flight',false)


blosson.displayInfo()
buttercup.displayInfo()
Bubbles.displayInfo()

blosson.becameLeader(true)
/*buttercup.becameLeader()
Bubbles.becameLeader()*/
