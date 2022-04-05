import { Component } from '@angular/core';

@Component({
  selector: 'request-info',
  templateUrl: 'request-info.component.html',
  styleUrls: ['request-info.component.scss'],
})
export class RequestInfoComponent {
  selectedCountryAdvanced: any;
  lastSelectedCountry: any;
  countries: any[] = [];
  ngOnInit() {
    this.countries = [
      { label: 'Germany', value: 'ge' },
      { label: 'India', value: 'IN' },
      { label: 'USA', value: 'USA' },
      { label: 'Srilanka', value: 'SL' },
      { label: 'China', value: 'CN' },
    ];
  }

  processOnChangeEvent(value: any){
    console.log('process on change', value);
    this.lastSelectedCountry= this.selectedCountryAdvanced;
  }

  processOnClick() {
    console.log('processOnClick');
  }
}
