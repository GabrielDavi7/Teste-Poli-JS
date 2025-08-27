import { Veiculo } from './veiculo.js';

export class drone extends Veiculo {
  getVelocidade() {
    return 25;
  }

  getAutonomia() {
    return 12;
  }

  getRestricoes() {
    return ["chuva"];
  }

  nome() {
    return "Drone";
  }
}
