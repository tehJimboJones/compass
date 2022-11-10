import { Coordinates } from './../../model/coordinates';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AzimuthService {
  readonly EARTH_RADIUS = 6371; //km

  constructor() {}

  public getDistance(origin: Coordinates, destination: Coordinates): number {
    let phi1 = origin.latitude;
    let phi2 = destination.latitude;

    let lambda1 = origin.longitude;
    let lambda2 = destination.longitude;

    let deltaPhi = phi2 - phi1;
    let deltaLambda = lambda2 - lambda1;

    let a1 = Math.pow(Math.sin(deltaPhi / 2), 2);
    let a2 =
      Math.cos(phi1) * Math.cos(phi2) * Math.pow(Math.sin(deltaLambda / 2), 2);
    let a = a1 + a2;

    let distance = 2 * this.EARTH_RADIUS * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return distance;
  }

  public getAzimuth(origin: Coordinates, destination: Coordinates): number {
    let phi1 = origin.latitude;
    let phi2 = destination.latitude;

    let lambda1 = origin.longitude;
    let lambda2 = destination.longitude;

    let deltaPhi = phi2 - phi1;
    let deltaLambda = lambda2 - lambda1;

    let azimuth = Math.atan2(
      Math.sin(deltaLambda) * Math.cos(phi2),
      Math.cos(phi1) * Math.sin(phi2) - Math.sin(phi1) * Math.cos(phi2) * Math.cos(deltaLambda)
    );

    return azimuth;
  }
}
