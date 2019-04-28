import { TestBed } from '@angular/core/testing';

import { XboxapiService } from './xboxapi.service';

describe('XboxapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XboxapiService = TestBed.get(XboxapiService);
    expect(service).toBeTruthy();
  });
});
