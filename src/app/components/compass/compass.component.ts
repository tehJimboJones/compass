import { Place } from './../../model/place';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.scss']
})
export class CompassComponent implements OnInit, OnChanges {

  @Input() origin!: Place;
  @Input() destinations!: Place[];
  @Input() diameter: string = "200px";

  @ViewChild('compassDiv') compassDiv!: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === "destinations" || propName === "origin") {
        this.drawCompassLines()
      }
    }
  }

  drawCompassLines() {
    throw new Error('Method not implemented.');
  }

  eraseCompassLines() {
    this.compassDiv.nativeElement.childNodes
  }
}
