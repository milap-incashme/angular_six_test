import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products/products.component';

//import { ProductlogicService } from './productlogic.service';
import { AddProductModelComponent } from './add-product-model/add-product-model.component';
import { AddProductTemplateComponent } from './add-product-template/add-product-template.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
{path: '', component: ProductsComponent},
{path: 'products', component: ProductsComponent},
{path: 'product-list', component : ProductsComponent},
{path: 'add-product-template', component : AddProductTemplateComponent },
{path: 'add-product-model', component: AddProductModelComponent},
{path: 'products/:id', component: ProductDetailComponent},
];

//CommonModule,
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
