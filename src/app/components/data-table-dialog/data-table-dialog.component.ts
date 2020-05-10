import { Component, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BusinessNeed } from 'src/app/shared/interfaces';
import { BNeedService } from 'src/app/shared/services/bneeds.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-data-table-dialog',
  templateUrl: './data-table-dialog.component.html',
  styleUrls: ['./data-table-dialog.component.scss'],
})
export class DataTableDialogComponent {
  constructor(
    public dialog: MatDialogRef<DataTableDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BusinessNeed
  ) {}

  closeModal() {
    this.dialog.close();
  }

  deleteElement(id) {
    this.dialog.close(id);
  }
}
