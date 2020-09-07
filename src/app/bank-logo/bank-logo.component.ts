import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-bank-logo',
  templateUrl: './bank-logo.component.html',
  styleUrls: ['./bank-logo.component.scss']
})
export class BankLogoComponent {
  @Input() public id!: number;
}
