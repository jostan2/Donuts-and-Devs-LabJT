import { Component, OnInit } from '@angular/core';
import { DonutDevService } from '../donut-dev.service';
import { DonutList } from '../Interface/donut-list';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {

  donuts:DonutList[] = [];

  constructor(private donutDb:DonutDevService) {
    this.getDonutList();
    }

  ngOnInit(): void {
  }

  getDonutList()
  {
    this.donutDb.getDonutList().subscribe(
    (results:DonutList[]) => {
      this.donuts = results;
    })
  }

}
