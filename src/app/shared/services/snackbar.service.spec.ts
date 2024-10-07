import { TestBed } from '@angular/core/testing';

import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
  let service: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackbarService],
    });
    service = TestBed.inject(SnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call api error snackbar to open', () => {
    spyOn(service, 'apiErrorSnackbar');
    service.apiErrorSnackbar();

    expect(service.apiErrorSnackbar).toHaveBeenCalled();
  });
});
