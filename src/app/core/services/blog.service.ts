import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import {
  BlogNoticia,
  BlogNoticiaCompleta,
} from 'src/app/projetos/model/blogNoticia';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  // tslint:disable-next-line:typedef
  async inserirBlog(file: File) {
    const nameUrl = file.name.split('.');
    const filePath = '/blog/' + nameUrl[0];

    const blog = new BlogNoticia();
    blog.dataCriacao = new Date();
    blog.tituloNoticia =
      'Imóveis com sistemas fotovoltaicos são mais valorizados no mercado imobiliário';
    blog.noticia =
      'Uma pesquisa realizada pela Effective Home, especialista em painéis solares, indicou que a instalação de geradores fotovoltaicos pode aumentar o valor de um imóvel em até R$ 200 mil, na Europa. No Reino Unido, por exemplo, imóveis com energia solar são vendidos por 14% a mais, um acréscimo de cerca de 32 mil libras, com base no preço médio de uma casa naquele país.' +
      'Mas a mesma análise mostrou que o acréscimo pode ser ainda maior...';
    blog.imagemUrl = 'Atenção Adicionar Url Depois';

    const result = this.afs.collection('blog').add({
      dataCriacao: blog.dataCriacao,
      tituloNoticia: blog.tituloNoticia,
      noticia: blog.noticia,
      imagemUrl: blog.imagemUrl,
    });

    const blogNoticiaCompleta = new BlogNoticiaCompleta();
    blogNoticiaCompleta.dataCriacao = new Date();
    blogNoticiaCompleta.tituloNoticiaCompleta =
      'Imóveis com sistemas fotovoltaicos são mais valorizados no mercado imobiliário';
    blogNoticiaCompleta.descricaoNoticiaCompleta =
      'Uma pesquisa realizada pela Effective Home, especialista em painéis solares, indicou que a instalação de geradores fotovoltaicos pode aumentar o valor de um imóvel em até R$ 200 mil, na Europa. No Reino Unido, por exemplo, imóveis com energia solar são vendidos por 14% a mais, um acréscimo de cerca de 32 mil libras, com base no preço médio de uma casa naquele país.' +
      'Mas a mesma análise mostrou que o acréscimo pode ser ainda maior...';
    blogNoticiaCompleta.imagemCabecalhoUrl = 'Atenção Adicionar Url Depois';
    blogNoticiaCompleta.imagemInfo1Url = 'Atenção Adicionar Url Depois';
    blogNoticiaCompleta.imagemInfo2Url = 'Atenção Adicionar Url Depois';
    blogNoticiaCompleta.imagemInfo3Url = 'Atenção Adicionar Url Depois';
    blogNoticiaCompleta.idBlog = (await result).id;
  }

  // tslint:disable-next-line:typedef
  async getBlog(): Promise<BlogNoticia[]> {
    const blogs = (
      await this.afs
        .collection<BlogNoticia>('blog', (ref) => ref.orderBy('dataCriacao'))
        .get()
        .toPromise()
    ).docs.map((x) => {
      const dados = x.data();
      dados.id = x.id;
      return { ...dados };
    });

    return blogs;
  }

  // tslint:disable-next-line:typedef
  async getBlogNoticiaCompleta(
    idNoticiaCompleta: string
  ): Promise<BlogNoticiaCompleta[]> {
    const blogNoticiaCompleta = (
      await this.afs
        .collection<BlogNoticiaCompleta>('blogNoticiaCompleta', (ref) =>
          ref.where('id', '==', idNoticiaCompleta)
        )
        .get()
        .toPromise()
    ).docs.map((x) => {
      const dados = x.data();
      return { ...dados };
    });

    return blogNoticiaCompleta;
  }

  // tslint:disable-next-line:typedef
  async inserirImagem(file: File, name: string) {
    this.storage.upload(`${name}`, file);
  }
}
