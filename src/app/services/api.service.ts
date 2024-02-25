import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient:HttpClient) { }
  
  getCharacterData(page: number): Observable<any> {
    return this.httpclient.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
  }

  searchCharacters(page: number, searchTerm?: string): Observable<any> {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    if (searchTerm) {
      url += `&name=${searchTerm}`;
    }
    return this.httpclient.get(url);
  }
 
}
