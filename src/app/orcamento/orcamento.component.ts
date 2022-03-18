import { Component, OnInit } from '@angular/core';
import { MessageService } from '../core/services/message.service';
import { OrcamentoModel } from './model/orcamento.model';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss']
})
export class OrcamentoComponent implements OnInit {

  orcamento: OrcamentoModel = new OrcamentoModel();
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.iniciarOrcamento();

  }

  public enviarOrcamento(): void {
    this.messageService.showMessage('teste', 'error');
    console.log(this.orcamento.nome);
  }

  public limparOrcamento(): void {
    this.iniciarOrcamento();
  }

  iniciarOrcamento(): void {
    this.orcamento =  new OrcamentoModel();
    this.orcamento.servico = 'Selecione um serviço';
  }
}
