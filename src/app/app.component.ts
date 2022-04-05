import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  x=0; y=0; z=0;
  isHomeClicked = 'default';

  handleHomeClickEvent(value: string) {
    console.log('handler', value);
    
    this.isHomeClicked = value;
  
  }
  
}
