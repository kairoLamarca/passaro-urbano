import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap'/

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa //retorno Oferta[]
      .switchMap();
  }

  // public pesquisa(event: Event): void{
  //   console.log((<HTMLInputElement>event.target).value);
  // }

  public pesquisa(termoDaBusca: string): void {
    // this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca);
    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   (erro: any) => console.log('Erro status: ', erro.status),//segundo parametro é o erro
    //   () => console.log('Fluxo de eventos completo')//terceiro paraemtro é a conclusão
    // )

    this.subjectPesquisa.next(termoDaBusca)
  }

}
