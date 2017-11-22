import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//importar para poder pegar a rota ativa e recuperar os parametros

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
    //utilizando snapshot
    //console.log('ID recuperado da rota: ', this.route.snapshot.params['id']);//parametro configurado de acordo com as rotas configuradas

    //utilizando subscribe
    this.route.params.subscribe((parametro: any) => {
      console.log(parametro.id);//retorna um objeto literal com todos os parametros
    });

  }

}
