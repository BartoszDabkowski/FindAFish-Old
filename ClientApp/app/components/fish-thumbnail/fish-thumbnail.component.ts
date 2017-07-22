import { Fish } from './../../models/fish';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fish-thumbnail',
  templateUrl: './fish-thumbnail.component.html',
  styleUrls: ['./fish-thumbnail.component.css']
})
export class FishThumbnailComponent implements OnInit {
  @Input('fish') fish : Fish;

  constructor() { }

  ngOnInit() {
  }

}
