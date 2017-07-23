import { Fish } from './../../models/fish';
import { FishListService } from './../fish-list/fish-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'fish-page',
  templateUrl: './fish-page.component.html',
  styleUrls: ['./fish-page.component.css']
})
export class FishPageComponent implements OnInit {
  fish: Fish;
  constructor(private route: ActivatedRoute, private service : FishListService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.fish = this.service.getFish(id);
    })
  }

}
