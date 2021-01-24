import { TestBed } from '@angular/core/testing';

import { AssetUrlService } from './asset-url.service';

describe('AssetUrlService', () => {
  let service: AssetUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
