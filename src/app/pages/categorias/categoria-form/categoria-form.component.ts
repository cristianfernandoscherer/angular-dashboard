import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Categoria } from "../shared/categoria.model";
import { CategoriaService } from "../shared/categoria.service";

import { switchMap } from "rxjs/operators";

import toastr from "toastr";
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit, AfterContentChecked {

  private items: MenuItem[];
  private titlePanel: string;

  currentAction: string;
  categoriaForm: FormGroup;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;
  categoria: Categoria = new Categoria();

  constructor(private categoriaService: CategoriaService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.setCurrentAction();
    this.buildCategoriaForm();
    this.loadCategoria();

    this.items = [
      { label:'Home', url: '/' },
      { label:'Categorias', url: '/categorias' },
      { label:'Formulário de categorias' }
    ];

    this.titlePanel = "Formulário de categoria"

  }

  ngAfterContentChecked(){}

  submitForm(){
    this.submittingForm = true;

    if(this.currentAction == "new"){
      this.createCategoria();
    }else{
      this.updateCategoria();
    }

  }

  private setCurrentAction(){
    if(this.route.snapshot.url[0].path == "new")
      this.currentAction = "new"
    else 
      this.currentAction = "edit"
  }

  private buildCategoriaForm(){
    this.categoriaForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2)]],
      descricao: [null]
    });
  }

  private loadCategoria(){
    if(this.currentAction == "edit"){
      this.route.paramMap.pipe(
        switchMap(params => this.categoriaService.getById(+params.get("id")))
      ).subscribe(
        (categoria) =>{
          this.categoria = categoria;
          this.categoriaForm.patchValue(categoria);
        },
        (error) => alert("Ocorreu um erro, tente mais tarde")
      )
    }
  }

  createCategoria(){
    const categoria: Categoria = Object.assign(new Categoria(), this.categoriaForm.value);
    this.categoriaService.create(categoria).subscribe(
      categoria => this.actionsForSuccess(categoria),
      error => this.actionsForError(error)
    )
  }

  updateCategoria(){
    const categoria: Categoria = Object.assign(new Categoria(), this.categoriaForm.value);
    this.categoriaService.update(categoria).subscribe(
      categoria => this.actionsForSuccess(categoria),
      error => this.actionsForError(error)
    )
  }

  private actionsForSuccess(categoria: Categoria){
    toastr.success("Solicitação processada com sucesso");
    this.router.navigateByUrl("categorias", {skipLocationChange: true}).then(
      () => this.router.navigate(["categorias", categoria.id, "edit"])
    );
  }

  private actionsForError(error){
    toastr.error("Falha ao efetuar a ação");

    this.submittingForm = false;
  }

}
