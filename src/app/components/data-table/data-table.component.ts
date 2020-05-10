import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DataTableDialogComponent } from '../data-table-dialog/data-table-dialog.component';
import { BNeedService } from 'src/app/shared/services/bneeds.service';
import { BusinessNeed } from 'src/app/shared/interfaces';
import { AlertService } from 'src/app/shared/services/alert.service';

// const ELEMENT_DATA: BusinessNeed[] = [
//   {
//     rowNum: '1',
//     needName: 'Hydrogen',
//     yearStart: '2012',
//     projectNum: '201',
//     justification: 'OWN_INITIATIVE',
//   },
//   {
//     rowNum: '2',
//     needName: 'Helium',
//     yearStart: '2012',
//     projectNum: '202',
//     justification: 'INDIVIDUAL_DOC',
//   },
//   {
//     rowNum: '3',
//     needName: 'Lithium',
//     yearStart: '2012',
//     projectNum: '2041',
//     justification: 'RECOMMENDATIONS',
//   },
//   {
//     rowNum: '4',
//     needName: 'Beryllium',
//     yearStart: '2012',
//     projectNum: '20341',
//     justification: 'RECOMMENDATIONS',
//   },
//   {
//     rowNum: '5',
//     needName: 'Boron',
//     yearStart: '2012',
//     projectNum: '212301',
//     justification: 'OWN_INITIATIVE',
//   },
//   {
//     rowNum: '6',
//     needName: 'Carbon',
//     yearStart: '2012',
//     projectNum: '434201',
//     justification: 'INDIVIDUAL_DOC',
//   },
//   {
//     rowNum: '7',
//     needName: 'Nitrogen',
//     yearStart: '2012',
//     projectNum: '625601',
//     justification: 'RECOMMENDATIONS',
//   },
//   {
//     rowNum: '8',
//     needName: 'Oxygen',
//     yearStart: '2012',
//     projectNum: '2101',
//     justification: 'INDIVIDUAL_DOC',
//   },
//   {
//     rowNum: '9',
//     needName: 'Fluorine',
//     yearStart: '2012',
//     projectNum: '1201',
//     justification: 'RECOMMENDATIONS',
//   },
//   {
//     rowNum: '10',
//     needName: 'Neon',
//     yearStart: '2012',
//     projectNum: '7201',
//     justification: 'RECOMMENDATIONS',
//   },
//   {
//     rowNum: '11',
//     needName: 'Sodium',
//     yearStart: '2012',
//     projectNum: '20231',
//     justification: 'OWN_INITIATIVE',
//   },
//   {
//     rowNum: '12',
//     needName: 'Magnesium',
//     yearStart: '2012',
//     projectNum: '654201',
//     justification: 'OWN_INITIATIVE',
//   },
//   {
//     rowNum: '13',
//     needName: 'Aluminum',
//     yearStart: '2012',
//     projectNum: '12201',
//     justification: 'INDIVIDUAL_DOC',
//   },
//   {
//     rowNum: '14',
//     needName: 'Silicon',
//     yearStart: '2012',
//     projectNum: '20101',
//     justification: 'RECOMMENDATIONS',
//   },
//   {
//     rowNum: '15',
//     needName: 'Phosphorus',
//     yearStart: '2012',
//     projectNum: '12201',
//     justification: 'RECOMMENDATIONS',
//   },
//   {
//     rowNum: '16',
//     needName: 'Sulfur',
//     yearStart: '2012',
//     projectNum: '456201',
//     justification: 'OWN_INITIATIVE',
//   },
//   {
//     rowNum: '17',
//     needName: 'Chlorine',
//     yearStart: '2012',
//     projectNum: '12201',
//     justification: 'INDIVIDUAL_DOC',
//   },
//   {
//     rowNum: '18',
//     needName: 'Argon',
//     yearStart: '2012',
//     projectNum: '24501',
//     justification: 'OWN_INITIATIVE',
//   },
//   {
//     rowNum: '19',
//     needName: 'Potassium',
//     yearStart: '2012',
//     projectNum: '45201',
//     justification: 'OWN_INITIATIVE',
//   },
//   {
//     rowNum: '20',
//     needName: 'Calcium',
//     yearStart: '2012',
//     projectNum: '44201',
//     justification: 'INDIVIDUAL_DOC',
//   },
// ];

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
    'projectNum',
    'justification',
    'actions',
  ];
  data: BusinessNeed[];
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

  openDialog(data): void {
    const dialogRef = this.dialog.open(DataTableDialogComponent, {
      width: '300px',
      data,
    });

    dialogRef.afterClosed().subscribe((id) => {
      if (id) {
        this.needService.remove(id).subscribe(() => {
          this.dataSource.data = this.data.filter((value) => value.id !== id);
          this.alertService.success('Need was succesfully deleted');
        });
      }
    });
  }

  ngOnInit() {
    this.needService.getAll().subscribe((value) => {
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
