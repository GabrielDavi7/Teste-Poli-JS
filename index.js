import { moto } from './veiculos/moto.js';
import { drone } from './veiculos/drone.js';
import { cavalo } from './veiculos/cavalo.js';
import { bicicleta } from './veiculos/bicicleta.js';

import { calcularTempo, custoCombustivel, restricao } from './operacoes.js';

const distancia = 30;
const clima = ["quente"];

const veiculos = [
  new moto(),
  new drone(),
  new cavalo(),
  new bicicleta()
];

console.clear();

for (const veiculo of veiculos) {
  console.log(`\n🚗 Cálculo para: ${veiculo.nome()}`);
  calcularTempo(distancia, veiculo);
  custoCombustivel(distancia, veiculo);
  restricao(clima, veiculo);
}
