import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

searchProduct(value: string) {
  console.log(value);
    this.router.navigate(['/searchgrocery'], { queryParams: { search: value} });
  }
  ngOnInit() {
  }

}
