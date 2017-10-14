import { TestBed, inject } from '@angular/core/testing';

import { FetchPostsService } from './fetch-posts.service';

describe('FetchPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchPostsService]
    });
  });

  it('should be created', inject([FetchPostsService], (service: FetchPostsService) => {
    expect(service).toBeTruthy();
  }));
});
