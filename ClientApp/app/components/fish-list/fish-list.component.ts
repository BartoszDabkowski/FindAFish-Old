import { FishListService } from './fish-list.service';
import { Component, OnInit } from '@angular/core';
import { Fish } from "../../models/fish";

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html'
})
export class FishListComponent implements OnInit {
  fishList : Fish[];

  constructor(private service : FishListService) { 
    this.fishList = service.getFishList();
  }

  ngOnInit() {
  }

}
