import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { CategoryService } from '../../_service/category.service';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MaterialModule, RouterModule, HttpClientModule],
  providers: [CategoryService],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

ngOnInit(): void {

  
}

}
