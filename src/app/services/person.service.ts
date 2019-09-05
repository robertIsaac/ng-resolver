import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Person } from '../interfaces/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getPerson(id: number): Observable<Person> {
    return this.httpClient.get<Person[]>('assets/persons.json').pipe(
      map(persons => persons[id])
    );
  }
}
