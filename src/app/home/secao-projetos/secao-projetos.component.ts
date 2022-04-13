import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secao-projetos',
  templateUrl: './secao-projetos.component.html',
  styleUrls: ['./secao-projetos.component.css']
})
export class SecaoProjetosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public abrirProjeto(): void {
    this.router.navigate(['/projetos']);
  }

}
