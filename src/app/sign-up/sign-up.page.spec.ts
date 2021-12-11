import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';

import { SignUpPage } from './sign-up.page';

describe('SignUpPage', () => {
  let component: SignUpPage;
  let fixture: ComponentFixture<SignUpPage>;
  let router: Router;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SignUpPage],
        imports: [IonicModule.forRoot(), AppRoutingModule],
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
});
