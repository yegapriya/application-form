import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/demo/service/country.service';

@Component({
  selector: 'app-ststep4',
  templateUrl: './ststep4.component.html',
  styleUrls: ['./ststep4.component.scss']
})
export class Ststep4Component implements OnInit {
  countries: any[] = [];
  cities: any[] = [
    { name: 'English', code: 'NY' },
    { name: 'Tamil', code: 'RM' },
    { name: 'Hindi', code: 'LDN' },
    { name: 'Spanish', code: 'IST' },
    { name: 'French', code: 'PRS' }
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
  value13: string[];
  value14: string[];
  constructor(private countryService: CountryService, private router:Router) {}

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
  goToStep3() {
    this.router.navigate(['/form/step3']); 
  }
  goToStep5() {
    this.router.navigate(['/form/step5']); 
  }
}