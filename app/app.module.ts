import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TasksComponent } from './tasks/tasks.component';
import { TodoModule } from './todo/todo.module';
import { HighlightPipe } from './highlight.pipe';
import { LocationStrategy , HashLocationStrategy} from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HighlightPipe,
    ProductsComponent,
    ProductsViewComponent,
    ProductsEditComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    FormsModule,
  ],
  providers: [
    {provide:LocationStrategy , useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
