import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonService } from './services/person.service';
import { Person } from './interfaces/person';

@Injectable()
export class PersonResolver implements Resolve<Person> {
  constructor(private personService: PersonService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.personService.getPerson(route.params.id);
  }
}
