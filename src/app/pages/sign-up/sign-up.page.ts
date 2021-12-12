import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpPageForm } from './form/signup.page.form';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signupform: SignUpPageForm;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  register() {
    this.router.navigate(['feed']);
  }

  private createForm() {
    this.signupform = new SignUpPageForm(this.formBuilder);
  }
}
