import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Modal } from '../interfaces';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal/modal.component';

//поменить контент со строки на компонент (пока хз как)
@Injectable()
export class ModalService {
  public alert$ = new Subject<Modal>();

  //inject dialogs
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: { name: 'name', animal: 'animal' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  hide(content: string) {
    this.alert$.next({ show: false, content });
  }
}
