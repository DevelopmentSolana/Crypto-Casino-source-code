import { createAction } from '@reduxjs/toolkit';
import { NFT } from 'api/types/nft';
import { UserRole } from 'config';

export interface Statistics {
  totalBets: number;
  totalWagered: number;
  totalProfit: number;
}

export const loadStatistics = createAction<any>('main/loadStatistics');
