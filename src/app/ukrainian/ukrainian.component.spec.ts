import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkrainianComponent } from './ukrainian.component';

describe('UkrainianComponent', () => {
  let component: UkrainianComponent;
  let fixture: ComponentFixture<UkrainianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UkrainianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkrainianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
