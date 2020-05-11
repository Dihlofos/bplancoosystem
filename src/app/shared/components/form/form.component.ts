import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BusinessNeed } from '../../interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  @Input() title = '';
  @Input() type = 'create';
  @Input() inputData: BusinessNeed;

  @Output() formSubmit: EventEmitter<BusinessNeed> = new EventEmitter<
    BusinessNeed
  >();

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      rowNum: new FormControl(this.checkIfHaveToEdit('rowNum'), [
        Validators.required,
      ]),
      needName: new FormControl(this.checkIfHaveToEdit('needName'), [
        Validators.required,
      ]),
      yearStart: new FormControl(this.checkIfHaveToEdit('yearStart'), [
        Validators.required,
      ]),
      justification: new FormControl(this.checkIfHaveToEdit('justification'), [
        Validators.required,
      ]),
      projectNum: new FormControl(this.checkIfHaveToEdit('projectNum')),
      procurementWay: new FormControl(this.checkIfHaveToEdit('procurementWay')),
      vendor: new FormControl(this.checkIfHaveToEdit('vendor')),
      groupSign: new FormControl(this.checkIfHaveToEdit('groupSign')),
      macroRegion: new FormControl(this.checkIfHaveToEdit('macroRegion')),
      vatRate: new FormControl(this.checkIfHaveToEdit('vatRate')),
      agreementSum: new FormControl(this.checkIfHaveToEdit('agreementSum')),
      agreementDate: new FormControl(this.checkIfHaveToEdit('agreementDate')),
      agreementExecutionDate: new FormControl(
        this.checkIfHaveToEdit('agreementExecutionDate')
      ),
      paymentTerm: new FormControl(this.checkIfHaveToEdit('paymentTerm')),
      expensesType: new FormControl(this.checkIfHaveToEdit('expensesType')),
      capexType: new FormControl(this.checkIfHaveToEdit('capexType')),
    });
  }

  checkIfHaveToEdit(key: string) {
    if (this.type === 'edit') return this.inputData[key];
    return null;
  }

  onSubmit(): void {
    if (this.type === 'edit') {
      this.formSubmit.emit({ ...this.form.value, id: this.inputData.id });
    } else {
      this.formSubmit.emit(this.form.value);
    }
  }
}
