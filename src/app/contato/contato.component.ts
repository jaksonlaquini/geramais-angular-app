import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from '../core/services/message.service';
import { ContatoModel } from './model/contato.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contato: ContatoModel = new ContatoModel();
  closeResult: string = '';
  constructor(private messageService: MessageService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.iniciarContato();

  }

  public enviarContato(): void {
    this.messageService.showMessage('teste', 'error');
  }

  public limparContato(): void {
    this.iniciarContato();
  }

  iniciarContato(): void {
    this.contato =  new ContatoModel();
  }

  open(content:any, type:any, modalDimension:any) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
        this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
            this.closeResult = 'Closed with: $result';
        }, (reason) => {
            this.closeResult = 'Dismissed $this.getDismissReason(reason)';
        });
    } else if (modalDimension === '' && type === 'Notification') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
          this.closeResult = 'Closed with: $result';
      }, (reason) => {
          this.closeResult = 'Dismissed $this.getDismissReason(reason)';
      });
    } else {
        this.modalService.open(content,{ centered: true }).result.then((result) => {
            this.closeResult = 'Closed with: $result';
        }, (reason) => {
            this.closeResult = 'Dismissed $this.getDismissReason(reason)';
        });
    }
}
}
