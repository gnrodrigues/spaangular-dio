import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MensagemComponent } from './mensagem/mensagem.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  { path:  'mensagem', component:  MensagemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
