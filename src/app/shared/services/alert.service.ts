import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from '../interfaces';

@Injectable()
export class AlertService {
  public alert$ = new Subject<Alert>();
  public texts: { [key: string]: string } = {
    login: 'You was succesfully logged in, have fun!',
    logout: 'You have been logged out, to use this platform, please login',
  };

  success(text: string) {
    this.alert$.next({ type: 'success', text });
  }
  warning(text: string) {
    this.alert$.next({ type: 'warning', text });
  }
  danger(text: string) {
    this.alert$.next({ type: 'danger', text });
  }
}
