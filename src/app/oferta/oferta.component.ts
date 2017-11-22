import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//importar para usar o snapshot de rota

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OfertaComponent implements OnInit {

  //private route: ActivatedRoute;

  constructor(private route: ActivatedRoute) { //já cria como um atributo da classe
    //this.route = route;
  }

  ngOnInit() {
    console.log('ID recuperado da rota: ', this.route.snapshot.params['id']);//parametro configurado de acordo com as rotas configuradas
  }

}
