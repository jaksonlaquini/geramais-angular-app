import { BlogComponent } from './blog/blog.component';
import { ContatoComponent } from './contato/contato.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { DetalheProjetosComponent } from './projetos/detalhe-projetos/detalhe-projetos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'como-funciona', component: ComoFuncionaComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'detalhe-projeto/:tipoProjeto', component: DetalheProjetosComponent },
  { path: 'orcamento', component: OrcamentoComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'blog', component: BlogComponent },
  // { path: 'register',           component: SignupComponent },
  // { path: 'landing',          component: LandingComponent },
  // { path: 'login',          component: LoginComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
