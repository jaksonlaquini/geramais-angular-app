import { MessageService } from './../../core/services/message.service';
import { TrabalheConoscoModel } from './../model/trabalhe-conosco.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trabalhe-conosco-modal',
  templateUrl: './trabalhe-conosco-modal.component.html',
  styleUrls: ['./trabalhe-conosco-modal.component.css']
})
export class TrabalheConoscoModalComponent implements OnInit {

  trabalheConosco: TrabalheConoscoModel = new TrabalheConoscoModel();
  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
    this.iniciar();

  }

  public enviar(): void {
    console.log(this.trabalheConosco)
    this.messageService.showMessage('teste', 'error');
  }

  public limpar(): void {
    this.iniciar();
  }

  iniciar(): void {
    this.trabalheConosco =  new TrabalheConoscoModel();
  }

}
