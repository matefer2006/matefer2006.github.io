import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfessionalComponent } from './professional/professional.component';
import { DetailsComponent } from './details/details.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  { title: 'Portoflio', path: '', component: HomeComponent },
  { title: 'Professional', path: 'professional', component: ProfessionalComponent },
  { title: 'Education', path: 'education', component: EducationComponent },
  { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
