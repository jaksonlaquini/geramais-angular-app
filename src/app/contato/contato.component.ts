import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContatoService } from '../core/services/contato.service';
import { MessageService } from '../core/services/message.service';
import { ContatoModel } from './model/contato.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  contato: ContatoModel = new ContatoModel();
  closeResult: string = '';
  loading: boolean = false;
  constructor(
    private messageService: MessageService,
    private modalService: NgbModal,
    private contatoService: ContatoService
  ) {}

  ngOnInit(): void {
    this.iniciarContato();
  }

  public enviarContato(): void {
    if (this.validarContato()) {
      this.loading = true;
      this.contatoService.enviarEmail(this.contato).subscribe(
        (resultado) => {
          this.messageService.showMessage(
            'Contato enviado com sucesso! Entraremos em contato o mais rápido possível. Aguarde!',
            'success'
          );
          this.limparContato();
          this.loading = false;
        },
        (erro) => {
          if (erro.status === 400) {
            this.messageService.showMessage(
              'Seu email não pode ser enviado. Por favor tente mais tarde!',
              'error'
            );
            this.loading = false;
          }
        }
      );
    }
  }

  private validarContato(): boolean {
    let retorno = true;
    if (!this.contato?.nome) {
      this.messageService.showMessage('Informe o nome!', 'warning');
      retorno = false;
    } else if (!this.contato?.email) {
      this.messageService.showMessage('Informe um email!', 'warning');
      retorno = false;
    } else if (!this.contato?.telefone) {
      this.messageService.showMessage('Informe um telefone!', 'warning');
      retorno = false;
    }

    return retorno;
  }

  public limparContato(): void {
    this.iniciarContato();
  }

  iniciarContato(): void {
    this.contato = new ContatoModel();
  }

  open(content: any, type: any, modalDimension: any): void {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService
        .open(content, {
          windowClass: 'modal-mini',
          size: 'sm',
          centered: true,
        })
        .result.then(
          (result) => {
            this.closeResult = 'Closed with: $result';
          },
          (reason) => {
            this.closeResult = 'Dismissed $this.getDismissReason(reason)';
          }
        );
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService
        .open(content, { windowClass: 'modal-danger', centered: true })
        .result.then(
          (result) => {
            this.closeResult = 'Closed with: $result';
          },
          (reason) => {
            this.closeResult = 'Dismissed $this.getDismissReason(reason)';
          }
        );
    } else {
      this.modalService.open(content, { centered: true }).result.then(
        (result) => {
          this.closeResult = 'Closed with: $result';
        },
        (reason) => {
          this.closeResult = 'Dismissed $this.getDismissReason(reason)';
        }
      );
    }
  }
}
