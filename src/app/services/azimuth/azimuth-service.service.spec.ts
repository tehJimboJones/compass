/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AzimuthService } from './azimuth-service.service';

describe('Service: AzimuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AzimuthService]
    });
  });

  it('should ...', inject([AzimuthService], (service: AzimuthService) => {
    expect(service).toBeTruthy();
  }));
});
