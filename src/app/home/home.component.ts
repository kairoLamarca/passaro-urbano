import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }//instanciando por provider

  ngOnInit() {
    console.log(this.ofertasService.getOfertas());
  }

}
