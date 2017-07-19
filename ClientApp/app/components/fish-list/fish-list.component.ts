import { FishListService } from './fish-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html'
})
export class FishListComponent implements OnInit {
  fishList = [];

  constructor(service : FishListService) { 
    this.fishList = service.getFish();
  }

  ngOnInit() {
  }

}
