import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  x=0; y=0; z=0;
  noA = false;
  noB = false;
  isHomeClicked = 'default';

  handleHomeClickEvent(value: string) {
    console.log('handler', value);
    
    this.isHomeClicked = value;
  
  }

  handleSum(event: any) {
    if (event.sum) {
      this.noA=this.noB=false;
      this.z = event.sum;
    } else if (event.field === 'a'){
      this.noA = true;
      this.noB=false;
    } else {
      this.noB = true;
      this.noA=false;
    }
  }
  
}
