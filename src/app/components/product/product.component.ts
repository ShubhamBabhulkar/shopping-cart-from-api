import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product') product;
  slectedQuantity = 0;
  constructor(
    private productService: ProductService
    ) { }

  ngOnInit() {
  }

  addQuantity = () => {
    this.slectedQuantity++;
    this.addToCart(this.product);
  }
  removeQuantity = () => {
    this.slectedQuantity--;
    this.addToCart(this.product);
  }

  addToCart = (product) => {
    product.slectedQuantity = this.slectedQuantity;
    product.yourPrice = product.price * product.slectedQuantity;
    this.productService.setAddedProducts(product);
  }
}
