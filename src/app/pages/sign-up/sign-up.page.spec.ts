import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../../app-routing.module';
import { SignUpPageModule } from './sign-up.module';

import { SignUpPage } from './sign-up.page';

describe('SignUpPage', () => {
  let component: SignUpPage;
  let fixture: ComponentFixture<SignUpPage>;
  let router: Router;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SignUpPage],
        imports: [
          IonicModule.forRoot(),
          AppRoutingModule,
          ReactiveFormsModule,
          SignUpPageModule,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(SignUpPage);
      router = TestBed.get(Router);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should navigate to feed', () => {
    spyOn(router, 'navigate');
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['feed']);
  });

  it('should create form on init', () => {
    fixture.detectChanges();
  });
});
