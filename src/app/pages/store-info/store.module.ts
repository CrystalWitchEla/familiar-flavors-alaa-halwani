import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';

import { StorePage } from './store.page';
import { StoreInfoComponent } from '../../components/store-info/store-info.component';
import { MenuItemComponent } from '../../components/menu-item/menu-item.component';
import { MenuSlideComponent } from '../../components/menu-slide/menu-slide.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StorePageRoutingModule
  ],
  declarations: [
    StorePage,
    MenuItemComponent,
    MenuSlideComponent
  ]
})
export class StorePageModule {}
