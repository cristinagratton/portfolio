import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderToolbarComponent } from './header-toolbar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HeaderToolbarComponent],
  imports: [
    CommonModule, SharedModule,
  ], 
  exports: [HeaderToolbarComponent]
})
export class HeaderToolbarModule { }
