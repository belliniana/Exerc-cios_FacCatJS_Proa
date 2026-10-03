(function () {
  class CancelledError extends Error {}

  function number(message, options = {}) {
    const { integer = false, min = -Infinity, max = Infinity, nonZero = false } = options;
    while (true) {
      const value = prompt(message);
      if (value === null) throw new CancelledError('Execução cancelada pelo usuário.');
      const parsed = Number(String(value).replace(',', '.'));
      if (!Number.isFinite(parsed)) {
        alert('Digite um número válido.');
        continue;
      }
      if (integer && !Number.isInteger(parsed)) {
        alert('Digite um número inteiro.');
        continue;
      }
      if (parsed < min || parsed > max || (nonZero && parsed === 0)) {
        alert('Valor fora do intervalo permitido.');
        continue;
      }
      return parsed;
    }
  }

  function text(message, options = {}) {
    const { required = true } = options;
    while (true) {
      const value = prompt(message);
      if (value === null) throw new CancelledError('Execução cancelada pelo usuário.');
      const clean = value.trim();
      if (!required || clean) return clean;
      alert('Digite um valor.');
    }
  }

  function yesNo(message) {
    while (true) {
      const value = text(message).toUpperCase();
      if (['S', 'SIM'].includes(value)) return true;
      if (['N', 'NAO', 'NÃO'].includes(value)) return false;
      alert('Responda S/Sim ou N/Não.');
    }
  }

  function money(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function decimal(value, digits = 2) {
    return Number(value).toLocaleString('pt-BR', { minimumFractionDigits: digits, maximumFractionDigits: digits });
  }

  function lines(items) {
    return items.join('\n');
  }

  function factorialNumber(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
  }

  function factorialBigInt(n) {
    let result = 1n;
    for (let i = 2n; i <= BigInt(n); i++) result *= i;
    return result;
  }

  window.Utils = { CancelledError, number, text, yesNo, money, decimal, lines, factorialNumber, factorialBigInt };
})();
