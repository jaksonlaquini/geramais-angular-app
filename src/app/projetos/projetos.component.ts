import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public abrirDetalheTipoProjeto(tipoProjeto: number): void {
    this.router.navigate(['/detalhe-projeto', tipoProjeto]);
  }

}
