import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { SETTINGS as FIRESTORE_SETTINGS } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogNoticiaComponent } from './blog/blog-noticia/blog-noticia.component';
import { BlogComponent } from './blog/blog.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { ContatoComponent } from './contato/contato.component';
import { TrabalheConoscoModalComponent } from './contato/trabalhe-conosco-modal/trabalhe-conosco-modal.component';
import { MessageService } from './core/services/message.service';
import { HomeModule } from './home/home.module';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { DetalheProjetosComponent } from './projetos/detalhe-projetos/detalhe-projetos.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { QuemSomosModule } from './quem-somos/quem-somos.module';
import { FooterComponent } from './shared/footer/footer.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

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
    BlogNoticiaComponent,
    LoadingSpinnerComponent,
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    HttpClientModule,
  ],
  providers: [
    MessageService,
    {
      provide: FIRESTORE_SETTINGS,
      useValue: { ignoreUndefinedProperties: true },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
