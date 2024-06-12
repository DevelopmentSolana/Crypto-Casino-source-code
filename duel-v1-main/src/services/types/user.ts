export interface FetchUserInfoResponse {
  info: Info;
  statistics: Statistics;
}

export interface Info {
  id: number;
  name: string;
  walletAddress: string;
  avatar: string;
  banned: boolean;
  muted: boolean;
}

export interface Statistics {
  best_streaks: number;
  lost_rounds: number;
  max_profit: number;
  total_profit: number;
  total_rounds: number;
  total_wagered: number;
  winned_rounds: number;
  worst_streaks: number;
  private_profile: boolean;
}
