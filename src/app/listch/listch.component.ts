import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listch',
  templateUrl: './listch.component.html',
  styleUrls: ['./listch.component.css']
})
export class ListchComponent implements OnInit {
  @Input() episodeId: number | null = null;
  characters: any[] = [];

  constructor(private http: HttpClient,private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    const episodeIdParam = this.route.snapshot.paramMap.get('episodeId');
    const episodeId = episodeIdParam !== null ? +episodeIdParam : null;
  
    if (episodeId !== null) {
      this.loadCharacters(episodeId);
    } else {
      console.error('No episodeId provided.');
      this.characters = [];
    }
  }
  loadCharacters(episodeId: number): void {
    const episodeIdParam = this.route.snapshot.paramMap.get('episodeId');
  if (episodeIdParam !== null) {
    const apiUrl = `https://rickandmortyapi.com/api/episode/${+episodeIdParam}`;
    this.http.get(apiUrl).subscribe(
      (data: any) => {
        console.log('API Response:', data);
        console.log("rato")
        this.characters = data.characters;
      },
      (error) => {
        console.error('Error fetching characters:', error);
      }
    );
  } else {
    console.error('No episodeId provided.');
    this.characters = [];
  }
  
  }}
  
