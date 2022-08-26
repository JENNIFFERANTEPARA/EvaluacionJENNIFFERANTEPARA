/*Escribir un programa JavaScript orientado a objetos, llamado TuNombre_Examen3, que
realice las siguientes operaciones:
• Crear dos matrices de tamaño con los siguientes datos.
• Rellenar la primera con los datos: 3, 2, 1, 1, 2, 3, 2, 3, 1.
• Rellenar la segunda con los datos: 1, 1, 2, 2, 1, 1, 1, 2, 1.
• Mostrar el contenido de ambas matrices.
• Multiplicar la primera por la segunda y mostrar el resultado.
• Sumar la primera por la segunda y mostrar el resultado.
*/

let dato1 = [3, 2, 1, 1, 2, 3, 2, 3, 1];
let dato2 = [1, 1, 2, 2, 1, 1, 1, 2, 1];

let multiplicacion = new Array(dato1);

for (x=0; x<multiplicacion.length;x++){
    multiplicacion[x] = new Array(dato2)
}

console.log(multiplicacion[x]); 

let arraymul = dato1[0]*dato2[0];

let arraysum = dato1[0]+dato2[0];

console.log("Arreglo: [" +dato1, "]");
console.log("Arreglo: [" +dato2, "]");
console.log(+dato1[0],"*" , +dato2[0] ," = " ,+arraymul, );
console.log(+dato1[0],"+" , +dato2[0] ," = " ,+arraysum, );