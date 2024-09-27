import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/demo/service/country.service';
import { SelectItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step6',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule, InputTextModule], 
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss'] 
})
export class Step6Component implements OnInit {
  countries: any[] = [];
  selectedDrop: SelectItem = { value: '' };
  cities: any[] = [];
  filteredCountries: any[] = [];

  // FormGroup Definition
  form: FormGroup = new FormGroup({
    value1: new FormControl(''),
    value2: new FormControl(''),
    value3: new FormControl(''),
    value4: new FormControl(''),
    value5: new FormControl(''),
    value6: new FormControl(''),
    value7: new FormControl(''),
    value8: new FormControl(''),
    value9: new FormControl(''),
    value10: new FormControl(''),
    value11: new FormControl(''),
    value12: new FormControl(''),
    value13: new FormControl(''),
    value14: new FormControl(''),
    value15: new FormControl(''),
    value16: new FormControl('')
  });

  constructor(
    private countryService: CountryService,
    private router: Router           
  ) {
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
  goToStep5(){
    this.router.navigate(['/form/step5']);
  }
}
