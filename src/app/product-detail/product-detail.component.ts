import { ProductI } from './../models/product';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  product:ProductI
  loading: boolean = true;

  constructor(private route:ActivatedRoute, private service:ProductsService) { }

  ngOnInit() {
    this.route.paramMap.switchMap(
      params=> {
        this.loading = true;
        const id = +params.get('id');
        return this.service.getProductById( id );
      }
    ).subscribe(
      product=> {
        this.loading = false;
        this.product = product
      }
    );
  }

}
