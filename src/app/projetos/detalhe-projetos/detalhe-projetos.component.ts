import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetoService } from 'src/app/core/services/projeto.service';
import { Projeto } from '../model/projeto';
import { TipoProjeto } from '../model/tipo-projeto.enum';

@Component({
  selector: 'app-detalhe-projetos',
  templateUrl: './detalhe-projetos.component.html',
  styleUrls: ['./detalhe-projetos.component.scss'],
})
export class DetalheProjetosComponent implements OnInit {
  titulo = 'Projeto ';
  listaProjeto: Projeto[] = [];
  constructor(
    private route: ActivatedRoute,
    private projetoService: ProjetoService
  ) {}

  ngOnInit(): void {
    const tipo = this.route.snapshot.paramMap.get('tipoProjeto');

    switch (tipo) {
      case TipoProjeto.RESIDENCIAL.toString():
        this.buscarProjetos(TipoProjeto.RESIDENCIAL);
        this.titulo += 'Comercial';
        break;
      case TipoProjeto.EMPRESARIAL.toString():
        this.buscarProjetos(TipoProjeto.EMPRESARIAL);
        this.titulo += 'Residencial';
        break;
      default:
        this.buscarProjetos(TipoProjeto.RURAL);
        this.titulo += 'Rural';
        break;
    }
  }

  public inserirProjeto(): void {
    this.projetoService.getProjeto(TipoProjeto.EMPRESARIAL);
  }

  private async buscarProjetos(tipo: TipoProjeto): Promise<void> {
    const result = await this.projetoService.getProjeto(tipo).then();

    if (result) {
      this.listaProjeto = result.map((x) => x);
    }
  }
}
