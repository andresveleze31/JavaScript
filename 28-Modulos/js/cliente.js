export const nombreCliente = "Juan";
export const variable = 20;

export function mostrarInformacion(nombre, ahorro) {
  return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
  if (ahorro <= 0) {
    console.log("No tiene Saldo");
  } else {
    console.log("Tiene Saldo");
  }
}

export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }

  mostrarInformacion() {
    console.log(`Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`);
  }
}
