import { Component, OnInit } from '@angular/core';

import { Product }    from '../product';
import { ProductlogicService } from '../productlogic.service';

@Component({
  selector: 'app-add-product-template',
  templateUrl: './add-product-template.component.html',
  styleUrls: ['./add-product-template.component.css']
})
export class AddProductTemplateComponent implements OnInit {

  product: Product = new Product();
  formSubmitted = false;
  productTypes = ['Laptop', 'Mobile'];
  
  constructor(private productlogicService: ProductlogicService) { }
  ngOnInit() {}

  addProduct(){
	this.productlogicService.addProduct(this.product);
	this.formSubmitted = true;
  }

}
