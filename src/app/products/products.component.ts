//import { MockData }    from '../mock-product-data';
import { ProductlogicService } from '../productlogic.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	products: Product[] = [];

/*
	constructor() { 
		this.products = MockData.Products;
	}
*/
	
	constructor(public productlogicService: ProductlogicService) { 
		this.products = productlogicService.getProducts();
	}

	ngOnInit() {
		
	}

	/*
	deleteProduct(product: Product) {
		let index = this.products.indexOf(product);
		if (index !== -1) 
		{
			this.products.splice(index, 1);
		}
	}
	*/
	
	deleteProduct(product: Product) {
		this.productlogicService.removeProduct(product);
		this.products = this.productlogicService.getProducts();
	}


}
