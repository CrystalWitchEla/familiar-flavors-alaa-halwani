import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = 
{
  apiKey: 'AIzaSyCQedsT70BqqUzmgfT1ph6TE-l0nRVvNB0',
  authDomain: 'capstone-79164.firebaseapp.com',
  projectId: 'capstone-79164',
  storageBucket: 'capstone-79164.appspot.com',
  messagingSenderId: '999940695805',
  appId: '1:999940695805:web:b8e36fa0e2bbae67f68094',
  measurementId: 'G-7NBJ3ST55X',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
