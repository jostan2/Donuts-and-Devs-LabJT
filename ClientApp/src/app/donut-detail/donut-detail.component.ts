import { Component, OnInit } from '@angular/core';

import { DonutDetail } from '../Interface/donut-detail';
import { DonutDevService } from '../donut-dev.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})

export class DonutDetailComponent implements OnInit {

  displayDonut:DonutDetail = {} as DonutDetail


  constructor(private donutService:DonutDevService, private router:ActivatedRoute) { }
  //private router provides access to info about a route associated with a component its used with.
  //used to extract information:
    // ?( in this case, maybe allowing this donut-detail to get the ID from the 
    // selected donut index and use it to show the rest of it's details?)

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    let id: number = Number(routeParams.get("id"));

    this.donutService.getOneDonut(id).subscribe(
      (result:DonutDetail) => {
        this.displayDonut = result;
        console.log(result);
        console.log(id);
      });
    }

}
