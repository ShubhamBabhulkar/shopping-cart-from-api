import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: {};

  constructor(private productService: ProductService) { }

ngOnInit() {
  this.getProducts();
}
getProducts = () => {
  this.productService.setLoader(true);
  this.productService.getProducts().subscribe( allProducts => {
      this.products = allProducts['data'];
      this.productService.setLoader(false);
    }, error => {
      this.productService.setLoader(false);
      console.log(error.message);
    });
}

}
