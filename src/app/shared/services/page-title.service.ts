import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  getPageTitle(url: string): string {
    if (url === '/') {
      return 'Dashboard';
    } else if (url.includes('/doctor')) {
      return 'Doctor details';
    }

    return 'Dashboard';
  }
}
