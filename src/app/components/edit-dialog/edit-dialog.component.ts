import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BusinessNeed } from 'src/app/shared/interfaces';
import { BNeedService } from 'src/app/shared/services/bneeds.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent {
  constructor(
    public dialog: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BusinessNeed
  ) {}

  closeModal() {
    this.dialog.close();
  }

  updateElement(newEL: BusinessNeed) {
    this.dialog.close(newEL);
  }
}
