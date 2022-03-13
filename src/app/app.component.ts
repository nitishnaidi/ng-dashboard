import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isHomeClicked = 'default';

  handleHomeClickEvent(value: string) {
    this.isHomeClicked = value;
  }
}
