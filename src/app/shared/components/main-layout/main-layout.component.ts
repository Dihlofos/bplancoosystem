import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.services';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  constructor(
    public auth: AuthService,
    private router: Router,
    private alert: AlertService
  ) {}

  logout(event: Event): void {
    event.preventDefault();
    this.auth.logout();
    this.alert.warning(this.alert.texts.logout);
    this.router.navigate(['/admin']);
  }
}
