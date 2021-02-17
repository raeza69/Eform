import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    protected http: HttpClient,
    protected router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm() {
    let fg = new FormGroup({});
    fg.addControl('userName', new FormControl({ value: undefined, disabled: false }, [Validators.required]));
    fg.addControl('password', new FormControl({ value: undefined, disabled: false }, [Validators.required]));
    return fg;
  }

  login() {
    let request = {
      ...this.form.getRawValue(),
    };
    return this.http
      .post<any>(environment.baseApiUrl + 'users/login', request).subscribe(res => {
        if (res > 1) {
          console.log('logged in');
          this.authService.loginStatus.next(true);
          this.router.navigateByUrl('dashboard');
        }
      });
  }
}
