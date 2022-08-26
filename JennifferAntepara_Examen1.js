/*Escribe un programa que calcule el salario semanal de un trabajador teniendo en cuenta
que las horas ordinarias (40 primeras horas de trabajo) se pagan a 265.00 USD la hora. A
partir de la hora 41, se pagan a 350.00 USD la hora. Tomando en cuenta que un trabajador
acumulo en la semana, 53 horas, el programa debe mostrar el monto a pagar por las horas
ordinarias y el monto a pagar por las horas extra*/

let t = 53;
let ho = 265;
let he = 350;
let base = ho*40;

if (t<=40) {
    
    tiempo = ho * t;
        
console.log ("El total a pagar por horas laborales normal (40hrs) es de: $ " + tiempo);

} else {
  
    let extra = t - 40;

    let mas =  extra * he;
    
    console.log("El total a pagar por horas laborales normal (40hrs)es de: $ " + base);
    console.log("El total a pagar por horas Extra " +extra, "hrs es de: " +mas);
}
 

