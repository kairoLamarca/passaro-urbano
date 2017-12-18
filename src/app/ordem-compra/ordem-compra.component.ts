import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  //permite decorar um atributo da classe com os valores contidos em uma variavel de referencia do template
  @ViewChild('formulario') public f: NgForm;

  public idPedidoCompra: number;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }

  public confirmarCompra(): void {

    let pedido: Pedido = new Pedido(
      this.f.value.endereco,
      this.f.value.numero,
      this.f.value.complemento,
      this.f.value.formaPagamento
    );

    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) =>{
        this.idPedidoCompra = idPedido;
      });
  }
}
