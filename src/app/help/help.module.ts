import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleSpaModule } from 'src/single-spa/single-spa.module';

import { HelpComponent } from './help.component';
import { HelpRoutingModule } from './help-routing.module';

@NgModule({
  declarations: [
    HelpComponent,
  ],
  imports: [
    CommonModule,
    HelpRoutingModule,
    SingleSpaModule,
  ],
})
export class HelpModule { }
