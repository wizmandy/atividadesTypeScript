type MissionReward = { xp: number; bonus?: number };

export const rewards: MissionReward[] = [
  { xp: 100, bonus: 20 },
  { xp: 150 },
  { xp: 80, bonus: 10 },
];

export function calculateTotalXP(rewards: MissionReward[]): number {
  let total = 0;
  for (const reward of rewards) {
    total += reward.xp + (reward.bonus ?? 0);
  }
  return total;
}
