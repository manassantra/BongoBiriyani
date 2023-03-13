import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList: any;
  productCategoryList: any;
  producSubCategorytList: any;

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.getAllProduct();
    this.getAllProductCategory();
    this.getAllProductSubCategory();

  }

  getAllProduct(){
    this.productService.getAllProducts().subscribe(res=>{
      this.productList = res;
    });
  }

  getAllProductCategory(){
    this.productService.getAllProductCategory().subscribe(res=>{
      this.productCategoryList = res;
    });
  }

  getAllProductSubCategory(){
    this.productService.getAllProductSubCategory().subscribe(res=>{
      this.producSubCategorytList = res;
    });
  }
}
