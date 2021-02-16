import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'spa-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {
  mensagem;
  
  constructor(private router: Router) {
    this.mensagem = this.router.getCurrentNavigation().extras.state
   }

  ngOnInit(): void {
  }

}
