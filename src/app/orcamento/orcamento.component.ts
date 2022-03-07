import { Component, OnInit } from '@angular/core';
import { OrcamentoModel } from './model/orcamento.model';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss']
})
export class OrcamentoComponent implements OnInit {

  orcamento: OrcamentoModel = new OrcamentoModel();
  constructor() { }

  ngOnInit(): void {

  }

  public enviarOrcamento(): void {
    console.log(this.orcamento.nome);
  }

  public limparOrcamento(): void {
    this.orcamento = new OrcamentoModel();
  }
}
