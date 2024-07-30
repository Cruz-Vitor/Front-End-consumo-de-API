import { Component } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
   public produtos: any[] = [];
   constructor(private produtoService:ProdutosService){}
   ngOnInit(){
    this.ListarProdutos()
   }

   ListarProdutos(){
    this.produtoService.getProdutos().subscribe(
      produtosDaApi => {
        this.produtos = produtosDaApi
      }
    )
   }
}
