/* 3) Escreva um programa que faça a conversão de temperaturas entre Celsius e Fahrenheit. */

function celsiusParaFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return `${celsius}°C é igual a ${fahrenheit.toFixed(1)}°F`;
}

function fahrenheitParaCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return `${fahrenheit}°F é igual a ${celsius.toFixed(1)}°C`;
}

// testando
console.log(celsiusParaFahrenheit(25));
console.log(fahrenheitParaCelsius(80));