import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 
  profileform:FormGroup;
  form: FormGroup;

  constructor(private router: Router,private fb: FormBuilder) {
      
    this.form = this.fb.group({

      username: [''],
      email: [''],
    
    });
   }

  ngOnInit(): void {
  }
    loginsuccess(){
      this.router.navigateByUrl('userlist');
    }
}
