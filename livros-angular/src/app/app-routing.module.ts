import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivroListaComponent } from './LivroLista/livro-lista.component';
import { LivroDadosComponent } from './LivroDados/livro-dados.component';

const routes: Routes = [
  { path: 'lista', component: LivroListaComponent },
  { path: 'dados', component: LivroDadosComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
