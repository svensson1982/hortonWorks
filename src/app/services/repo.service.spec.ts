import { TestBed, inject } from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RepoService } from './repo.service';

describe('RepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoService],
        imports: [
            HttpClientTestingModule
        ],
    });
  });

  it('should be created', inject([RepoService], (service: RepoService) => {
    expect(service).toBeTruthy();
  }));
});
