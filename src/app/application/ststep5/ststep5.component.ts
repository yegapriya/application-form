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
  goToStep4() {
    this.router.navigate(['/form/step4']); 
  }
}
