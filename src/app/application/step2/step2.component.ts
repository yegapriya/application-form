import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/demo/service/country.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, InputTextModule, AutoCompleteModule, CalendarModule, ChipsModule],
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  countries: any[] = [];
  cities: any[];
  filteredCountries: any[] = [];
  value1: any;
  value2: any;
  value5: any;
  value6: any;
  value10: any;

  constructor(private countryService: CountryService, private router: Router) {
    this.cities = [
      { name: 'Male', code: 'M' },
      { name: 'Female', code: 'F' },
      { name: 'Other', code: 'O' },
    ];
  }

  ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
  }

  searchCountry(event: any) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      const country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(country);
      }
    }
    this.filteredCountries = filtered;
  }

  goToStep3() {
    this.router.navigate(['/form/step3']); 
  }
}
