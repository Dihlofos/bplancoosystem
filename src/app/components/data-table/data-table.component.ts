import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BNeedService } from 'src/app/shared/services/bneeds.service';
import { BusinessNeed } from 'src/app/shared/interfaces';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CloseDialogComponent } from '../close-dialog/close-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  //Columns for preview table
  displayedColumns: string[] = [
    'rowNum',
    'needName',
    'yearStart',
    'justification',
    'actions',
  ];
  data: BusinessNeed[];
  editData: BusinessNeed;
  dataSource: MatTableDataSource<BusinessNeed>;

  //Sorting on
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  //Paginator on
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private needService: BNeedService,
    private alertService: AlertService
  ) {}

  openCloseDialog(data): void {
    const closeDialogRef = this.dialog.open(CloseDialogComponent, {
      width: '300px',
      data,
    });

    closeDialogRef.afterClosed().subscribe((id) => {
      if (id) {
        this.needService.remove(id).subscribe(() => {
          this.dataSource.data = this.data.filter((value) => value.id !== id);
          this.alertService.success('Need was succesfully deleted');
        });
      }
    });
  }

  openEditDialog(id): void {
    this.needService.getById(id).subscribe((value) => {
      const editDialogRef = this.dialog.open(EditDialogComponent, {
        width: '700px',
        height: 'calc(100% - 50px)',
        data: {
          ...value,
          id,
        },
      });

      editDialogRef.afterClosed().subscribe((newEl) => {
        this.needService.update(newEl).subscribe((newValue) => {
          this.dataSource.data = this.data.map((el) => {
            if (el.id === newEl.id) return newEl;
            return el;
          });
          this.alertService.success('Need was succesfully updated!');
        });
      });
    });
  }

  ngOnInit() {
    this.needService.getPreview().subscribe((value) => {
      this.data = value;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
