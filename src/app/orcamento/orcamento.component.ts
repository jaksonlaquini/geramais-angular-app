import { Component, OnInit } from '@angular/core';
import { MessageService } from '../core/services/message.service';
import { ProjetoService } from '../core/services/projeto.service';
import { OrcamentoModel } from './model/orcamento.model';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss'],
})
export class OrcamentoComponent implements OnInit {
  orcamento: OrcamentoModel = new OrcamentoModel();
  constructor(
    private messageService: MessageService,
    private projetoService: ProjetoService
  ) {}

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
    this.orcamento = new OrcamentoModel();
    this.orcamento.servico = 'Selecione um serviço';
  }

  public carregarImagm(event: any): void {
    const file: File = event.target.files[0];
    this.projetoService.inserirProjeto(file);
  }
}
