import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle = 'Product Detail';
  product: IProduct = null;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {

  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle += `: ${id}`;
      this.productService.getProduct(id).subscribe({
        next: product => this.product = product,
        error: err => this.errorMessage = err
      });
    }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
