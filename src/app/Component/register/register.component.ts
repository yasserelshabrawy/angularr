import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  {
  token:any
registerGroup!:FormGroup
  constructor(
    private httpclient: HttpClient,
    private formbuilder: FormBuilder,
    private auth:AuthService,
    private router:Router,
    private snackBar:MatSnackBar

  ) {
    this.registerGroup = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})/),
        ],
      ],
      rePassword: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{8,})/),

        ],
      ],
      phone: ['', [Validators.required]],
    }
    );

    
  }
   registed() {
    if(this.registerGroup.valid){

      this.auth.register(this.registerGroup.value).subscribe((res)=>{
        this.token=res
        console.log(res);
        this.router.navigate(['login'])

      })
      console.log('sucdess');
    }else{
      console.log('failed');

    }
  }
}

