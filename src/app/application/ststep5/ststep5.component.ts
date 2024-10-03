import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { CountryService } from 'src/app/demo/service/country.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';

@Component({
  selector: 'app-ststep5',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DropdownModule, InputTextModule, AutoCompleteModule, CalendarModule, ChipsModule],
  templateUrl: './ststep5.component.html',
  styleUrls: ['./ststep5.component.scss']
})
export class Ststep5Component implements OnInit {
  countries: any[] = [];
  cities: any[] = [
    { name: 'Academic Stream', code: 'NY' },
    { name: 'Vocational Stream', code: 'RM' },
  ];

  study: any[] = [
    { name: 'Regular', code: 'NY' },
    { name: 'Part Time', code: 'RM' },
    { name: 'Distance', code: 'LDN' },
  ];

  exam: any[] = [
    { name: 'Yes', code: 'NY' },
    { name: 'No', code: 'RM' },
  ];
  
  filteredCountries: any[] = [];
  qualificationForm: FormGroup;

  constructor(
    private countryService: CountryService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.qualificationForm = this.fb.group({
      ugStream: [''],
      mathsMarkXI: [''],
      chemistryMarkXI: [''],
      physicsMarkXI: [''],
      totalMarksXI: [null],
      mathsMarkXII: [[]],
      chemistryMarkXII: [''],
      physicsMarkXII: [[]],
      totalMarkXII: [''],
      qualificationDegree: [''],
      universityName: [''],
      branch: [[]],
      yearOfPassing: [[]],
      percentage: [[]],
      modeOfStudy: [''],
      entranceExam: [''],
      gateScore: [[]],
      consortiumExamScore: [[]],
      tancetScore: [[]],
      yearOfPassingEntrance: [[]],
      modeOfStudyEntrance: ['']
    });
  }

  ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });

    // Retrieve data from local storage
    const savedData = localStorage.getItem('qualificationData');
    if (savedData) {
      this.qualificationForm.setValue(JSON.parse(savedData)); // Populate the form with saved data
    }
  }

  searchCountry(event: any) {
    const query = event.query.toLowerCase();
    this.filteredCountries = this.countries.filter(country => 
      country.name.toLowerCase().includes(query)
    );
  }
  
  goToStep6() {
    const formData = this.qualificationForm.value; // Get the form values
    localStorage.setItem('qualificationData', JSON.stringify(formData)); // Save it to local storage
    console.log(formData); // Log the form values to the console
    this.router.navigate(['/form/step6']); 
  }

  goToStep4() {
    this.router.navigate(['/form/step4']); 
  }
}

