import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

const config: Partial<IndividualConfig> = {
  timeOut: 5000,
  enableHtml: true,
  positionClass: 'toast-top-right',
  closeButton: true,
};

@Injectable()
export class MessageService {
  constructor(
    private toastr: ToastrService,
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  // tslint:disable-next-line:typedef
  showMessage(
    message: string,
    alerta: 'info' | 'warning' | 'success' | 'error' = 'success',
    duration: number = 5000
  ) {
    switch (alerta) {
      case 'info':
        this.toastr.info(message, 'Informação', config);
        break;
      case 'warning':
        this.toastr.warning(message, 'Alerta', config);
        break;
      case 'success':
        this.toastr.success(message, 'Sucesso', config);
        break;
      case 'error':
        this.toastr.error(message, 'Erro', config);
        break;
      default:
        this.toastr.info(message, 'Informação', config);
        break;
    }
  }

  // tslint:disable-next-line:typedef
  async criarTeste() {
    await this.afs.collection('jakim').add({ nome: 'teste', id: 0 });
  }

  // tslint:disable-next-line:typedef
  async getTeste() {
    const teste = (
      await this.afs.collection('jakim').get().toPromise()
    ).docs.map((x) => x.data());
    console.log(teste);
  }

  // tslint:disable-next-line:typedef
  async inserirImagem(file: File) {
    this.storage.upload(`/tutorial/${file.name}`, file);

    // this.afs.doc('tutorial/' + 12).update(file);
  }
}
