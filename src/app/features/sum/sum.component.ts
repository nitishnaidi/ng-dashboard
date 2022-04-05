import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sum',
  templateUrl: 'sum.component.html',
  styleUrls: ['sum.component.scss'],
})
export class SumComponent {
  @Input() a: number = 0;
  @Input() b: number = 0;

  @Output() sum = new EventEmitter<number>();

  add() {
    let c = this.a + this.b;
    this.sum.emit(c);
  }
}
