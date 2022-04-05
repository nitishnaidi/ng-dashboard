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
  countrySuggestions: any[] = [];
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
  filterCountry(event: any){
    console.log("filter country",event);
    this.countrySuggestions=[];
    // this.countrySuggestions= this.countries;
    // for (let index = 0; index < this.countries.length; index++) {
    //   const country = this.countries[index];
    //   if(country.label.toLowerCase().includes(event.query.toLowerCase())){
    //     this.countrySuggestions.push(country);
    //   }
    // }

    this.countrySuggestions = this.countries.filter(country => country.label.toLowerCase().includes(event.query.toLowerCase()));
    

  }


}
