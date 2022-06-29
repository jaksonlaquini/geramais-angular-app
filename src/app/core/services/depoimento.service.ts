import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Depoimento } from 'src/app/home/depoimentos/model/depoimento';

@Injectable({
  providedIn: 'root',
})
export class DepoimentoService {
  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  // tslint:disable-next-line:typedef
  async getDepoimento(): Promise<Depoimento[]> {
    const depoimentos = (
      await this.afs
        .collection<Depoimento>('depoimento', (ref) =>
          ref.orderBy('data-criacao')
        )
        .get()
        .toPromise()
    ).docs.map((x) => {
      return x.data();
    });

    return depoimentos;
  }
}
