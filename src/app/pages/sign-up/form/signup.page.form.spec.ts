import { FormBuilder, FormGroup } from '@angular/forms';
import { SignUpPageForm } from './signup.page.form';

describe('SignUpPageForm', () => {
  let signUpPageForm: SignUpPageForm;
  let form: FormGroup;

  beforeEach(() => {
    signUpPageForm = new SignUpPageForm(new FormBuilder());
    form = signUpPageForm.getForm();
  });

  it('should empty name be invalid', () => {
    expect(form.get('name').valid).toBeFalsy();
  });

  it('should empty email be invalid', () => {
    expect(form.get('email').valid).toBeFalsy();
  });

  it('should empty password be invalid', () => {
    expect(form.get('password').valid).toBeFalsy();
  });

  it('should empty phone be invalid', () => {
    expect(form.get('phone').valid).toBeFalsy();
  });

  
  it('should invalid email be invalid', () => {
    form.get('email').setValue('invalidEmail');

    expect(form.get('email').valid).toBeFalsy();
  });

  it('should password less than 7 characters be invalid', () => {
    form.get('password').setValue('12345');

    expect(form.get('password').valid).toBeFalsy();
  });

  it('should password password different from repeat password be invalid', () => {
    form.get('password').setValue('anyPassword');
    form.get('confirmPassword').setValue('anotherPassword');

    expect(form.get('confirmPassword').valid).toBeFalsy();
  });

  it('should form be valid', () => {
    form.get('name').setValue('anyName');
    form.get('email').setValue('any@email.com');
    form.get('password').setValue('anyPassword');
    form.get('confirmPassword').setValue('anyPassword');
    form.get('phone').setValue('anyPhone');

    expect(form.valid).toBeTruthy();
  });
});
