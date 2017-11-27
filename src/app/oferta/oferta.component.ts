import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//importar para poder pegar a rota ativa e recuperar os parametros
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit {

  //private route: ActivatedRoute;
  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { //já cria como um atributo da classe
    //this.route = route;    
  }

  ngOnInit() {
    //utilizando snapshot
    //console.log('ID recuperado da rota: ', this.route.snapshot.params['id']);//parametro configurado de acordo com as rotas configuradas

    //utilizando subscribe
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro.id);//retorna um objeto literal com todos os parametros
    // });

    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
        console.log(this.oferta);
      });

    // this.route.params.subscribe(//observable
    //   (parametro: any) => { console.log(parametro) },
    //   (erro: any) => console.log(erro),
    //   () => console.log('Processamento foi classificado como concluído!')
    // )

    
  }

}
