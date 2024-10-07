import { TestBed } from '@angular/core/testing';

import { PageTitleService } from './page-title.service';

describe('PageTitleService', () => {
  let service: PageTitleService;
  const homeRoute = '/';
  const doctorDetailsRoute = '/doctor/1';
  const dummyRoute = '/404';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageTitleService],
    });
    service = TestBed.inject(PageTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return "Dashboard" for root URL "/"', () => {
    const title = service.getPageTitle(homeRoute);
    expect(title).toBe('Dashboard');
  });

  it('should return "Doctor details" for URL containing "/doctor/1"', () => {
    const title = service.getPageTitle(doctorDetailsRoute);
    expect(title).toBe('Doctor details');
  });

  it('should return "Dashboard" for unknown URLs', () => {
    const title = service.getPageTitle(dummyRoute);
    expect(title).toBe('Dashboard');
  });
});
