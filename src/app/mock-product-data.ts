import { Component, OnInit } from '@angular/core';

import { Product }    from './product';


export class MockData {
		public static Products: Product[] = [
		{
			'id': 11,
			'title': 'OPPO F5 Youth (Gold, 32 GB)',
			'modelName': 'F5 Youth',
			'color': 'Gold',
			'productType': 'Mobile',
			'brand': 'OPPO1',
			'price': 16990
		},
		{
			'id': 12,
			'title': 'Dell Inspiron 7000',
			'modelName': 'Inspiron',
			'color': 'Gray',
			'productType': 'Laptop',
			'brand': 'DELL',
			'price': 59990
		},
		{
			'id': 13,
			'title': 'HP',
			'modelName': 'Inspiron',
			'color': 'Gray',
			'productType': 'Laptop',
			'brand': 'DELL',
			'price': 59990
		}		
	];
}
	