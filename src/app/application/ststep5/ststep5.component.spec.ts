import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ststep5Component } from './ststep5.component';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';

describe('Ststep5Component', () => {
  let component: Ststep5Component;
  let fixture: ComponentFixture<Ststep5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AutoCompleteModule,
        CalendarModule,
        ChipsModule,
        DropdownModule
      ],
      declarations: [Ststep5Component]
    }).compileComponents();

    fixture = TestBed.createComponent(Ststep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
