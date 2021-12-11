import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInPageRoutingModule } from './log-in-routing.module';

import { LogInPage } from './log-in.page';
import { LoginPageForm } from './log-in.page.form';
import { ErrorMessageComponent } from '../components/error-message/error-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogInPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LogInPage, ErrorMessageComponent]
})
export class LogInPageModule {}
