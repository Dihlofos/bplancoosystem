import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BNeedService } from 'src/app/shared/services/bneeds.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})
export class CreatePageComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  message = '';

  constructor(
    private bneedsService: BNeedService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      rowNum: new FormControl(null, [Validators.required]),
      needName: new FormControl(null, [Validators.required]),
      yearStart: new FormControl(null, [Validators.required]),
      projectNum: new FormControl(null, [Validators.required]),
      justification: new FormControl(null, [Validators.required]),
    });
  }

  submit(): void {
    this.bneedsService.create(this.form.value).subscribe(() => {
      this.form.reset();
      this.alert.success('Post was created');
    });
  }
}
