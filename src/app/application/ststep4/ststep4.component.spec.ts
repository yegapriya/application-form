import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ststep4Component } from './ststep4.component';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';

describe('Ststep4Component', () => {
  let component: Ststep4Component;
  let fixture: ComponentFixture<Ststep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AutoCompleteModule,
        CalendarModule,
        ChipsModule,
        DropdownModule
      ],
      declarations: [Ststep4Component]
    }).compileComponents();

    fixture = TestBed.createComponent(Ststep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});