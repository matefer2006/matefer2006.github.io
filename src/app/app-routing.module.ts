import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { DetailsComponent } from './details/details.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  { title: 'Portoflio', path: '', component: HomeComponent },
  { title: 'Professional', path: 'page1', component: Page1Component },
  { title: 'Education', path: 'page2', component: Page2Component },
  { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
