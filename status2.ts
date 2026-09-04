type MissionStatus = 'locked' | 'available' | 'done';

export const statuses: MissionStatus[] = [
  'done',
  'available',
  'done',
  'locked',
  'done',
];

export function buildProgressSummary(statuses: MissionStatus[]): string {
  if (statuses.length === 0) {
    return '0 de 0 missões concluídas - 0%';
  }
  const concluidas = statuses.filter((status) => status === 'done').length;
  const porcentagem = (concluidas / statuses.length) * 100;
  return `${concluidas} de ${statuses.length} missões concluídas - ${porcentagem}%`;
}
