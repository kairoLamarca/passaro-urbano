import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) { }//instanciando por provider

  ngOnInit() {
    //this.ofertas = this.ofertasService.getOfertas();
    //console.log(this.ofertas);

    this.ofertasService.getOfertas2()
      .then((ofertas: Oferta[]) =>{//executa uma ação quando a promise for resolve
        this.ofertas = ofertas;//ofertas foi passado por parametro no resolve da promise
      })
  }

}
