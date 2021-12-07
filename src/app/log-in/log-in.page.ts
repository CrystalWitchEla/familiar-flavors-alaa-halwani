import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './log-in.page.form';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  form: LoginPageForm;

  constructor(private router : Router, private formBuilder : FormBuilder) {}

  ngOnInit() {
    //this.form = new LoginPageForm(this.formBuilder).createForm();
  }
}
