export function convertChipToBalance(amount: number) {
  return Math.floor(amount * 10 ** 2) * 10 ** (window.balanceDecimal - 2);
}

export function convertBalanceToChip(amount: number) {
  return Math.floor(amount / 10 ** (window.balanceDecimal - 2)) / 10 ** 2;
}
