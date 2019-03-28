import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [CategoriaListaComponent, CategoriaFormComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    BreadcrumbModule,
    PanelModule,
    ButtonModule,
    TableModule,
    ScrollingModule,
    ReactiveFormsModule
  ]
})
export class CategoriasModule { }
