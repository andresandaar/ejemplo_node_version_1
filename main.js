/* La función de require () es incluir los módulos que existen en archivos
separados por ejemplo: module.js. */
let Vehicle = require('./Class/module.js');
// Imprime por pantalla el mensaje
console.log(


'\n Hola, para el día de hoy se han creado las siguientes motos:\n '
);
// Creamos una nueva instancia u objeto
const motorcycle_0 = new Vehicle('Bajaj', 'Boxer Ct 100', 'Negro', '102 cc'
);
/* Acedemos a las propiedades del objeto e imprimir por pantalla la
información */
console.log(
`\n Moto 1: Marca: ${motorcycle_0.marca} Modelo: ${motorcycle_0.modelo},
 Color: ${motorcycle_0.color}, Cilindrada: ${motorcycle_0.cilindrada}\n`
);
// Invocar a los métodos de los objetos e imprimirlos por pantalla
console.log(" "+ motorcycle_0.encender());
console.log(" "+ motorcycle_0.rodar());
console.log(" "+ motorcycle_0.apagar());
// Creamos una nueva instancia u objeto
const motorcycle_1 = new Vehicle('AKT', 'TT', 'Roja', '197 cc');
/* Acedemos a las propiedades del objeto e imprimir por pantalla la
información */
console.log(
`\n Moto 2: Marca: ${motorcycle_1.marca} Modelo: ${motorcycle_1.modelo},
 Color: ${motorcycle_1.color}, Cilindrada: ${motorcycle_1.cilindrada}\n`
);
// Invocar a los métodos de los objetos e imprimirlos por pantalla
console.log(" "+ motorcycle_1.encender());
console.log(" "+ motorcycle_1.rodar());
console.log(" "+ motorcycle_1.apagar());