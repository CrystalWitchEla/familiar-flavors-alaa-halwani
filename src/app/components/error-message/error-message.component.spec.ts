import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ErrorMessageComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(ErrorMessageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show an error msg on field touched and error present', () => {
    component.field = new FormGroup({ anyField: new FormControl() });

    component.field.markAsTouched();
    component.field.setErrors({ anyError: true });
    component.error = "anyError";

    expect(component.showComponent()).toBeTruthy();
  });

  it('should hide the error msg on field not touched', () => {
    component.field = new FormGroup({ anyField: new FormControl() });

    component.field.setErrors({ anyError: true });
    component.error = 'anyError';

    expect(component.showComponent()).toBeFalsy();
  });
  
  it('should show an error msg on field touched and no error', () => {
    component.field = new FormGroup({ anyField: new FormControl() });

    component.field.markAsTouched();
    component.error = 'anyError';

    expect(component.showComponent()).toBeFalsy();
  });
  
  it('should hide an error msg on field touched and has error but it is a diff error', () => {
    component.field = new FormGroup({ anyField: new FormControl() });

    component.field.markAsTouched();
    component.field.setErrors({ anyError: true });
    component.error = 'anotherError';

    expect(component.showComponent()).toBeFalsy();
  });

});
