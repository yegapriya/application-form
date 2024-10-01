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
  onSubmit() {
    if (this.form.valid) {
      console.log("Diploma Branch Studied:", this.form.get('value1')?.value);
      console.log("Name of the Board:", this.form.get('value2')?.value);
      console.log("% of Marks:", this.form.get('value3')?.value);
      console.log("Sem-1:", this.form.get('value4')?.value);
      console.log("Sem-2:", this.form.get('value5')?.value);
      console.log("Sem-3:", this.form.get('value6')?.value);
      console.log("Sem-4:", this.form.get('value7')?.value);
      console.log("Sem-5:", this.form.get('value8')?.value);
      console.log("Sem-6:", this.form.get('value9')?.value);
      console.log("Sem-7:", this.form.get('value10')?.value);
      console.log("Sem-8:", this.form.get('value11')?.value);
      console.log("Name of the Bank:", this.form.get('value12')?.value);
      console.log("Name of the Branch/Place:", this.form.get('value13')?.value);
      console.log("Bank Account Number:", this.form.get('value14')?.value);
      console.log("MICR Code of the Bank:", this.form.get('value15')?.value);
      console.log("IFSC Code of the Bank:", this.form.get('value16')?.value);
    } else {
      console.log('Form is not valid');
    }
  }
  
}
