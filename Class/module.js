// Declaración de la clase
class Vehicle {
// Constructor
constructor(marca, modelo, color, cilindrada) {
this.marca = marca;
this.modelo = modelo;
this.color = color;
this.cilindrada = cilindrada;
}
//Métodos
encender () {
return 'La moto está encendida';
}
rodar() {
return 'La moto está rodando';
}
apagar () {
return 'La moto está apagada';
}
}
module.exports = Vehicle;