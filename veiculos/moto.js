import { Veiculo } from './veiculo.js';

export class moto extends Veiculo {
  getVelocidade() {
    return 60;
  }

  getAutonomia() {
    return 25;
  }

  getRestricoes() {
    return ["neve"];
  }

  nome() {
    return "Moto";
  }
}
