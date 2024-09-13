import { Product } from './../../../_model/product';
import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '../product.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../../_service/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { Category } from '../../../_model/category';
import { Supplier } from '../../../_model/supplier';
import { CategoryService } from '../../../_service/category.service';
import { SupplierService } from '../../../_service/supplier.service';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [MaterialModule, RouterModule, ProductComponent, HttpClientModule],
  providers: [ProductService, CategoryService, SupplierService],
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.css'
})
export class ProductDialogComponent {

  product!: Product;
  message!: string;
  pictureName!: string;
  category!: Category;
  supplier!: Supplier;
  categories: Category[] = [];
  suppliers: Supplier[] = [];

  constructor(private dialogRef: MatDialogRef<ProductDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: Product,
    private productService: ProductService, private snackChar: MatSnackBar, private categoryService: CategoryService,
    private supplierService: SupplierService) { }


  ngOnInit(): void {
    this.product = new Product();
    this.product.picture = 'imagen.jpg';    

    this.categoryService.listById(1).subscribe((data) => {
      this.categories[0] = data;
    });

    this.supplierService.listById(1).subscribe((data) => {
      this.suppliers[0] = data;
    });
  }

  create() {
    this.productService.createProduct(this.product).subscribe((data) => {
      this.dialogRef.close();
    },
      (error) => {
        this.message = 'Error al crear el producto.';
        this.snackChar.open(error.status, this.message, {
          duration: 2000          
        });
      }
    );    
  }

  cancel() {
    this.dialogRef.close();
  }

  selectFile(e: Event) {

  }


}
