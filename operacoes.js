export function calcularTempo(distancia, veiculo) {
  console.log("⏱️ Tempo: " + distancia / veiculo.getVelocidade() + " horas");
}

export function custoCombustivel(distancia, veiculo) {
  const autonomia = veiculo.getAutonomia();
  if (autonomia > 0) {
    console.log("💰 Custo estimado: " + distancia / autonomia);
  } else {
    console.log("💰 Este veículo não consome combustível.");
  }
}

export function restricao(clima, veiculo) {
  const restricoes = veiculo.getRestricoes();

  if (restricoes.length === 0) {
    console.log("✅ Ele pode operar nessas condições.");
  } else if (restricoes.some(cond => clima.includes(cond))) {
    console.log("❌ Ele não pode operar nessas condições.");
  } else {
    console.log("✅ Ele pode operar nessas condições.");
  }
}
