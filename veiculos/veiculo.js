export class Veiculo {
  getVelocidade() {
    throw new Error("Método getVelocidade() deve ser implementado.");
  }

  getAutonomia() {
    throw new Error("Método getAutonomia() deve ser implementado.");
  }

  getRestricoes() {
    return []; 
  }

  nome() {
    return "Veículo";
  }
}
