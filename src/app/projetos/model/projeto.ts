import { TipoProjeto } from './tipo-projeto.enum';

export class Projeto {
  cliente!: string;
  endereco!: string;
  qtdPlacas!: number;
  potencia!: string;
  economiaAnual!: string;
  imagemUrl!: string;
  tipoProjeto!: TipoProjeto;
}
