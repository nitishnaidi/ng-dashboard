import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.less"]
})

export class SideNavComponent implements OnInit {
  selectedItem = '';
  constructor(private router: Router) { 

  }

  ngOnInit() { }

  onClick(item: string) {
    console.log('clicked item is: ', item);
    this.selectedItem = item;
    this.router.navigateByUrl(this.selectedItem);
  }
}
