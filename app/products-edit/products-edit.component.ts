import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit {
  paramQuery ='';
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data  => {
      this.paramQuery = data.id2;
      });
  }
   

  ngOnInit(): void {
   
  }

}
