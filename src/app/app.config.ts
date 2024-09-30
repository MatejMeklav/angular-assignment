import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { DoctorDetailsPageTitleStrategy } from './features/doctors/pages/doctor-details/DoctorDetailsPageTitleStrategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: TitleStrategy, useClass: DoctorDetailsPageTitleStrategy },
    provideHttpClient(withInterceptors([apiInterceptor])),
  ],
};
