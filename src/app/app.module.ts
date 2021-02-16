import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { MusicaComponent } from './musica/musica.component';
import { RedesSociaisComponent } from './redes-sociais/redes-sociais.component';
import { DemoMaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { MensagemComponent } from './mensagem/mensagem.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    MusicaComponent,
    RedesSociaisComponent,
    MensagemComponent
  ],
  imports: [
    FormsModule,
    DemoMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
