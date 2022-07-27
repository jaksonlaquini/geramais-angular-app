import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContatoModel } from 'src/app/contato/model/contato.model';
import { OrcamentoModel } from 'src/app/orcamento/model/orcamento.model';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  readonly apiURL: string = 'https://geramaisengenhariaapi.herokuapp.com/';
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  public enviarEmail(contato: ContatoModel) {
    return this.http.post(`${this.apiURL}email/enviar`, contato);
  }

  // tslint:disable-next-line:typedef
  public enviarEmailOrcamento(contato: OrcamentoModel) {
    return this.http.post(`${this.apiURL}email/enviarorcamento`, contato);
  }
}
