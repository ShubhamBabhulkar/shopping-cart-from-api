import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Input('product') product;
  quantity: any;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }
  addQuantity = (product) => {
    product.slectedQuantity++;
    this.addToCart(product);
  }
  removeQuantity = (product) => {
    product.slectedQuantity--;
    this.addToCart(product);
  }

  addToCart = (product) => {
    product.yourPrice = product.price * product.slectedQuantity;
    this.productService.setAddedProducts(product);
  }
}
