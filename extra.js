const arrayDeNumeros = [2,4,6,9,1,3,5,12,18,5];

let [posicion0,posicion1,posicion2, posicion3,posicion4, ...restoDePosiciones] = arrayDeNumeros;

const arrayNuevo= [posicion1,posicion3,...restoDePosiciones];

/*let [posicion0, ,posicion2, ,posicion4] = arrayDeNumeros;

const arrayNuevo = [...arrayDeNumeros];
arrayNuevo.splice(4,1);
arrayNuevo.splice(2,1);
arrayNuevo.splice(0,1);

esta es otra opcion.
*/


console.log(posicion0);
console.log(posicion2);
console.log(posicion4);
console.log(arrayNuevo);

const mascota={
    nombre:"Manchita",
    tipo: "Gata",
    color: ["Negro","Blanco","Amarillo"],
    raza: "mestiza"
}

let {nombre,tipo: tipoDeMascota,raza,color}= mascota;

console.log(`Hola les presento a mi mascota su nombre es: ${nombre}, es un hermosa ${tipoDeMascota}, de color: ${color} y su raza es: ${raza}`)