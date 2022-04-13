import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './home/home.module';
import { QuemSomosModule } from './quem-somos/quem-somos.module';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from './core/services/message.service';
import { ContatoComponent } from './contato/contato.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { DetalheProjetosComponent } from './projetos/detalhe-projetos/detalhe-projetos.component';
import { TrabalheConoscoModalComponent } from './contato/trabalhe-conosco-modal/trabalhe-conosco-modal.component';
import { BlogComponent } from './blog/blog.component';
import { BlogNoticiaComponent } from './blog/blog-noticia/blog-noticia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ComoFuncionaComponent,
    OrcamentoComponent,
    ContatoComponent,
    TrabalheConoscoModalComponent,
    BlogComponent,
    ProjetosComponent,
    DetalheProjetosComponent,
    TrabalheConoscoModalComponent,
    BlogNoticiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HomeModule,
    QuemSomosModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
