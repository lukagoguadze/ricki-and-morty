import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-episod',
  templateUrl: './card-episod.component.html',
  styleUrls: ['./card-episod.component.css']
})
export class CardEpisodComponent {
  @Input() episode: any;
}
