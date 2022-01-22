import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import Swiper from 'swiper';
import { Depoimento } from './model/depoimento';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit {

  listaDepoimento: Depoimento[] = [];

  title = 'ngSlick';

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": false
  };

  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {

    this.listaDepoimento.push({ nomeCliente: 'Jakso laquini', local: 'Vila Alegre - Rio Novo do Sul - Es', descricao: 'Pontualidade, honestidade e pontualismo',  nota: 5});
    this.listaDepoimento.push({ nomeCliente: 'Jakso laquini', local: 'Vila Alegre - Rio Novo do Sul - Es', descricao: 'Pontualidade, honestidade e pontualismo, Pontualidade, honestidade e pontualismo Pontualidade, honestidade e pontualismo',  nota: 5});
    this.listaDepoimento.push({ nomeCliente: 'Jakso laquini', local: 'Vila Alegre - Rio Novo do Sul - Es', descricao: 'Pontualidade, honestidade e pontualismo',  nota: 5});
    this.listaDepoimento.push({ nomeCliente: 'Jakso laquini', local: 'Vila Alegre - Rio Novo do Sul - Es', descricao: 'Pontualidade, honestidade e pontualismo',  nota: 5});
    this.listaDepoimento.push({ nomeCliente: 'Jakso laquini', local: 'Vila Alegre - Rio Novo do Sul - Es', descricao: 'Pontualidade, honestidade e pontualismo',  nota: 5});
    this.listaDepoimento.push({ nomeCliente: 'Jakso laquini', local: 'Vila Alegre - Rio Novo do Sul - Es', descricao: 'Pontualidade, honestidade e pontualismo',  nota: 5});
  }

  // tslint:disable-next-line:typedef
  slickInit(e: any) {
    console.log('slick initialized');
  }
// tslint:disable-next-line:typedef
  breakpoint(e: any) {
    console.log('breakpoint');
  }
// tslint:disable-next-line:typedef
  afterChange(e: any) {
    console.log('afterChange');
  }
// tslint:disable-next-line:typedef
  beforeChange(e: any) {
    console.log('beforeChange');
  }


}
