import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/demo/service/country.service';
import { SelectItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component implements OnInit{
  countries: any[] = [];
  selectedDrop: SelectItem = { value: '' };
  cities: any[];
  filteredCountries: any[] = [];

  constructor(private countryService: CountryService, private router:Router) {
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
    const query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      const country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(country);
      }
    }
    this.filteredCountries = filtered;
  }
  goToStep4() {
    this.router.navigate(['/form/step4']); 
  }
}


