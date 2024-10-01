import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary classes
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

  // Declare the form group
  step4Form: FormGroup;

  constructor(private countryService: CountryService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    // Initialize the form group with form controls
    this.step4Form = this.formBuilder.group({
      schoolX: ['', Validators.required],
      regNoX: ['', Validators.required],
      yearX: ['', Validators.required],
      percentageX: ['', Validators.required],
      schoolXI: ['', Validators.required],
      regNoXI: ['', Validators.required],
      yearXI: ['', Validators.required],
      percentageXI: ['', Validators.required],
      schoolXII: ['', Validators.required],
      regNoXII: ['', Validators.required],
      yearXII: ['', Validators.required],
      percentageXII: ['', Validators.required]
    });

    // Check if data is in local storage and set it in the form
    const savedFormData = localStorage.getItem('step4FormData');
    if (savedFormData) {
      this.step4Form.setValue(JSON.parse(savedFormData));
    }

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

  // Function to store form values in local storage, print form values in the console, and navigate to step 5
  goToStep5() {
    if (this.step4Form.valid) {
      // Store form values in local storage
      localStorage.setItem('step4FormData', JSON.stringify(this.step4Form.value));

      // Print form values to console
      console.log('Form Values:', this.step4Form.value);

      // Navigate to step 5
      this.router.navigate(['/form/step5']); 
    } else {
      console.log('Form is invalid'); // Log message if form is invalid
    }
  }
}
