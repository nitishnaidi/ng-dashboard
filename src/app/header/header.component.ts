import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.less"]
})

export class HeaderComponent implements OnInit {
  @Output() homeClicked = new EventEmitter<string>();
  flag = false;
  constructor(private router: Router) { 

  }

  ngOnInit() {

  }
  onClick(){
    // const now = new Date().getMilliseconds();
    // this.homeClicked.emit('home'+now);
    // this.flag = !this.flag;
    // this.homeClicked.emit(this.flag ? 'home': 'againHome');
    this.homeClicked.emit('home'+Math.random());
    this.router.navigateByUrl('home');
  }
}
