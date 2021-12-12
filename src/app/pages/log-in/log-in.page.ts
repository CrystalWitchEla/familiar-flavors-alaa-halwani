import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from 'src/store/AppState';
import { Store } from '@ngrx/store';
import {
  login,
  recoverPassword,
} from 'src/store/login/login.actions';
import { LoginPageForm } from './log-in.page.form';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginState } from 'src/store/login/LoginState';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private toastController: ToastController,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
    this.store.select('login').subscribe(async (loginState) => {
      this.onIsRecoveredPassword(loginState);
      this.onError(loginState);
      this.onIsLoggedIn(loginState);
    });
  }

  private async onError(loginState: LoginState) {
    if (loginState.error) {
      const toaster = await this.toastController.create({
        position: 'bottom',
        message: loginState.error.message,
        color: 'danger',
      });
      toaster.present();
    }
  }

  // private onIsRecoveringPassword(loginState: LoginState) {
  //   if (loginState.isRecoveringPassword) {
  //     this.authService
  //       .recoverEmailPassword(this.form.get('email').value)
  //       .subscribe(
  //         () => {
  //           this.store.dispatch(recoverPasswordSuccess());
  //         },
  //         (error) => {
  //           this.store.dispatch(recoverPasswordFailed({ error }));
  //         }
  //       );
  //   }
  // }

  private async onIsRecoveredPassword(loginState: LoginState) {
    if (loginState.isRecoveredPassword) {
      const toaster = await this.toastController.create({
        position: 'bottom',
        message: 'Recovery email sent.',
        color: 'primary',
      });
      toaster.present();
    }
  }

  // private onIsLoggingIn(loginState: LoginState) {
  //   if (loginState.isLoggingIn) {
  //     const email = this.form.get('email').value;
  //     const pass = this.form.get('password').value;
  //     this.authService.login(email, pass).subscribe((user) => {
  //       this.store.dispatch(loginSuccess({ user }));
  //     }, error => {
  //       this.store.dispatch(loginFail({error}));
  //     });
  //   }
  // }

  private onIsLoggedIn(loginState: LoginState) {
    if (loginState.isLoggedIn) {
      this.router.navigate(['feed']);
    }
  }

  login() {
    this.store.dispatch(login());
  }

  forgotemailpassword() {
    this.store.dispatch(recoverPassword());
  }

  signup() {
    this.router.navigate(['sign-up']);
  }
}
