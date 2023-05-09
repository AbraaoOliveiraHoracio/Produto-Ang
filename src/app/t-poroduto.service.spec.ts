import { TestBed } from '@angular/core/testing';

import { TPorodutoService } from './t-poroduto.service';

describe('TPorodutoService', () => {
  let service: TPorodutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TPorodutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
