import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuemSomosComponent } from './quem-somos.component';
import { FundadorComponent } from './fundador/fundador.component';
import { ServicosComponent } from './servicos/servicos.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        NgbModule,
    ],
    declarations: [ QuemSomosComponent, FundadorComponent, ServicosComponent ],
    exports: [ QuemSomosComponent, FundadorComponent ],
    providers: []
})
export class QuemSomosModule { }
