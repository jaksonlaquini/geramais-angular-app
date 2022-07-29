import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContatoService } from 'src/app/core/services/contato.service';
import { MessageService } from './../../core/services/message.service';
import { TrabalheConoscoModel } from './../model/trabalhe-conosco.model';

@Component({
  selector: 'trabalhe-conosco-modal',
  templateUrl: './trabalhe-conosco-modal.component.html',
  styleUrls: ['./trabalhe-conosco-modal.component.css'],
})
export class TrabalheConoscoModalComponent implements OnInit {
  loading = false;
  trabalheConosco: TrabalheConoscoModel = new TrabalheConoscoModel();
  @ViewChild('input', { static: false })
  refField!: ElementRef;

  constructor(
    private messageService: MessageService,
    private contatoService: ContatoService
  ) {}

  ngOnInit(): void {
    this.iniciar();
  }

  public limpar(): void {
    if (this.refField) {
      this.refField.nativeElement.value = '';
    }
    this.iniciar();
  }

  iniciar(): void {
    this.trabalheConosco = new TrabalheConoscoModel();
  }

  public carregarCurriculo(event: any): void {
    const file: File = event.target.files[0];
    this.trabalheConosco.anexo = file;
  }

  public enviar(): void {
    if (this.validarTrabalheConosco()) {
      this.loading = true;

      try {
        this.contatoService
          .enviarEmailTrabalheConosco(this.trabalheConosco)
          .then((resultado) => {
            if (resultado.sucesso) {
              this.messageService.showMessage(
                'Agradecemos seu interesse em fazer parte do nosso time',
                'success'
              );
              this.limpar();
              this.loading = false;
            } else {
              this.messageService.showMessage(
                'Ocorreu um problema ao enviar seus dados. Por favor tente mais tarde!',
                'error'
              );
              this.loading = false;
            }
          });
      } catch (error) {
        this.messageService.showMessage(
          'Ocorreu um problema ao enviar seus dados. Por favor tente mais tarde!',
          'error'
        );
        this.loading = false;
      }
    }
  }

  private validarTrabalheConosco(): boolean {
    let retorno = true;
    if (!this.trabalheConosco?.nome) {
      this.messageService.showMessage('Informe o nome!', 'warning');
      retorno = false;
    } else if (!this.trabalheConosco?.email) {
      this.messageService.showMessage('Informe um email!', 'warning');
      retorno = false;
    } else if (!this.trabalheConosco?.telefone) {
      this.messageService.showMessage('Informe um telefone!', 'warning');
      retorno = false;
    }

    return retorno;
  }
}
