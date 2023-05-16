
import { TPD } from '../TPD';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TPorodutoService } from '../t-poroduto.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tclient',
  templateUrl: './tclient.component.html',
  styleUrls: ['./tclient.component.css']
})
export class TClientComponent implements OnInit {
  produto:TPD []= [];
  formGroupProduto : FormGroup;
  isEditing : boolean = false;

  constructor(private tporodutoService: TPorodutoService, private formBuilder: FormBuilder){

    this.formGroupProduto = formBuilder.group({

    id : [''],
    name : [''],
    valor : [''],
     peso : [''],
    quantidade : [''],
    data : [''],

    });




  }
  ngOnInit(): void {
    this.loadProduto();
  }
  loadProduto(){
    this.tporodutoService.getTPD().subscribe({
      next : data => this.produto= data
    });

  }
  save(){
    if(this.isEditing){
      this.tporodutoService.update(this.formGroupProduto.value).subscribe({
        next: ()=>{
          this.loadProduto();
          this.formGroupProduto.reset();
          this.isEditing = false;
        }
      }
      );

    }
    else{
      this.tporodutoService.save(this.formGroupProduto.value).subscribe({
      next: data =>{
        this.produto.push(data);
        this.formGroupProduto.reset();

      }
    }
    );
  }
    }

  edit(produto:TPD){
    this.formGroupProduto.setValue(produto);
    this.isEditing = true;

  }

  delete(produto:TPD){
    this.tporodutoService.delete(produto).subscribe({
      next: () => this.loadProduto()
    }
    );

  }
  clear(){
    this.formGroupProduto.reset();
    this.isEditing = true;


}


}
