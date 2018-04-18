import { Injectable } from '@angular/core';
import { Observable } from'rxjs/Observable';
// import { HttpClient } from'@angular/common/http';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   

import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  

export interface Cat {
  name: string;
}

@Injectable()
export class CatService {

  public name;
  constructor(private http: Http) {}

  // getAllCats(): Observable<Cat[]> {
  //   // return this.http.get<Cat[]>('http://localhost:8000/api/cats');
  //   return this.http.get('/api/food');
  // }
  getFoods() {
    return this.http.get('http://localhost:9999/api/cats').map((response: Response) =>response.json());
  } 

  // getCat(name: string): Observable<Cat> {
  //   return this.http.get<Cat>('http://localhost:8000/api/cats/' + name);
  // }

  // insertCat(cat: Cat): Observable<Cat> {
  //   return this.http.post<Cat>('http://localhost:8000/api/cats/', cat);
  // }

  // updateCat(cat: Cat): Observable<void> {
  //   return this.http.put<void>('http://localhost:8000/api/cats/' + cat.name, cat);
  // }

  deleteCat(name: string) {
    return this.http.delete('http://localhost:8000/api/cats/' + name);
  }
}
