import { AzimuthService } from './services/azimuth/azimuth-service.service';
import { Place } from './model/place';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'compass';

  origin!: Place;
  destination!: Place;

  constructor(private as: AzimuthService) {}


}
