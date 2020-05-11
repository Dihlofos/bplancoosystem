import { Component, OnInit } from '@angular/core';
import { BusinessNeed } from 'src/app/shared/interfaces';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Router } from '@angular/router';
import { BNeedService } from 'src/app/shared/services/bneeds.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})
export class CreatePageComponent implements OnInit {
  constructor(
    private bneedsService: BNeedService,
    private alert: AlertService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onCreate(bneed: BusinessNeed): void {
    this.bneedsService.create(bneed).subscribe(() => {
      this.alert.success('Post was created');
      this.route.navigate(['/']);
    });
  }
}
