import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.less"]
})

export class SideNavComponent implements OnInit, OnChanges {
  @Input() selectedItem = '';
  constructor(private router: Router) { 

  }

  ngOnInit() { 
    console.log('init selected Item: ', this.selectedItem);    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on change selected Item: ', this.selectedItem);  
  }

  onClick(item: string) {
    console.log('clicked item is: ', item);
    this.selectedItem = item;
    this.router.navigateByUrl(this.selectedItem);
  }
}
