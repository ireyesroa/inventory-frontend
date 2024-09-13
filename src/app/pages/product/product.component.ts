import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../_model/product';
import { ProductService } from '../../_service/product.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, MaterialModule, HttpClientModule, ProductDialogComponent],
  providers: [ProductService],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  displayedColumns = ['Id', 'nombre', 'sku', 'stock', 'precio', 'categoria', 'proveedor'];
  dataSource!: MatTableDataSource<Product>;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  countReg!: number;
  message!: string;
  product!: Product;

  constructor(private productService: ProductService, private snackChar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.listProduct();
  }


  listProduct() {
    this.paginar();
  }


  applyFilter(filter: string) {
    filter = filter.trim();
    filter = filter.toLowerCase();
    this.dataSource.filter = filter;
  }


  paginar(e?: any) {
    let pageIndex = 1
    let pageSize = 10;

    if (e != null) {
      pageIndex = e.pageIndex;
      pageSize = e.pageSize;
    }

    this.productService.listPageable(pageIndex, pageSize).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
      (error) => {
        if (error.status === 401) {
          this.message = 'Error: Acceso no autorizado';
        } else {
          this.message = 'Error al cargar las ordenes.';
        }

        this.snackChar.open(error.status, this.message, {
          duration: 2000
        });
      }
    );
  }

  openDialog() {
    this.product = new Product();    
    this.dialog.open(ProductDialogComponent, {
      data: this.product
    });
  }

}
