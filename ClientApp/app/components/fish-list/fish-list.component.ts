import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish-list',
  templateUrl: './fish-list.component.html'
})
export class FishListComponent implements OnInit {
  fishList = ["Angel", "Angler", "Anthias", "Basslet", "Blennies", "Boxfish", 
  "Butterflyfish", "Cardinalfish", "Chromis", "Clownfish", "Damselfish", "Dartfish",
  "Dottyback", "Dottyback", "Dragonetes", "Eels", "Filefish", "Foxface", "Gobies", 
  "Groupers", "Grunts", "Hawkfish", "Hogfish", "Jawfish", "Lionfish",
  "Pipefish", "Puffers", "Rays", "Scorpions", "Seahorses", "Sharks", "Squirrellfish",
  "Tangs", "Triggerfish", "Wrasse", "Misc. Fish"];
  constructor() { }

  ngOnInit() {
  }

}
