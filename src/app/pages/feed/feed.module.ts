import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedPageRoutingModule } from './feed-routing.module';

import { FeedPage } from './feed.page';
import { StoreInfoComponent } from '../../components/store-info/store-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPageRoutingModule
  ],
  declarations: [
    FeedPage,
    StoreInfoComponent
  ]
})
export class FeedPageModule {}
