import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  addedProducs = [];
  isLoading: any;
  constructor(private httpRequest: HttpClient) { }
  private baseUrl = 'https://www.mocky.io/v2/5eda4003330000740079ea60 ';

  getProducts = () => {
    return this.httpRequest.get(this.baseUrl);
    }
    setLoader = (status) => {
      this.isLoading = status;
    }
    getLoader = () => {
     return this.isLoading;
    }

  setAddedProducts(product) {

    const isProduct = _.find(this.addedProducs, function(addedProduct) {
      return addedProduct.id ===  product.id;
   });
    if (!isProduct) {
     this.addedProducs.push(product);
   } else {
     if (product.slectedQuantity === 0) {
       _.remove(this.addedProducs, function(products) {
         return products.id === product.id;
       });
     }
   }
  }
  getAddedProduct() {
    if (this.addedProducs) {
      return this.addedProducs;
    }
  }
  getAddedProductsCount() {
    if (this.addedProducs) {
      return this.addedProducs.length;
    }
  }

  getTotalAmount() {
    if (this.addedProducs) {
      return _.sumBy(this.addedProducs, function(product) { return product.yourPrice; });
    }
  }
}
