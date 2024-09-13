import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Order } from '../../_model/order';
import { OrderService } from '../../_service/order.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [RouterModule, MaterialModule, HttpClientModule],
  providers: [OrderService],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {


  displayedColumns = ['Id', 'orderDate', 'shipName', 'shipAddress', 'shipCity', 'shipCountry', 'customerId', 'employeeId', 'acciones'];
  dataSource!: MatTableDataSource<Order>;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  countReg!: number;
  message!: string;

  order!: Order;

  constructor(private orderService: OrderService, private snackChar: MatSnackBar) {}

  ngOnInit(): void {
    this.paginar();
  }

  applyFilter(filter: string) {

  }


  paginar(e?: any) {

    let pageIndex = 1
    let pageSize = 10;

    if (e != null) {
      pageIndex = e.pageIndex;
      pageSize = e.pageSize;
    }

    this.orderService.listPageable(pageIndex, pageSize).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
      (error) => {
        if (error.status === 401) {
          this.message = 'Error: Acceso no autorizado';
        } else {
          this.message = 'Error al cargar productos.';
        }

        this.snackChar.open(error.status, this.message, {
          duration: 2000
        });
      }
    );

  }


  openDialog() {

  }

}
