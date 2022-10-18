import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { randomInt } from 'crypto';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product : Product = { 
    id: 0,
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {

  }
   
  createProduct(): void {
    this.productService.create(this.product).subscribe( () => {
      this.productService.showMessage('Produto com susesso!')
      this.router.navigate(['products'])
    })
  }

  cancel(): void {
    this.router.navigate(['products'])
  }
  
}
