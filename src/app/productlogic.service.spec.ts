import { TestBed, inject } from '@angular/core/testing';

import { ProductlogicService } from './productlogic.service';

describe('ProductlogicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductlogicService]
    });
  });

  it('should be created', inject([ProductlogicService], (service: ProductlogicService) => {
    expect(service).toBeTruthy();
  }));
});
