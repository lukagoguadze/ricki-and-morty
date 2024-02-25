import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchComponent } from './listch.component';

describe('ListchComponent', () => {
  let component: ListchComponent;
  let fixture: ComponentFixture<ListchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListchComponent]
    });
    fixture = TestBed.createComponent(ListchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
