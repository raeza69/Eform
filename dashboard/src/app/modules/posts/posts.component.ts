import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  form: FormGroup;
  model: NgbDateStruct;

  private employementStatus = [
    { id: 'rbEmployed', name: 'Employed' },
    { id: 'rbUnEmployed', name: 'Un Employed' },
    { id: 'rbSelfEmployed', name: 'Self Employed' },
    { id: 'rbStudent', name: 'Student' }
  ];

  jobPositionList = [
    { id: 1, name: 'Software Engineer' },
    { id: 2, name: 'Security & Fraud Specialist' },
    { id: 3, name: 'Business Technology Specialist' },
    { id: 4, name: 'Risk Manager' },
    { id: 5, name: 'Compliance Officer' }
  ];

  constructor(
    protected http: HttpClient,
    protected router: Router,
  ) { }

  createForm() {
    let fg = new FormGroup({});
    fg.addControl('applicationId', new FormControl({ value: undefined, disabled: true }));
    fg.addControl('firstName', new FormControl({ value: undefined, disabled: false }, [Validators.required]));
    fg.addControl('lastName', new FormControl({ value: undefined, disabled: false }, [Validators.required]));
    fg.addControl('email', new FormControl({ value: undefined, disabled: false }, [Validators.required]));
    fg.addControl('applyPosition', new FormControl({ value: undefined, disabled: false }, [Validators.required]));
    fg.addControl('availableStartDate', new FormControl({ value: undefined, disabled: false }));
    fg.addControl('currentEmploymentStatus', new FormControl({ value: undefined, disabled: false }, [Validators.required]));
    fg.addControl('status', new FormControl({ value: 'draft', disabled: false }));
    return fg;
  }

  ngOnInit() {
    this.form = this.createForm();
  }

  jobSubmit(x) {
    console.log(this.form.get('availableStartDate').value);
    if (this.form.valid) {
      let request = {
        ...this.form.getRawValue(),
        availableStartDate: this.form.get('availableStartDate').value.year + '/' + this.form.get('availableStartDate').value.month + '/' + this.form.get('availableStartDate').value.day,
        status: x
      };
      return this.http
        .post<any>(environment.baseApiUrl + 'application', request).subscribe(res => {
          this.router.navigateByUrl('')
        });
    }
  }

}
