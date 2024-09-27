import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/demo/service/country.service';
import { SelectItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, InputTextModule], // Add required modules here
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'] // Fix typo here from 'styleUrl' to 'styleUrls'
})
export class step1Component implements OnInit {
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
  goToStep2() {
    this.router.navigate(['/form/step2']); 
  }
  goTologin() {
    this.router.navigate(['']); 
  }
}
