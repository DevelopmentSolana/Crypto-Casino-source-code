import { PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

export const formatUserName = (nameOrAddress: string): string => {
  try {
    const pubKey = new PublicKey(nameOrAddress);
    if (PublicKey.isOnCurve(pubKey))
      return `${nameOrAddress.slice(0, 4)}...${nameOrAddress.slice(-4)}`;
  } catch (error) {}
  return nameOrAddress;
  // return nameOrAddress.length > 10
  //   ? nameOrAddress.slice(0, 4) + '...' + nameOrAddress.slice(-4)
  //   : nameOrAddress;
};

export const formatSol2Lamports = (solAmount: number) => {
  return Math.floor(solAmount * LAMPORTS_PER_SOL);
};

export const formatSplToken2Lamports = (
  amount: number,
  decimal: number = 9
) => {
  return Math.floor(amount * 10 ** decimal);
};

export const formatLamports2Sol = (lamports: number) => {
  return Math.floor(lamports) / LAMPORTS_PER_SOL;
};

// const numberFormater = new Intl.NumberFormat('en-US', {
//   style: 'decimal',
//   minimumFractionDigits: 0,
//   maximumFractionDigits: 2
// });

export const formatNumber = (num: number | string | undefined, decimal = 0) => {
  if (!num) return 0;
  if (isNaN(Number(num))) return 0;

  const numberFormater = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: decimal,
    maximumFractionDigits: 2
  });
  return numberFormater.format(Number(num));
};

export const formatSecond2Day = (second: number) => {
  return (second / 86400).toFixed(0);
};
