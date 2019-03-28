import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {

  private items: MenuItem[];
  private titlePanel: string;
  private categorias: any[];
 
  ngOnInit() {

    this.items = [
      { label:'Home', url: '/' },
      { label:'Categorias' }
    ];

    this.categorias = [
      { nome: 'Lazer', descricao: 'Aventura, cinema, parque...' },
      { nome: 'Culinária', descricao: 'Restaurantes, pratos ...' }
    ];

    this.titlePanel = "Lista de Categorias";
  }

}
