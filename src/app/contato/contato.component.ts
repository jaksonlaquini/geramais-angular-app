import { Component, OnInit } from '@angular/core';
import { MessageService } from '../core/services/message.service';
import { ContatoModel } from './model/contato.model';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contato: ContatoModel = new ContatoModel();
  constructor(private messageService: MessageService) { }

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

}
