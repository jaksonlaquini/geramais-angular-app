import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContatoService } from '../core/services/contato.service';
import { MessageService } from '../core/services/message.service';
import { ProjetoService } from '../core/services/projeto.service';
import { OrcamentoModel } from './model/orcamento.model';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss'],
})
export class OrcamentoComponent implements OnInit {
  loading = false;
  textoFile = '';
  orcamento: OrcamentoModel = new OrcamentoModel();

  @ViewChild('input', { static: false })
  refField!: ElementRef;

  constructor(
    private messageService: MessageService,
    private projetoService: ProjetoService,
    private contatoService: ContatoService
  ) {}

  ngOnInit(): void {
    this.iniciarOrcamento();
  }

  public enviarOrcamento(): void {
    if (this.validarContato()) {
      this.loading = true;

      try {
        this.contatoService
          .enviarEmailOrcamento(this.orcamento)
          .then((resultado) => {
            if (resultado.sucesso) {
              this.messageService.showMessage(
                'OBRIGADO! Recebemos sua solicitação de orçamento. Retornaremos o contato em breve!',
                'success'
              );
              this.limparOrcamento();
              this.loading = false;
            } else {
              this.messageService.showMessage(
                'Seu email não pode ser enviado. Por favor tente mais tarde!',
                'error'
              );
              this.loading = false;
            }
          });
      } catch (error) {
        this.messageService.showMessage(
          'Seu email não pode ser enviado. Por favor tente mais tarde!',
          'error'
        );
        this.loading = false;
      }
    }
  }

  private validarContato(): boolean {
    let retorno = true;
    if (!this.orcamento?.nome) {
      this.messageService.showMessage('Informe o nome!', 'warning');
      retorno = false;
    } else if (!this.orcamento?.email) {
      this.messageService.showMessage('Informe um email!', 'warning');
      retorno = false;
    } else if (!this.orcamento?.telefone) {
      this.messageService.showMessage('Informe um telefone!', 'warning');
      retorno = false;
    } else if (!this.orcamento?.endereco) {
      this.messageService.showMessage('Informe um endereço!', 'warning');
      retorno = false;
    }

    return retorno;
  }

  public limparOrcamento(): void {
    if (this.refField) {
      this.refField.nativeElement.value = '';
    }
    this.iniciarOrcamento();
  }

  iniciarOrcamento(): void {
    this.orcamento = new OrcamentoModel();
    this.orcamento.servico = 'Selecione um serviço';
  }

  public carregarImagm(event: any): void {
    const file: File = event.target.files[0];
    this.orcamento.anexo = file;
  }
}
