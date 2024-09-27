import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/demo/service/country.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';

@Component({
  selector: 'app-ststep5',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, InputTextModule, AutoCompleteModule, CalendarModule, ChipsModule],
  templateUrl: './ststep5.component.html',
  styleUrls: ['./ststep5.component.scss']
})
export class Ststep5Component implements OnInit {
  countries: any[] = [];
  cities: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  
  study: any[] = [
    { name: 'Online', code: 'NY' },
    { name: 'Offline', code: 'RM' },
    { name: 'Both', code: 'LDN' },
  ];

  exam: any[] = [
    { name: 'Yes', code: 'NY' },
    { name: 'No', code: 'RM' },
  ];
  
  filteredCountries: any[] = [];

  // ngModel variables
  value1: string; // Qualification degree
  value2: string; // Maths mark for XI
  value3: string; // Chemistry mark for XI
  value4: string; // Physics mark for XI
  value5: Date;   // Total marks for XI
  value6: string[]; // Chips for XII Maths mark
  value7: string; // Chemistry mark for XII
  value8: string; // Physics mark for XII
  value9: string; // Name of the University
  value10: string; // Total mark for XII
  value11: string[]; // Year of Passing
  value12: string[]; // Entrance exam scores
  value13: string; // Mode of Study
  value14: string; // Entrance exam attended
  value15: string; // Mode of Study for Entrance

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
  }

  searchCountry(event: any) {
    const query = event.query.toLowerCase();
    this.filteredCountries = this.countries.filter(country => 
      country.name.toLowerCase().includes(query)
    );
  }
  goToStep6() {
    this.router.navigate(['/form/step6']); 
  }
}
