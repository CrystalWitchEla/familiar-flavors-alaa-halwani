import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export class SignUpPageForm {
  private formBuilder: FormBuilder;
  private form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    let form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: [''],
      phone: ['', [Validators.required]],
    });

    form
      .get('confirmPassword')
      .setValidators(matchPasswordAndConfirmPassword(form));

    return form;
  }

  getForm(): FormGroup {
    return this.form;
  }
}

function matchPasswordAndConfirmPassword(form: FormGroup): ValidatorFn {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  const validator = () => {
    return password.value == confirmPassword.value
      ? null
      : { isntMatching: true };
  };

  return validator;
}
