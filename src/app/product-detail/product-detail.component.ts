import { ProductlogicService } from '../productlogic.service';
import { Product }    from '../product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
	product: Product;
	constructor(private activatedRoute: ActivatedRoute, private location: Location, private productlogicService: ProductlogicService) { }

	ngOnInit() {
	  	let id = +this.activatedRoute.snapshot.paramMap.get('id');
		console.log('ID : ' + id );
		this.product = this.productlogicService.getProduct(id);
	}
  
	goBack() {
		this.location.back();
	}

}
