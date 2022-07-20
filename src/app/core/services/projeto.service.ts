import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Projeto } from 'src/app/projetos/model/projeto';
import { TipoProjeto } from 'src/app/projetos/model/tipo-projeto.enum';

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  // tslint:disable-next-line:typedef
  async inserirProjeto(file: File) {
    const nameUrl = file.name.split('.');
    const filePath = '/projetos/' + nameUrl[0];

    const projeto = new Projeto();
    projeto.cliente = 'Pazigran 2';
    projeto.endereco = 'Vitoria';
    projeto.qtdPlacas = 30;
    projeto.potencia = '8kwp';
    projeto.economiaAnual = '10.800,00';
    projeto.tipoProjeto = TipoProjeto.EMPRESARIAL;

    await this.inserirImagem(file, filePath);
    const storageRef = this.storage.ref(filePath);
    storageRef.getDownloadURL().subscribe((downloadURL) => {
      this.afs.collection('projeto').add({
        cliente: projeto.cliente,
        endereco: projeto.endereco,
        qtdPlacas: projeto.qtdPlacas,
        potencia: projeto.potencia,
        economiaAnual: projeto.economiaAnual,
        tipoProjeto: projeto.tipoProjeto,
        imagemUrl: downloadURL,
      });
    });
  }

  // tslint:disable-next-line:typedef
  async getTeste() {
    const teste = (
      await this.afs.collection('jakim').get().toPromise()
    ).docs.map((x) => x.data());
    console.log(teste);
  }

  // tslint:disable-next-line:typedef
  async getProjeto(tipoProjeto: TipoProjeto): Promise<Projeto[]> {
    const projetos = (
      await this.afs
        .collection<Projeto>('projeto', (ref) => {
          ref
            .where('tipoProjeto', '==', tipoProjeto)
            .orderBy('dataCriacao', 'desc');
        })
        .get()
        .toPromise()
    ).docs.map((x) => {
      const dados = x.data();
      return { ...dados };
    });

    return projetos;
  }

  // tslint:disable-next-line:typedef
  async inserirImagem(file: File, name: string) {
    this.storage.upload(`${name}`, file);
  }
}
