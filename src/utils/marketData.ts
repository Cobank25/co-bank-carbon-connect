
// Função para gerar dados simulados de preços históricos
export const generateMarketData = (basePrice: number, days: number = 30) => {
  const data = [];
  let currentPrice = basePrice;
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    // Simulação de volatilidade do mercado
    const volatility = 0.02; // 2% de volatilidade diária
    const randomChange = (Math.random() - 0.5) * 2 * volatility;
    currentPrice = currentPrice * (1 + randomChange);
    
    data.push({
      date: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
      value: Number(currentPrice.toFixed(2))
    });
  }
  
  return data;
};

// Dados simulados para diferentes tipos de investimentos
export const getInvestmentData = () => {
  return {
    fundos: [
      { id: 'CARB11', data: generateMarketData(89.42), color: '#10b981' },
      { id: 'FLOR11', data: generateMarketData(64.18), color: '#059669' },
      { id: 'ENLP11', data: generateMarketData(102.76), color: '#047857' },
      { id: 'CRDV11', data: generateMarketData(10.25), color: '#065f46' },
    ],
    empresas: [
      { id: 'ECOE3', data: generateMarketData(32.45), color: '#10b981' },
      { id: 'GRFT3', data: generateMarketData(78.92), color: '#059669' },
      { id: 'TRRA3', data: generateMarketData(45.30), color: '#047857' },
    ],
    etfs: [
      { id: 'CARB11', data: generateMarketData(123.70), color: '#10b981' },
      { id: 'ENRG11', data: generateMarketData(98.50), color: '#059669' },
    ]
  };
};
