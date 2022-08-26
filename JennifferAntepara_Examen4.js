/*Una empresa requiere calcular el pago de salarios según el tipo de empleado. Existen
empleados de confianza y empleados de sindicato, respectivamente ganan 500 y 250 USD
diarios. La nómina se calcula por 15 días. Calcular el pago total que gana cada empleado,
donde se le descuenta el 10% de impuestos si el empleado es de sindicato y 13% si es
empleado de confianza. (Guardar archivo con el nombre TuNombre_Examen4).
a. Defina las clases Persona, Empleado y Nómina
b. Clase Persona con propiedades, nombre, apellido y edad
i. el método getDetalles() el cual imprimirá en consola los atributos de la persona.
ii. El constructor recibe y asigna nombre y apellido a los atributos internos.
c. Clase Empleado que hereda de Persona e incluye el atributo de Tipo (empleado de
confianza(C) y de sindicato(S))
i.Sobreescribir el método getDetalles() para que muestre en consola los detalles de Persona
y los de Empleado.
ii.El constructor recibe y asigna nombre, apellido y tipo a los atributos internos.
d. Clase Nomina tiene las propiedades de Empleados (arreglo)
i.Crear el método para calcular el pago por los días laborados será un número aleatorio del 5
al 15, dependiendo del tipo de empleado y descontar los impuestos.
Si es empleado de sindicato el pago por día es 350.00 USD, con un descuento de 10% de
impuestos;*/

class Persona {
   
    nombre;
    apellido;
    edad;
    constructor(nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
    getDetalles(Persona) {
        let p = new Persona("Jenifer","Antepara");
        console.log(p);   
        }
    

}

class Empleado extends Persona {
    tipo="c"||"s";

    constructor(nombre,apellido,tipo){
        this.tipo=tipo;
    
    if (tipo=="c") {
       console.log("verifica") ;

    } else {
        console.log("otro") ;
    }
}
}
class Nomina extends Empleado {

    constructor(){
        super.Nomina;
    }
calculoDeDiaPago (){

    if (Empleado.tipo=="s") {
        
    }
}

}    
let p = new Persona("Jenifer","Antepara",31)
console.log(p);  
