import { canStartMission } from './status';
import { calculateTotalXP, rewards } from './reward';
import { buildProgressSummary, statuses } from './status2';

const idade: number = 21;
let nome: string = 'Matheus';
let estaVivo: boolean = true;

let listaDeCompra: string[] = ['Batata', 'Beterraba', 'Tomate', 'Melancia'];

type Player = {
  name: string;
  title?: string;
  level: number;
  premium: boolean;
};

let player: Player = {
  name: 'Matheus',
  level: 3,
  premium: true,
};

type StatusMissao = 'Blocked' | 'Open' | 'Done';
let statusAtualDaMissao: StatusMissao = 'Done';

function soma(var1: number, var2: number): number {
  return var1 + var2;
}

console.log(soma(2, 2));

// status.ts
console.log(canStartMission(4, 3, 'available'));
console.log(canStartMission(2, 3, 'available'));
console.log(canStartMission(10, 5, 'locked'));

// reward.ts
console.log(calculateTotalXP(rewards));
console.log(calculateTotalXP([]));

// status2.ts
console.log(buildProgressSummary(statuses));
