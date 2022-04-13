import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoProjeto } from '../model/tipo-projeto.enum';

@Component({
  selector: 'app-detalhe-projetos',
  templateUrl: './detalhe-projetos.component.html',
  styleUrls: ['./detalhe-projetos.component.scss']
})
export class DetalheProjetosComponent implements OnInit {

  titulo = 'Projeto ';
  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const tipo = this.route.snapshot.paramMap.get('tipoProjeto');

    switch (tipo) {
      case TipoProjeto.RESIDENCIAL.toString():
        this.titulo += 'Comercial';
        break;
      case TipoProjeto.EMPRESARIAL.toString():
        this.titulo += 'Residencial';
        break;
      default:
        this.titulo += 'Rural';
        break;
    }

  }

}
