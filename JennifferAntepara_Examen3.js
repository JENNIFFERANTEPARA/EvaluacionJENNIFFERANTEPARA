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

console.log("Arreglo: [" +dato1, "]");
console.log("Arreglo: [" +dato2, "]");

for (let x=0; x<dato1.length;x++){
    let arraymul = dato2[x]*dato1[x];
    
for (let x=0; x<dato1.length;x++){
        let arraysum = dato1[x]+dato2[x];

       // let arraya = dato1[1]*dato2[1];
//console.log(+dato1[1],"*" , +dato2[1] ," = " ,+arraya);
console.log(+dato1[x],"+" , +dato2[x] ," = " ,+arraysum);
console.log(+dato1[x],"*" , +dato2[x] ," = " ,+arraymul);

}
}