import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { User } from 'src/app/model/user/User';
import { environment } from 'src/environments/environment';
import { AppState } from 'src/store/AppState';
import {
  login,
  loginFail,
  loginSuccess,
  recoverPassword,
  recoverPasswordFailed,
  recoverPasswordSuccess,
} from 'src/store/login/login.actions';
import { loginReducer } from 'src/store/login/login.reducers';
import { AppRoutingModule } from '../../app-routing.module';

import { LogInPage } from './log-in.page';

describe('LogInPage', () => {
  let component: LogInPage;
  let fixture: ComponentFixture<LogInPage>;
  let router: Router;
  let page;
  let store: Store<AppState>;
  let toastController: ToastController;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LogInPage],
        imports: [
          IonicModule.forRoot(),
          AppRoutingModule,
          ReactiveFormsModule,
          StoreModule.forFeature('login', loginReducer),
          AngularFireModule.initializeApp(environment.firebaseConfig)
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(LogInPage);
      router = TestBed.get(Router);
      store = TestBed.get(Store);
      toastController = TestBed.get(ToastController);

      component = fixture.componentInstance;
      page = fixture.debugElement.nativeElement;

      fixture.detectChanges();
    })
  );

  it('should create form on init', () => {
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();
  });

  it('should go to sign-up page on register', () => {
    spyOn(router, 'navigate');
    component.signup();
    expect(router.navigate).toHaveBeenCalledWith(['sign-up']);
  });

  it('should recover email/password on forgot email/password', () => {

    fixture.detectChanges();
    component.form.get('email').setValue('valid@email.com');
    page.querySelector('#recoverPasswordButton').click();
    store.select('login').subscribe((loginState) => {
      expect(loginState.isRecoveringPassword).toBeTruthy();
    });
  });

  it('should show success message when recovered password', () => {
    spyOn(toastController, 'create').and.returnValue(
      <any>Promise.resolve({ present: () => {} })
    );

    fixture.detectChanges();
    store.dispatch(recoverPassword());
    store.dispatch(recoverPasswordSuccess());

    expect(toastController.create()).toHaveBeenCalledTimes(1);
  });

  it('should show error message when recovered password failed', () => {
    spyOn(toastController, 'create').and.returnValue(
      <any>Promise.resolve({ present: () => {} })
    );

    fixture.detectChanges();
    store.dispatch(recoverPassword());
    store.dispatch(recoverPasswordFailed({ error: 'message' }));

    expect(toastController.create()).toHaveBeenCalledTimes(1);
  });

  it('should start login when logging in', () => {

    fixture.detectChanges();
    component.form.get('email').setValue('valid@email.com');
    component.form.get('password').setValue('anyPassword');
    page.querySelector('#loginButton').click();
    store.select('login').subscribe((loginState) => {
      expect(loginState.isLoggingIn).toBeTruthy();
    });
  });

  it('should send user to feed when login', () => {
    spyOn(router, 'navigate');

    fixture.detectChanges();
    store.dispatch(login());
    store.dispatch(loginSuccess({user: new User()}));

    store.select('login').subscribe((loginState) => {
      expect(loginState.isLoggedIn).toBeTruthy();
    });
    expect(router.navigate).toHaveBeenCalledWith(['feed']);
  });

  it('should display error message when user couldnt login', () => {
    spyOn(toastController, 'create').and.returnValue(
      <any>Promise.resolve({ present: () => {} })
    );

    fixture.detectChanges();
    store.dispatch(login());
    store.dispatch(loginFail({error: {message: 'error msg'}}));
    expect(toastController.create()).toHaveBeenCalledTimes(1);
  });
});
