import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LogInPage } from './log-in.page';

describe('LogInPage', () => {
  let component: LogInPage;
  let fixture: ComponentFixture<LogInPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LogInPage],
        imports: [
          IonicModule.forRoot(), 
          ReactiveFormsModule
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(LogInPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create form on init', () => {
    component.ngOnInit();
    expect(component.form).not.toBeUndefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
