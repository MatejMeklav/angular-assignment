import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router } from '@angular/router';
import { PageTitleService } from '../../../shared/services/page-title.service';

@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  pageTitle = 'Page Title';

  constructor(
    private router: Router,
    private PageTitleService: PageTitleService
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.pageTitle = this.PageTitleService.getPageTitle(event.url);
      }
    });
  }
}
