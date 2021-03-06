import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { Subscription } from 'rxjs';
import { Animations } from '../../animations';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [Animations.fadeInOut],
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() delay = 3000;

  public text: string = '';
  public type = 'success';
  aSub: Subscription;

  constructor(private alrtService: AlertService) {}

  ngOnInit(): void {
    this.aSub = this.alrtService.alert$.subscribe((alert) => {
      this.text = alert.text;
      this.type = alert.type;
      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.text = '';
      }, this.delay);
    });
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
