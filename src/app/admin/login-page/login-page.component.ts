import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/shared/services/auth.services';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  message = '';

  constructor(
    public auth: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Please login to visit page';
      } else if (params['authFailed']) {
        this.message = 'Сессия истекла. Введите данные заново';
      }
    });
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.auth.login(user).subscribe(
      () => {
        this.alertService.success(this.alertService.texts.login);
        this.form.reset();
        this.router.navigate(['/']);
        this.submitted = false;
      },
      () => {
        this.submitted = false;
      }
    );
  }
}
