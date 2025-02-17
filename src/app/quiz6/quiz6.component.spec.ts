import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz6Component } from './quiz6.component';

describe('Quiz6Component', () => {
  let component: Quiz6Component;
  let fixture: ComponentFixture<Quiz6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quiz6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Quiz6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
