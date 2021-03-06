import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {

    this.route.parent.params.subscribe((parametros: Params) => {//paramentos da rota pai
      this.ofertasService.getOndeFicaOfertaPorId(parametros.id)
        .then((descricao: string) => {
          this.ondeFica = descricao;
        });
    })

    //console.log('ID da rota pai: ', this.route.parent.snapshot.params['id']);//acessar parametros da rota pai
    // this.ofertasService.getOndeFicaOfertaPorId(this.route.parent.snapshot.params['id'])
    //   .then((descricao: string) => {
    //     this.ondeFica = descricao;
    //   });
  }

}
