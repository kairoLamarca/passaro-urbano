import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TopoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // public pesquisa(event: Event): void{
  //   console.log((<HTMLInputElement>event.target).value);
  // }

  public pesquisa(termoDaBusca: string): void{
    console.log(termoDaBusca);
  }

}
