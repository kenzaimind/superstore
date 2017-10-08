import { Component, OnInit } from '@angular/core';
import { SelectedfruitsService } from '../auth/selectedfruits.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-toordal',
  templateUrl: './toordal.component.html',
  styleUrls: ['./toordal.component.css'],
  providers: [SelectedfruitsService]
})
export class ToordalComponent implements OnInit {
  selectedfruits: Array<any>;
  constructor(private selectedfruitsService: SelectedfruitsService, private _router: Router) {
    var dal = {
      img: '../assets/image/14.png',
      item: 'tool-dal',
      amount: 200
    }
    this.selectedfruitsService.add(dal)
      .subscribe(data => {
        console.log('success' + data)
        //this.selectedfruits.push(fruit);
        this._router.navigate(['/groceries']);
      })
  }
  ngOnInit() {
  }
}