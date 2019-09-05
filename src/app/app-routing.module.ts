import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PersonResolver } from './person.resolver';


const routes: Routes = [
  {
    path: 'person/:id',
    component: PersonComponent,
    resolve: {
      person: PersonResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PersonResolver]
})
export class AppRoutingModule { }
