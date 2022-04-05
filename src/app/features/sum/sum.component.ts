import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sum',
  templateUrl: 'sum.component.html',
  styleUrls: ['sum.component.scss'],
})
export class SumComponent {
  @Input() a: number | undefined;
  @Input() b: number | undefined;

  @Output() sum = new EventEmitter<any>();

  add() {
    let obj: any = {};
    if (!this.a) {
      obj.field = 'a';
      this.sum.emit(obj);
    } else if (!this.b) {
      obj.field = 'b';
      this.sum.emit(obj);
    } else {
      let c = this.a + this.b;
      obj.sum = c;
      this.sum.emit(obj);
    }
  }
}
