import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../main/dialog/dialog.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // const subject = new Subject<number>();
   

openDialog() {
  this.dialog.open(DialogComponent, {
    width: '30%'
  }).afterClosed().subscribe(val => {
    if (val === 'save') {
      // this.getAllProducts();
    }
  });
}
}
