import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodeServService {
  constructor(private httpclient:HttpClient) { }
  getEpisodeData() {
   
    return this.httpclient.get(`https://rickandmortyapi.com/api/character`);
  }
}
