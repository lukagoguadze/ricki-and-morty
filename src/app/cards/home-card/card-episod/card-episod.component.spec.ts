import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEpisodComponent } from './card-episod.component';

describe('CardEpisodComponent', () => {
  let component: CardEpisodComponent;
  let fixture: ComponentFixture<CardEpisodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardEpisodComponent]
    });
    fixture = TestBed.createComponent(CardEpisodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
