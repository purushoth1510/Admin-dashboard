export interface Stats {
  users: number;
  revenue: number;
  orders: number;
  growth: number;
}

export const initialStats: Stats = {
  users: 1240,
  revenue: 320000,
  orders: 320,
  growth: 18,
};
