import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Episod } from '../episod.model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: Episod[] = [];
  selectedEpisode: number | null = null;

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.http
      .get('https://rickandmortyapi.com/api/episode')
      .subscribe(
        (data: any) => {
          this.episodes = data.results;
        },
        (error) => {
          console.error('Error fetching episodes:', error);
        }
      );
  }

  navigateToCharacters(episodeId: number): void {
    this.selectedEpisode = episodeId;
    this.router.navigate(['/characters', episodeId]);
  }
  

  toggleCharacterList(episodeId: number): void {
    console.log('Toggle Character List:', episodeId);
    this.selectedEpisode = this.selectedEpisode === episodeId ? null : episodeId;
  }
}
