import { ComponentFixture, TestBed } from '@angular/core/testing';

import {step1Component } from './step1.component';

describe('Step1Component', () => {
  let component: step1Component;
  let fixture: ComponentFixture<step1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [step1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(step1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
