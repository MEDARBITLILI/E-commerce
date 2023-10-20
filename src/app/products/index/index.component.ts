import { Component ,ViewChild,OnInit} from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  products: Products[] = [];
  columns: string[] = ['imageart','designation','marque','prix'];

constructor(public productsService: ProductsService) { }


ngOnInit(): void {
this.productsService.getAll().subscribe((data: Products[])=>{
this.products = data;
})
}
deleteProduct(_id:object){
  this.productsService.delete(_id).subscribe(res => {
  this.products = this.products.filter(item => item._id !== _id);
  console.log('Post deleted successfully!');
  })
  }

}
