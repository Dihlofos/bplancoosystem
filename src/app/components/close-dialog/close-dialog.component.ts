import { Component, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BusinessNeed } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-close-dialog',
  templateUrl: './close-dialog.component.html',
})
export class CloseDialogComponent {
  constructor(
    public dialog: MatDialogRef<CloseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BusinessNeed
  ) {}

  closeModal() {
    this.dialog.close();
  }

  deleteElement(id) {
    this.dialog.close(id);
  }
}
