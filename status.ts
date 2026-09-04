export type MissionStatus = 'locked' | 'available' | 'done';

export function canStartMission(
  playerLevel: number,
  requiredLevel: number,
  status: MissionStatus
): boolean {
  if (playerLevel > requiredLevel && status == 'available') {
    return true;
  } else {
    return false;
  }
}
