import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DataTableDialogComponent } from '../data-table-dialog/data-table-dialog.component';

export interface BusinessNeed {
  rowNum: string;
  needName: string;
  yearStart: string;
  projectNum: string;
  justification:
    | 'OWN_INITIATIVE'
    | 'RECOMMENDATIONS'
    | 'INDIVIDUAL_DOC'
    | 'ANOTHER';
  procurementWay?:
    | 'SMALL'
    | 'PRICE_REQUEST'
    | 'PROPOSALS_REQUEST'
    | 'NON_ALTERNATIVE'
    | 'INTRAGROUP'
    | 'EXCLUSIVE_SUPPLIER';
  vendor?: string;
  groupSign?: 'NK' | 'EOS_IT' | 'OG' | 'RECOMMENDED' | 'EXCLUSIVE' | 'ANOTHER';
  macroRegion?:
    | 'MOSCOW'
    | 'CENTER'
    | 'SOUTH'
    | 'VOLGA_REGION'
    | 'URAL'
    | 'WEST_SIBERIAN'
    | 'EAST_SIBERIAN'
    | 'FAR_EAST';
  agreementSum?: string;
  vatRate?: 'VAT_0' | 'VAT_10' | 'VAT_18' | 'VAT_20';
  agreementDate?: string;
  agreementExecutionDate?: string;
  paymentTerm?: string;
  expensesType?: 'OPEX' | 'CAPEX';
  capexType?: 'MAINTAINING' | 'DEVELOPMENT';
  expenseItemForm21?: string;
  expenseItemDetails?: string;
  sectionItemForm21?: string;
  expenseItemFormEconomic?: string;
  informationSystem?: string;
  vendorName?: string;
  yearFinish?: string;
  planYear1?: string;
  planYear2?: string;
  planYear3?: string;
  planYear4?: string;
  planYear5?: string;
  responsibleComment?: string;
  nkComment?: string;
  agreementNum?: string;
  step2doc?: string;
  requestDoc?: string;
  businessEntity?: string;
}

const ELEMENT_DATA: BusinessNeed[] = [
  {
    rowNum: '1',
    needName: 'Hydrogen',
    yearStart: '2012',
    projectNum: '201',
    justification: 'OWN_INITIATIVE',
  },
  {
    rowNum: '2',
    needName: 'Helium',
    yearStart: '2012',
    projectNum: '202',
    justification: 'INDIVIDUAL_DOC',
  },
  {
    rowNum: '3',
    needName: 'Lithium',
    yearStart: '2012',
    projectNum: '2041',
    justification: 'RECOMMENDATIONS',
  },
  {
    rowNum: '4',
    needName: 'Beryllium',
    yearStart: '2012',
    projectNum: '20341',
    justification: 'RECOMMENDATIONS',
  },
  {
    rowNum: '5',
    needName: 'Boron',
    yearStart: '2012',
    projectNum: '212301',
    justification: 'OWN_INITIATIVE',
  },
  {
    rowNum: '6',
    needName: 'Carbon',
    yearStart: '2012',
    projectNum: '434201',
    justification: 'INDIVIDUAL_DOC',
  },
  {
    rowNum: '7',
    needName: 'Nitrogen',
    yearStart: '2012',
    projectNum: '625601',
    justification: 'RECOMMENDATIONS',
  },
  {
    rowNum: '8',
    needName: 'Oxygen',
    yearStart: '2012',
    projectNum: '2101',
    justification: 'INDIVIDUAL_DOC',
  },
  {
    rowNum: '9',
    needName: 'Fluorine',
    yearStart: '2012',
    projectNum: '1201',
    justification: 'RECOMMENDATIONS',
  },
  {
    rowNum: '10',
    needName: 'Neon',
    yearStart: '2012',
    projectNum: '7201',
    justification: 'RECOMMENDATIONS',
  },
  {
    rowNum: '11',
    needName: 'Sodium',
    yearStart: '2012',
    projectNum: '20231',
    justification: 'OWN_INITIATIVE',
  },
  {
    rowNum: '12',
    needName: 'Magnesium',
    yearStart: '2012',
    projectNum: '654201',
    justification: 'OWN_INITIATIVE',
  },
  {
    rowNum: '13',
    needName: 'Aluminum',
    yearStart: '2012',
    projectNum: '12201',
    justification: 'INDIVIDUAL_DOC',
  },
  {
    rowNum: '14',
    needName: 'Silicon',
    yearStart: '2012',
    projectNum: '20101',
    justification: 'RECOMMENDATIONS',
  },
  {
    rowNum: '15',
    needName: 'Phosphorus',
    yearStart: '2012',
    projectNum: '12201',
    justification: 'RECOMMENDATIONS',
  },
  {
    rowNum: '16',
    needName: 'Sulfur',
    yearStart: '2012',
    projectNum: '456201',
    justification: 'OWN_INITIATIVE',
  },
  {
    rowNum: '17',
    needName: 'Chlorine',
    yearStart: '2012',
    projectNum: '12201',
    justification: 'INDIVIDUAL_DOC',
  },
  {
    rowNum: '18',
    needName: 'Argon',
    yearStart: '2012',
    projectNum: '24501',
    justification: 'OWN_INITIATIVE',
  },
  {
    rowNum: '19',
    needName: 'Potassium',
    yearStart: '2012',
    projectNum: '45201',
    justification: 'OWN_INITIATIVE',
  },
  {
    rowNum: '20',
    needName: 'Calcium',
    yearStart: '2012',
    projectNum: '44201',
    justification: 'INDIVIDUAL_DOC',
  },
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  //Data is now hardcodedm nut will by given from backend
  displayedColumns: string[] = [
    'rowNum',
    'needName',
    'yearStart',
    'projectNum',
    'justification',
    'actions',
  ];
  data = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  //Sorting on
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  //Paginator on
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {}

  openDialog(data): void {
    const dialogRef = this.dialog.open(DataTableDialogComponent, {
      width: '250px',
      data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
