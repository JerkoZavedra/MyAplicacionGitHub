import { TestBed } from '@angular/core/testing';

import { DbserviceService } from './dbservice.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite';

describe('DbserviceService', () => {
  let service: DbserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SQLite]
    });
    service = TestBed.inject(DbserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
