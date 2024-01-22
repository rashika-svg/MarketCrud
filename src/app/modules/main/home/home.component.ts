import { ApiService } from 'src/app/core/services/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private api: ApiService,
    private dialog: MatDialog
    ) { }

  displayedColumns: string[] = ['productName', 'category', 'price', 'date', 'freshness','comment','image','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.getAllProducts();
  }

  editProduct(row:any){
    console.log(row)
    this.dialog.open(DialogComponent,{
          width:'30%',
          data:row
        }).afterClosed().subscribe(val=>{
          if(val==='update'){
            this.getAllProducts();
          }
        })
  }

  deleteProducts(id:number){
    this.api.deleteProduct(id)
    .subscribe({
      next:(res)=> {
        alert("Product deleted");
        this.getAllProducts();
      },
      error: () => {
        alert("Error while deleting the records");
      }
    })
  }
  
  getAllProducts() {
    this.api.getProduct().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert("Error while fetching the records");
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
