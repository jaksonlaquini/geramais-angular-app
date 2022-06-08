import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../core/services/message.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent implements OnInit {
  constructor(private router: Router, private me: MessageService) {}

  ngOnInit(): void {
    // this.me.criarTeste();
    //this.me.getTeste();
  }

  public abrirDetalheTipoProjeto(tipoProjeto: number): void {
    this.router.navigate(['/detalhe-projeto', tipoProjeto]);
  }
}
