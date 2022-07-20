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
  loading: boolean = false;
  ngOnInit(): void {
    this.loading = true;
  }

  public abrirDetalheTipoProjeto(tipoProjeto: number): void {
    this.router.navigate(['/detalhe-projeto', tipoProjeto]);
  }
}
