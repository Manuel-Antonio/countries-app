/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PixabayService } from './pixabay.service';

describe('Service: Pixabay', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PixabayService]
    });
  });

  it('should ...', inject([PixabayService], (service: PixabayService) => {
    expect(service).toBeTruthy();
  }));
});
