import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { ProductComponent } from './pages/product/product.component';
import { RouterModule } from '@angular/router';
import { ProductDialogComponent } from './pages/product/product-dialog/product-dialog.component';
import { CategoryComponent } from './pages/category/category.component';
import { SupplierComponent } from './pages/supplier/supplier.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    
  ],
    imports: [
      HttpClientModule,
      MaterialModule,
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule,
      ProductComponent,
      ProductDialogComponent,
      CategoryComponent,
      SupplierComponent
    ],  

    providers: [],

  })
  export class AppModule { }