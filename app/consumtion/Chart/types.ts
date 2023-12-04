export type Day = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export interface DailyAmount {
  _sum: {
    status: number;
  };
  VoteFor: string;
}
