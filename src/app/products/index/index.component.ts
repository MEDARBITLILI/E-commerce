import { Component ,ViewChild,OnInit} from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  products: any;
  columns: string[] = ['imageart','designation','marque','prix'];

  constructor(public productsService: ProductsService) { }
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit(): void {
  this.productsService.getAll().subscribe((data: Products[])=>{
  this.products = new MatTableDataSource<any>(data);
  this.products.paginator = this.paginator;
})
}
@ViewChild(MatSort, { static: true }) sort!: MatSort;

deleteProduct(_id:object){
  this.productsService.delete(_id).subscribe(res => {
  console.log(res);
  const data = this.products.filteredData.filter((item: { _id: object;
  })=> item._id !== _id)
  this.products = new MatTableDataSource<any>(data)
  this.products.paginator = this.paginator;
  this.products.sort = this.sort;
  })
}
filter(event: Event) {
  const filter = (event.target as HTMLInputElement).value;
  this.products.filter = filter.trim().toLowerCase();
  }
} 

