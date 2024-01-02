import { Dimensions, PixelRatio } from "react-native";


export function sizeParse(tamanho: number) {
  let ratio = Dimensions.get('window').width / 420;
  let size = tamanho * ratio;
  return Math.round(PixelRatio.roundToNearestPixel(size));
}

export function formatCPF(input){
  const numericInput = input.replace(/\D/g, '');

  return numericInput.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};


// Função para formatar o valor como moeda
export function formatarMoeda(valor) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  return formatter.format(valor);
}
