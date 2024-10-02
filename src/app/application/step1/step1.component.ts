



import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/demo/service/country.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DropdownModule, InputTextModule],
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  form: FormGroup;
  countries: any[] = [];
  
  // Dropdown data
  cities: any[] = [
    { name: 'Academic Stream', code: 'ACA' },
    { name: 'Vocational Stream', code: 'VOC' },
  ];

  admissionType: any[] = [
    { name: 'Management', code: 'REG' },
    { name: 'counseling', code: 'LATE' },
    { name: 'Transfer/Re-admission', code: 'TRANS' },
    
  ];

  scholarship: any[] = [
    { name: 'PMSS', code: 'YES' },
    { name: 'FG', code: 'NO' },
    { name: '7.5', code: 'YES' },
    { name: 'Not Applicated', code: 'NO' },
  ];

  constructor(
    private countryService: CountryService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      selectedCourse: [''],
      selectedAdmissionType: [''],
      selectedDegree: [''],
      applicationNo: [''],
      counselingNo: [''],
      selectedScholarship: [''],
      selectedStream: [''],
      selectedStudyType: [''],
      selectedExam: ['']
    });
  }

  ngOnInit() {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
    this.loadDataFromLocalStorage();
  }

  goToStep2() {
    if (this.form.valid) {
      this.logDropdownValues();
      localStorage.setItem('applicationData', JSON.stringify(this.form.value));
      this.router.navigate(['/form/step2']);
    } else {
      console.log('Form is not valid');
    }
  }

  goTologin() {
    this.router.navigate(['']);
  }

  loadDataFromLocalStorage() {
    const storedData = localStorage.getItem('applicationData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this.form.patchValue(parsedData);
    }
  }

  logDropdownValues() {
    console.log("Selected Course:", this.form.get('selectedCourse')?.value);
    console.log("Selected Admission Type:", this.form.get('selectedAdmissionType')?.value);
    console.log("Selected Degree:", this.form.get('selectedDegree')?.value);
    console.log("Application No:", this.form.get('applicationNo')?.value);
    console.log("AU Counseling No:", this.form.get('counselingNo')?.value);
    console.log("Selected Scholarship:", this.form.get('selectedScholarship')?.value);
    console.log("Selected Stream:", this.form.get('selectedStream')?.value);
    console.log("Selected Study Type:", this.form.get('selectedStudyType')?.value);
    console.log("Selected Exam:", this.form.get('selectedExam')?.value);
  }
}
