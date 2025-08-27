import { Veiculo } from './veiculo.js';

export class cavalo extends Veiculo {
  getVelocidade() {
    return 15;
  }

  getAutonomia() {
    return 0; // cavalo não tem autonomia de combustível
  }

  getRestricoes() {
    return ["quente"];
  }

  nome() {
    return "Cavalo";
  }
}
