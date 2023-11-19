import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
  
})
export class ProfileComponent {
  constructor(private snackBar:MatSnackBar){
    console.log('hello');
    snackBar.open('message', 'undo');
  }


}
