/**
 * Formatting utilities for UXIO Academy inputs, currency, and editorial documents
 */

export function capitalizeFirst(text: string | undefined | null): string {
  if (!text) return '';
  const trimmed = text.trimStart();
  if (!trimmed) return text;
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

export function capitalizeWords(text: string | undefined | null): string {
  if (!text) return '';
  return text
    .split(' ')
    .map(word => (word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : ''))
    .join(' ');
}

export function formatCurrencyValue(val: string | undefined | null, isEs: boolean = true): string {
  if (!val) return '';
  const trimmed = val.trim();
  if (!trimmed) return '';

  // Check if string contains custom currency indicators already
  const hasCurrencyWord = /(cop|usd|eur|mxn|ars|clp|pesos|dolares|dólares)/i.test(trimmed);
  const cleanDigits = trimmed.replace(/[^0-9]/g, '');

  if (!cleanDigits) return trimmed;

  const num = parseInt(cleanDigits, 10);
  if (isNaN(num)) return trimmed;

  if (isEs) {
    // Format as Colombian Pesos: $ 90.000 COP
    const formatted = num.toLocaleString('es-CO');
    if (hasCurrencyWord && trimmed.includes('$')) return trimmed;
    return `$ ${formatted} COP`;
  } else {
    // Format as USD: $ 90 USD
    const formatted = num.toLocaleString('en-US');
    if (hasCurrencyWord && trimmed.includes('$')) return trimmed;
    return `$ ${formatted} USD`;
  }
}
