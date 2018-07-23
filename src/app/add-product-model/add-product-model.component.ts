import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';  


import { ProductlogicService } from '../productlogic.service';
import { Product }    from '../product';
  
	
@Component({
  selector: 'app-add-product-model',
  templateUrl: './add-product-model.component.html',
  styleUrls: ['./add-product-model.component.css']
})
export class AddProductModelComponent implements OnInit {

	formSubmitted = false;

	productTypes = ['Laptop', 'Mobile'];
	myForm: FormGroup;
	title: FormControl;
	modelName: FormControl;
	color: FormControl;
	productType: FormControl;
	brand: FormControl;
	price: FormControl;

	constructor(private productlogicService: ProductlogicService) { }
	
	addProduct(product: Product){
		this.productlogicService.addProduct(product);
		this.formSubmitted = true;
	}
	

  /*
  ngOnInit() {
	this.title = new FormControl();
	this.modelName = new FormControl();
	this.color = new FormControl();
	this.productType = new FormControl();
	this.brand = new FormControl();
	this.price = new FormControl();  
	  
	this.myForm = new FormGroup({
		'title': this.title,
		'modelName' : this.modelName,
		'productType' : this.productType,
		'color': this.color,
		'brand': this.brand,
		'price': this.price
	});	
  }
*/


	ngOnInit() {
		this.title = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]);
		this.modelName = new FormControl();
		this.color = new FormControl('', Validators.pattern('[a-zA-Z]*'));
		this.productType = new FormControl('', Validators.required);
		this.brand = new FormControl('', Validators.required);
		this.price = new FormControl('', [Validators.required, Validators.min(1)]);

		this.myForm = new FormGroup({
			'title': this.title,
			'modelName': this.modelName,
			'productType': this.productType,
			'color': this.color,
			'brand': this.brand,
			'price': this.price
		});
	}

}
