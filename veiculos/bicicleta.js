import { Veiculo } from './veiculo.js';

export class bicicleta extends Veiculo {
  getVelocidade() {
    return 30;
  }

  getAutonomia() {
    return 0;   // bicicleta não tem autonomia de combustível
  }

  getRestricoes() {
    return ["neve", "tempestade"];
  }

  nome() {
    return "Bicicleta";
  }
}
