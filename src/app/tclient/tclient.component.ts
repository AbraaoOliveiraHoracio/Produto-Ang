
import { TPD } from '../TPD';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TPorodutoService } from '../t-poroduto.service';

@Component({
  selector: 'app-tclient',
  templateUrl: './tclient.component.html',
  styleUrls: ['./tclient.component.css']
})
export class TClientComponent implements OnInit {
  produto:TPD []= [];
  constructor(private tporodutoService: TPorodutoService){

  }
  ngOnInit(): void {
    this.loadProduto();
  }
  loadProduto(){
    this.tporodutoService.getTPD().subscribe({
      next : data => this.produto= data
    });

  }



}
