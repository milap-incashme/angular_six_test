import { MockData } from './mock-product-data';
import { Injectable } from '@angular/core';
import { Product } from './product';

//import { Observable  } from 'rxjs';
//import { of } from 'rxjs';

//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { catchError, map, tap } from 'rxjs/operators';

//import { Observable } from 'rxjs/Observable';
//import { of } from 'rxjs/observable/of';
/*
import { Observable, Subject } from 'rxjs';
//import { Observable } from 'rxjs ';
import { of } from 'rxjs';
//import { of } from 'rxjs/observable/of';
//import { Observable, of } from 'rxjs';
//import { Observable } from "rxjs";
//import { of } from "rxjs/operators";
*/

@Injectable({
  providedIn: 'root'
})

export class ProductlogicService {
	
	productsUrl = 'api/products';
	
	products: Product[] = [];
	
	constructor() {
		this.products = MockData.Products;
	}
	
	
	getProducts(): Product[] {
		return this.products;
	}
	
/*
	getProducts():  Observable<Product[]>{
		return of(this.products);
	}
	*/
	addProduct(product: Product) {
		this.products.push(product);
	}	
	
	getProduct(id: number) {
		return this.products.find( p => p.id === id);
	}

	/*
	getProduct(id: number): Observable<Product> {
		return of(this.products.find( p => p.id === id));
	}	
	*/
	
	removeProduct(product: Product) {
		let index = this.products.indexOf(product);
		if (index !== -1) {
			this.products.splice(index, 1);
		}
	}
}
