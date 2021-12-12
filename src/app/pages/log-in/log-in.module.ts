import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInPageRoutingModule } from './log-in-routing.module';

import { LogInPage } from './log-in.page';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { AppStoreModule } from 'src/store/AppStoreModule';
import { Store, StoreModule } from '@ngrx/store';
import { loginReducer } from 'src/store/login/login.reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogInPageRoutingModule,
    ReactiveFormsModule,
    // StoreModule.forRoot([]),
    StoreModule.forFeature("login", loginReducer)
  ],
  declarations: [LogInPage, ErrorMessageComponent]
})
export class LogInPageModule {}
