import { ProductI } from './../../models/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: ProductI;
  loading = true;

  constructor(private router: Router, private route: ActivatedRoute, private service: ProductsService) { }

  goToProducts() {
    this.router.navigate(['/products']);
  }

  ngOnInit() {
    this.route.paramMap.switchMap(
      params => {
        this.loading = true;
        const id = +params.get('id');
        return this.service.getProductById( id );
      }
    ).subscribe(
      product => {
        this.loading = false;
        this.product = product;
      }
    );
  }

}
