import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { NgModule } from '@angular/core';
import { OrderComponent } from './pages/order/order.component';

export const routes: Routes = [
    { path : 'product', component: ProductComponent },
    { path : 'order', component: OrderComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }
