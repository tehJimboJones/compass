import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compass-line',
  templateUrl: './compass-line.component.html',
  styleUrls: ['./compass-line.component.css']
})
export class CompassLineComponent implements OnInit {

  @Input() angle!: number;
  

  constructor() { }

  ngOnInit() {
  }

}
