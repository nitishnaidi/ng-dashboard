import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './features/apply/apply.component';
import { ErrorComponent } from './features/error/error.component';
import { GiveComponent } from './features/give/give.component';
import { HomeComponent } from './features/home/home.component';
import { RequestInfoComponent } from './features/request-info/request-info.component';
import { VisitComponent } from './features/visit/visit.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'info', component: RequestInfoComponent},
    {path: 'visit', component: VisitComponent},
    {path: 'apply', component: ApplyComponent},
    {path: 'give', component: GiveComponent},
    {path: '**', component: ErrorComponent},
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {}
