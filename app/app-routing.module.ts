import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TasksComponent} from './tasks/tasks.component';
import {ProductsComponent} from './products/products.component';
import {ProductsEditComponent} from './products-edit/products-edit.component';
import {ProductsViewComponent} from './products-view/products-view.component';
const routes: Routes = [
  {path:"learning" , component:TasksComponent},
  {path:"products" , component:ProductsComponent},
  {path:"products-edit/:id/:id2" , component:ProductsEditComponent},
  {path:"products-view" , component:ProductsViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
