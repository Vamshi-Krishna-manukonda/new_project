import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  employeeForm: FormGroup;
 submitted=false;

  constructor(private formbuilder: FormBuilder) {
    this.employeeForm = this.formbuilder.group({
      empId: ['', [Validators.required]],
      empName: ['', [Validators.required]],
      Designation:['',[Validators.required]],
      Salary:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[6789]\d{0-9}$')]],
      Gender:['',[Validators.required]],
      LanguagesKnown:['',[Validators.required]],
      Qualification:['',[Validators.required]],

    });
  }
  ngOnInit() { 
 
  }


  onSubmit() {
    
    this.submitted = true;
    console.log(this.employeeForm);

  }
}
