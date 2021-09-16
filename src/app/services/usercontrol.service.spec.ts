import { TestBed } from '@angular/core/testing';

import { UsercontrolService } from './usercontrol.service';

describe('UsercontrolService', () => {
  let service: UsercontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
