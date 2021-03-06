import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ApplyComponent } from './features/apply/apply.component';
import { GiveComponent } from './features/give/give.component';
import { HomeComponent } from './features/home/home.component';
import { RequestInfoComponent } from './features/request-info/request-info.component';
import { VisitComponent } from './features/visit/visit.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SideNavComponent,
    VisitComponent,
    GiveComponent,
    RequestInfoComponent,
    ApplyComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
