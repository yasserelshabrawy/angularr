import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  token: any;
  public storage: any;
  loginGroup!: FormGroup;
  constructor(
    private httpclient: HttpClient,
    private formbuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginGroup = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})/),
        ],
      ],
    });
  }
  logined() {
    if (this.loginGroup.valid) {
      this.auth.login(this.loginGroup.value).subscribe((res) => {
        this.token = res;
        console.log(res);
        if (this.token.message == 'success') {
          this.storage = localStorage.setItem('token', this.token.token);
          this.router.navigate(['home']);
        }
      });
    } else {
      console.log('failed');
    }
  }
}

