import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';

import { LogInPage } from './log-in.page';

describe('LogInPage', () => {
  let component: LogInPage;
  let fixture: ComponentFixture<LogInPage>;
  let router: Router;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LogInPage],
        imports: [IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule],
      }).compileComponents();

      fixture = TestBed.createComponent(LogInPage);
      router = TestBed.get(Router);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create form on init', () => {
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();
  })

  it('should go to feed page on login', () => {
    spyOn(router, 'navigate');
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['feed']);
  });

  it('should go to sign-up page on register', () => {
    spyOn(router, 'navigate');
    component.signup();
    expect(router.navigate).toHaveBeenCalledWith(['sign-up']);
  });
});
