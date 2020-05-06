import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.services';
import { Router } from '@angular/router';
import { AlertService } from './shared/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
