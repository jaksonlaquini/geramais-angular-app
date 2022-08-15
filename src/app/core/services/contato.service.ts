import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContatoModel } from 'src/app/contato/model/contato.model';
import { TrabalheConoscoModel } from 'src/app/contato/model/trabalhe-conosco.model';
import { OrcamentoModel } from 'src/app/orcamento/model/orcamento.model';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  readonly apiURL: string = 'https://geramaisengenhariaapi.herokuapp.com/';
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  public enviarEmail(contato: ContatoModel): Promise<any> {
    return this.http.post(`${this.apiURL}email/enviar`, contato).toPromise();
  }

  // tslint:disable-next-line:typedef
  public enviarEmailOrcamento(contato: OrcamentoModel): Promise<any> {
    const formData = new FormData();
    formData.append('servico', contato.servico);
    formData.append('nome', contato.nome);
    formData.append('email', contato.email);
    formData.append('telefone', contato.telefone);
    formData.append('endereco', contato.endereco);
    formData.append('mensagem', contato.mensagem);
    formData.append('anexo', contato.anexo);

    return this.http
      .post(`${this.apiURL}email/enviarorcamento`, formData)
      .toPromise();
  }

  // tslint:disable-next-line:typedef
  public enviarEmailTrabalheConosco(
    trabalheConosco: TrabalheConoscoModel
  ): Promise<any> {
    const formData = new FormData();
    formData.append('areaInteresse', trabalheConosco.areaInteresse);
    formData.append('nome', trabalheConosco.nome);
    formData.append('email', trabalheConosco.email);
    formData.append('telefone', trabalheConosco.telefone);
    formData.append('apresentacao', trabalheConosco.apresentacao);
    formData.append('anexo', trabalheConosco.anexo);

    return this.http
      .post(`${this.apiURL}email/trabalheConosco`, formData)
      .toPromise();
  }
}
