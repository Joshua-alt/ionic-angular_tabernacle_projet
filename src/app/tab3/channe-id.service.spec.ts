import { TestBed } from '@angular/core/testing';

import { ChanneIDService } from './channe-id.service';

describe('ChanneIDService', () => {
  let service: ChanneIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChanneIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
