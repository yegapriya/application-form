import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/demo/service/country.service';
import { SelectItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-step6',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, InputTextModule], 
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss'] 
})
export class Step6Component implements OnInit {  // Ensure proper case
  countries: any[] = [];
  selectedDrop: SelectItem = { value: '' };
  cities: any[] = [];
  filteredCountries: any[] = [];
value1: any;
value2: any;
value3: any;
value4: any;
value5: any;
value6: any;
value7: any;
value8: any;
value9: any;
value10: any;
value11: any;
value12: any;
value13: any;
value14: any;
value15: any;
value16: any;

  constructor(private countryService: CountryService) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
  }

  searchCountry(event: any) {
    const filtered: any[] = [];
    const query = event.query.toLowerCase();
    this.countries.forEach(country => {
      if (country.name.toLowerCase().startsWith(query)) {
        filtered.push(country);
      }
    });
    this.filteredCountries = filtered;
  }
}