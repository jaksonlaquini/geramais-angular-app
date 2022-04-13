import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VantagemEnergiaSolarComponent } from './vantagem-energia-solar/vantagem-energia-solar.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NossosServicosComponent } from './nossos-servicos/nossos-servicos.component';
import { SecaoProjetosComponent } from './secao-projetos/secao-projetos.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule,
        SlickCarouselModule
    ],
    declarations: [ HomeComponent, NossosServicosComponent, VantagemEnergiaSolarComponent, DepoimentosComponent, SecaoProjetosComponent ],
    exports: [ HomeComponent ],
    providers: []
})
export class HomeModule { }
