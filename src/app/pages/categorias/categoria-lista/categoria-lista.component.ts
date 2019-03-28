import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CategoriaService } from "../shared/categoria.service";
import { Categoria } from '../shared/categoria.model';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {

  private items: MenuItem[];
  private titlePanel: string;
  private categorias: Categoria[];
 
  constructor(private categoriaService: CategoriaService){}

  ngOnInit() {

    this.items = [
      { label:'Home', url: '/' },
      { label:'Categorias' }
    ];

    this.categoriaService.getAll().subscribe(
      categorias => this.categorias = categorias,
      error => alert("Erro ao carregar a lista")
    )

    this.titlePanel = "Lista de Categorias";
  }

  deleteCategoria(categoria){
    const confirmaExclusao = confirm("Deseja realmente excluir esse registro");

    if(confirmaExclusao){
      this.categoriaService.delete(categoria.id).subscribe(
        ()=> this.categorias = this.categorias.filter(element => element != categoria),
        ()=> alert("Erro ao excluir")
      )
    }
  }

}
